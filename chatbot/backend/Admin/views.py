import os
import chromadb
import time
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from dotenv import load_dotenv
from .models import ProcessedMarkdown
# Load environment variables
load_dotenv()

# Initialize ChromaDB
chroma_client = chromadb.PersistentClient(path="./chroma_db")
embedding_function = OpenAIEmbeddings(
    model="text-embedding-3-small",  # Updated to use text-embedding-3-small
    openai_api_key=os.getenv("OPENAI_API_KEY")
)
vector_store = Chroma(collection_name="markdown_vectors", client=chroma_client, embedding_function=embedding_function)

# Directory where Markdown files are stored
MD_FOLDER = "api_docs/"


class ProcessMarkdownAPIView(APIView):

    def post(self, request):
        """Process and store Markdown files in ChromaDB"""
        try:
            # Get all markdown files from the directory
            files = [f for f in os.listdir(MD_FOLDER) if f.endswith(".md")]

            if not files:
                return Response(
                    {"message": "No Markdown files found"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            processed_files = []
            failed_files = []

            for file in files:
                try:
                    file_path = os.path.join(MD_FOLDER, file)

                    # Read the content
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()

                    # Generate a unique ID for ChromaDB
                    vector_store_id = f"md_{file}_{int(time.time())}"

                    # Store in ChromaDB
                    vector_store.add_texts(
                        texts=[content],
                        metadatas=[{"source": file}],
                        ids=[vector_store_id]
                    )

                    # Record in database
                    ProcessedMarkdown.objects.create(
                        file_name=file,
                        status='SUCCESS',
                        vector_store_id=vector_store_id
                    )

                    # Delete the processed file
                    os.remove(file_path)
                    processed_files.append(file)

                except Exception as e:
                    # Record failed processing
                    ProcessedMarkdown.objects.create(
                        file_name=file,
                        status='FAILED',
                        error_message=str(e)
                    )
                    failed_files.append(file)

            response_data = {
                "message": f"Processing completed",
                "processed_files": processed_files,
                "failed_files": failed_files,
                "total_processed": len(processed_files),
                "total_failed": len(failed_files)
            }

            if failed_files:
                return Response(response_data, status=status.HTTP_207_MULTI_STATUS)
            return Response(response_data, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response(
                {"error": f"Processing failed: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class QueryMarkdownAPIView(APIView):

    def post(self, request):
        """Query the stored Markdown files and get an answer from LLM"""
        query = request.data.get("query", "")

        if not query:
            return Response({"error": "Query is required"}, status=status.HTTP_400_BAD_REQUEST)

        retriever = vector_store.as_retriever(search_type="similarity", search_kwargs={"k": 5})  # Retrieve top 3 matches

        # Define Prompt
        template = """Use the following Markdown-based documentation to answer the query.
        If the answer is not in the provided content, just say "I don't know."

        Context: {context}

        Question: {question}
        Answer:
        """
        prompt = PromptTemplate(template=template, input_variables=["context", "question"])

        qa_chain = RetrievalQA.from_chain_type(
            llm=ChatOpenAI(
                model="gpt-4o-mini",  # Updated to use gpt-4o-mini
                temperature=0.5,
                openai_api_key=os.getenv("OPENAI_API_KEY"),
            ),
            chain_type="stuff",
            retriever=retriever,
            chain_type_kwargs={"prompt": prompt}
        )

        response = qa_chain.run(query)
        return Response({"answer": response}, status=status.HTTP_200_OK)




class ListStoredFilesAPIView(APIView):

    def get(self, request):
        """Retrieve all stored files in ChromaDB"""
        try:
            collection = chroma_client.get_collection("markdown_vectors")
            stored_metadata = collection.get()["metadatas"]
            # print(collection.get())
            if not stored_metadata:
                return Response({"message": "No files found in ChromaDB"}, status=status.HTTP_404_NOT_FOUND)

            file_list = [meta["source"] for meta in stored_metadata if "source" in meta]

            return Response({"stored_files": file_list}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)