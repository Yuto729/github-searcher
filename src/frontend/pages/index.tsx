import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from "react";
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';
interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}
const Home: NextPage = () => {
  //const [username, setUsername] = useState("");
  //const [keyword, setKeyword] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);
  return (
    <div className={styles.container}>
      <Head>
        <title>GitHub Repository Search</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          GitHub Repository Search
        </h1>
        <SearchForm onSearch={setRepositories} />
        
        <h2 className={styles.heading}>
            Search Results
        </h2>

        <SearchResult repositories={repositories} />
      </main>
    </div>
  );
}

export default Home;

