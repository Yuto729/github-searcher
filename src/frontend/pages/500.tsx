// Import necessary libraries
import { NextPage } from 'next';
import styles from '../styles/Home.module.css';

// Define the Error404 page component
const Error500: NextPage = () => {
  return (
    <div className={styles.errorPage}>
      {/* Display the error message */}
      <h1>500 - Internal Server Error</h1>
      <p>Oops! Something went wrong.</p>
    </div>
  );
}

export default Error500;
