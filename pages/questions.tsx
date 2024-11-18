'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Questions.module.css';

type Question = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const Questions: React.FC = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [displayedQuestions, setDisplayedQuestions] = useState<Question[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const questionsPerPage = 8;

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(`/api/questions?page=${currentPage}`);
      const data = await response.json();
      setQuestions(data.questions);

      setDisplayedQuestions(getRandomQuestions(data.questions, questionsPerPage));
    };

    fetchQuestions();
  }, [currentPage]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setDisplayedQuestions(getRandomQuestions(questions, questionsPerPage));
    } else {
      const filtered = questions.filter((question) =>
        question.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setDisplayedQuestions(filtered);
    }
  }, [searchQuery, questions]);

  const getRandomQuestions = (questionsList: Question[], count: number) => {
    const shuffled = [...questionsList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Perguntas</h1>

      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Pesquise por uma pergunta..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.questionsGrid}>
        {displayedQuestions.map((question) => (
          <div
            key={question.id}
            className={styles.questionCard}
            onClick={() => router.push(`/questions/${question.id}`)}
          >
            <img src={question.image} alt={question.title} className={styles.questionImage}/>
            <h3>{question.title}</h3>
            <p>{question.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.paginationContainer}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={styles.paginationButton}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Questions;