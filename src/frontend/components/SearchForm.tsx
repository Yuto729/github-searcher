// Import necessary libraries and modules
import { useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import React  from "react";
import styles from "../styles/Home.module.css";

// Define TypeScript interfaces for repository data and form props
interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}
interface SearchFormProps {
  onSearch: (repositories: Repository[]) => void;
}

// Define the SearchForm functional component
const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  // Define the SearchForm functional component
  const [username, setUsername] = useState("");
  const [keyword, setKeyword] = useState("");

  // Initialize the router for navigation
  const router = useRouter();

// Define the function for searching repositories
  const searchRepositories = async () => {
    if (!username || !keyword) {
        // If username or keyword is empty, do not send the API request
        return;
    }
    try {
    const response = await axios.get(`http://127.0.0.1:8000/search/${username}/${keyword}`);
    onSearch(response.data);
    }
    catch (error) {
        // Handle Axios errors
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 500) {
                // Redirect to /500 page if the error was a 500 error
                router.replace('/500');
              } 
            else if (error.response && error.response.status === 404) {
                // Redirect to /404 page if the error was a 404 error
                router.replace('/404');
              } 
            console.error(error.message);
          } 
          
          else {
            // Handle generic errors here
            console.error(error);
    }
  }
};

  // Render the form
  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="GitHub username"
        onChange={(event) => setUsername(event.target.value)}
      />

      <input
        type="text"
        placeholder="Keyword"
        onChange={(event) => setKeyword(event.target.value)}
      />

      <button onClick={searchRepositories}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
