# Import necessary libraries and modules
from fastapi import APIRouter, HTTPException
from typing import List
from services import github
import logging

# Instantiate APIRouter
router = APIRouter()

# Create a logger instance
logger = logging.getLogger(__name__)

# Route for searching GitHub repositories
# It uses 'get' method and the path is "/search/{username}/{keyword}"
# The response model for this route is a List of github.Repository
# When the route is hit, it invokes the function search_repositories
# The function takes in username and keyword as parameters
@router.get("/search/{username}/{keyword}", response_model=List[github.Repository])
async def search_repositories(username: str, keyword: str):
    try:
        # Search for repositories using the github service's search_repositories function
        return github.search_repositories(username, keyword)
    except Exception as e:
        # If an exception occurs during the process, a HTTPException with status code 500 is raised
        logger.error(f"Exception: {str(e)}")
        raise HTTPException(status_code=500)
