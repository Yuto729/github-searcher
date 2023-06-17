# Import necessary libraries and modules
from fastapi import FastAPI
from routers import search
from starlette.middleware.cors import CORSMiddleware

# Create an instance of the FastAPI class
app = FastAPI()

# Add middleware for Cross-Origin Resource Sharing (CORS)
# This allows the API to respond to requests from any origin, using any method, with any headers
# The 'allow_credentials' flag allows cookies to be included in the requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,   # Allows cookies to be included in requests
    allow_methods=["*"],      # Allows any HTTP method
    allow_headers=["*"]       # Allows any HTTP method
)


# Include the 'search' router
# This allows the app to delegate requests to the 'search' router
app.include_router(search.router)