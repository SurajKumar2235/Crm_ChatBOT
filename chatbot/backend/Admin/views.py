import os
import markdown
import chromadb
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from dotenv import load_dotenv
from langchain.chains import RetrievalQA
from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate

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
        files = [f for f in os.listdir(MD_FOLDER) if f.endswith(".md")]

        if not files:
            return Response({"message": "No Markdown files found"}, status=status.HTTP_400_BAD_REQUEST)

        docs = []
        for i, file in enumerate(files):
            with open(os.path.join(MD_FOLDER, file), "r", encoding="utf-8") as f:
                content = f.read()
                docs.append({"text": content, "source": file})

        # Store in ChromaDB
        vector_store.add_texts(
            texts=[doc["text"] for doc in docs],
            metadatas=[{"source": doc["source"]} for doc in docs],
            ids=[str(i) for i in range(len(docs))]  # Ensure unique IDs
        )

        return Response({"message": f"{len(docs)} Markdown files processed and stored"}, status=status.HTTP_201_CREATED)


class QueryMarkdownAPIView(APIView):
    def post(self, request):
        """Query the stored Markdown files and get an answer from LLM"""
        query = request.data.get("query", "")

        if not query:
            return Response({"error": "Query is required"}, status=status.HTTP_400_BAD_REQUEST)

        retriever = vector_store.as_retriever(search_type="similarity", search_kwargs={"k": 3})  # Retrieve top 3 matches

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
            print(collection.get())
            if not stored_metadata:
                return Response({"message": "No files found in ChromaDB"}, status=status.HTTP_404_NOT_FOUND)

            file_list = [meta["source"] for meta in stored_metadata if "source" in meta]

            return Response({"stored_files": file_list}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)