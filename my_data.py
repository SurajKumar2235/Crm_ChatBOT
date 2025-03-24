from firecrawl import FirecrawlApp
from dotenv import load_dotenv
import os
import csv
from bs4 import BeautifulSoup
import re

load_dotenv()
app = FirecrawlApp(api_key=os.getenv("FIRE_CRAWL_API_KEY"))

# Scrape a website:
scrape_status = app.scrape_url(
    'https://www.zoho.com/crm/developer/docs/api/v7/', 
    params={'formats': ['markdown', 'html']}
)

def extract_api_details(markdown_text):
    # Regular expression pattern to match [RequestType API Detail](link)
    pattern = r'\[([A-Z]+)([^]]+)\]\(([^)]+)\)'
    matches = re.findall(pattern, markdown_text)
    
    api_details = []
    for match in matches:
        request_type = match[0]  # The part in first capture group (e.g., GET, POST)
        api_name = match[1].strip()  # The part between request type and closing bracket
        link = match[2]  # The part in parentheses
        
        api_details.append({
            'request_type': request_type,
            'api_name': api_name,
            'link': link
        })
    
    return api_details

# Extract API details from markdown content
if scrape_status and 'markdown' in scrape_status:
    api_details = extract_api_details(scrape_status['markdown'])
    
    # Save to CSV
    with open('api_details.csv', 'w', newline='', encoding='utf-8') as file:
        writer = csv.DictWriter(file, fieldnames=['request_type', 'api_name', 'link'])
        writer.writeheader()
        writer.writerows(api_details)

# Example of what it will extract:
# [GET Modules](link) -> {'request_type': 'GET', 'api_name': ' Modules', 'link': 'link'}
# [POST Create Custom Module](link) -> {'request_type': 'POST', 'api_name': ' Create Custom Module', 'link': 'link'}
