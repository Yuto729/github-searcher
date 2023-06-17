# Github Searcher

## Overview

"Github Searcher" is an application that allows users to enter a keyword and username in the browser, performs a search via the Github API in the backend, and displays up to 50 results. The frontend is implemented with TypeScript and Next.js, and the backend is implemented with FastAPI.

## Usage

1. Access the application from your browser.
2. Enter a keyword and username in the search bar.
3. Clicking the search button will search for the corresponding information via the Github API and display up to 50 results.

## Environment Setup

### Prerequisites
- Windows 11 Home 22H2
- Node.js v18.16.0 
- Python 3.11.064
- pip 23.1.1

### Setup Steps

1. Clone or download this repository.

    ```
    git clone https://github.com/Yuto729/github-searcher.git
    cd github-searcher
    ```

2. Install the necessary packages.

    Frontend:

    ```
    cd src
    cd frontend
    npm install
    ```

    Backend:

    ```
    cd src
    cd backend
    pip install -r requirements.txt
    ```

3. Launch each server.

    Frontend:

    ```
    cd src
    cd frontend
    npm run dev
    ```

    Backend:

    ```
    cd src
    cd backend
    uvicorn main:app --reload
    ```

Now, the frontend can be accessed at `http://localhost:3000`, and the backend at `http://localhost:8000`.

## Contributing

1. Fork the repo (https://github.com/yourusername/github-searcher/fork)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


## Contact

If you have any issues or suggestions for improvement, please let us know via Github issues.
