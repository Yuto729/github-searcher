# Import necessary libraries and modules
import httpx
from pydantic import BaseModel
from typing import List
import logging

# Create a logger instance
logger = logging.getLogger(__name__)

# Define a Pydantic model for GitHub repositories
# The model includes 'id', 'name', 'html_url' and 'description' fields
class Repository(BaseModel):
    id: int
    name: str
    html_url: str
    description: str

# Define a function that sends a GET request to the GitHub API
# The function takes in a username and a keyword as parameters
# The function returns a list of Repository objects

def search_repositories(username: str, keyword: str) -> List[Repository]:
    try:
        # Send a GET request to the GitHub API
        response = httpx.get(f'https://api.github.com/search/repositories?q={keyword}+user:{username}')
        # Raise an exception if the GET request is unsuccessful
        response.raise_for_status()
    except httpx.HTTPStatusError as e:
        # If a HTTPStatusError occurs during the request, log the error message
        logger.error(f"HTTPStatusError: {str(e)}")
        # And raise the error again to be caught by the calling function
        raise
    except Exception as e:
        # If an unspecified exception occurs, log the error message
        logger.error(f"Exception: {str(e)}")
        # And raise the error again to be caught by the calling function
        raise

    # Extract the JSON data from the response
    data = response.json()

    # Create a list of Repository objects from the first 50 items in the data
    return [Repository(**repo) for repo in data["items"][:50]]


