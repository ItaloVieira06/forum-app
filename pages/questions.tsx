'use client'
import React, { useState } from 'react';
import styles from '../styles/Questions.module.css';

const questionsData = Array.from({ length: 40 }, (_, i) => `Pergunta ${i + 1}`); // Simulação de perguntas

export default function Questions() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(questionsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentQuestions = questionsData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Questões</h1>

      {/* Grade de Questões */}
      <div className={styles.questionsGrid}>
        {currentQuestions.map((question, index) => (
          <div key={index} className={styles.questionItem}>
            {question}
          </div>
        ))}
      </div>

      {/* Barra de Paginação */}
      <div className={styles.pagination}>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? styles.activePage : ''}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Próximo
        </button>
      </div>
    </div>
  );
}
