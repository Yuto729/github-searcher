// Import necessary libraries and modules
import styles from '../styles/Home.module.css';
import React from "react";

// Define TypeScript interface for repository data and search results props
interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}
interface SearchResultProps {
  repositories: Repository[];
}

// Define the SearchResult functional component
const SearchResult: React.FC<SearchResultProps> = ({ repositories }) => {
  return (
    <div className={styles.grid}>
        {repositories.length > 0 ? (
      repositories.map((repo) => (
        <div key={repo.id} className={styles.card}>
          <h2 className={styles.heading}>{repo.name} </h2>
          <p>{repo.description}</p>
        </div>
      ))
        ):(
        <p className={styles.noResult}>No Result</p> 
        )}
    </div>
  );
};

export default SearchResult;
