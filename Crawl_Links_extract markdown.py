from firecrawl import FirecrawlApp
from dotenv import load_dotenv
import os
import csv
from bs4 import BeautifulSoup
import re
import typing
import time
load_dotenv()
app = FirecrawlApp(api_key=os.getenv("FIRE_CRAWL_API_KEY"))

# Scrape a website:
# scrape_status = app.scrape_url(
#     'https://www.zoho.com/crm/developer/docs/api/v7/activate-custom-layout.html', 
#     params={'formats': ['markdown', 'html']}
# )

# print(scrape_status['markdown'])
def scrape_links(URL):
    scrape_status = app.scrape_url(
        URL, 
        params={'formats': ['markdown']}
    )
    return scrape_status['markdown']


def Extract_API_details():


    # Read the CSV file
    with open('api_details.csv', 'r', newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        count=0
        for row in reader:
            request_type = row['request_type']
            api_name = row['api_name']
            link = row['link']
            count+=1
            # Save the markdown content
            if count % 5 == 0:
                time.sleep(30)  # Wait for 6 seconds after every 15 rows
            # If request_type is present, scrape the data
            if request_type:
                markdown_content = scrape_links(link)
                
                
                filename = f"{api_name.replace(' ', '_')}_{count+39+29+54+21+200}.md"
                with open(filename, 'w', encoding='utf-8') as mdfile:
                    mdfile.write(markdown_content)
                
                print(f"Scraped and saved: {filename}")


def move_md_files_to_api_docs():
    import os
    import shutil

    # Create api_docs folder if it doesn't exist
    if not os.path.exists('./api_docs1'):
        os.makedirs('./api_docs1')

    # Get all .md files in the current directory
    md_files = [f for f in os.listdir('.') if f.endswith('.md')]

    # Move each .md file to api_docs folder
    for file in md_files:
        shutil.move(file, os.path.join('./api_docs1', file))
        print(f"Moved {file} to api_docs1 folder")

# Call the function after extracting API details
# move_md_files_to_api_docs()

if __name__ == "__main__":
    move_md_files_to_api_docs()

'''
# Install with pip install firecrawl-py
from firecrawl import FirecrawlApp
from pydantic import BaseModel, Field
from typing import Any, Optional, List

app = FirecrawlApp(api_key='fc-b5e53aa1cce5492185b2748c79cc1e2a')

class NestedModel1(BaseModel):
    request_type: str
    api_overview: str
    curl_request: str
    payload_instruction: str = None
    Details_instruction: str

class ExtractSchema(BaseModel):
    api_endpoints: list[NestedModel1]

data = app.extract([
  "https://www.zoho.com/crm/developer/docs/api/v7/*"
], {
    'prompt': 'Extract the request type, API overview, and curl request for each API endpoint. Include payload instruction if available.',
    'schema': ExtractSchema.model_json_schema(),
})


'''