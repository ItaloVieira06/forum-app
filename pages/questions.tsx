'use client'
import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import styles from '../styles/Questions.module.css';

interface Question {
  id: number;
  title: string;
  content: string;
}

interface QuestionsPageProps {
  questions: Question[];
  page: number;
  totalPages: number;
}

export default function QuestionsPage({ questions, page, totalPages }: QuestionsPageProps) {
  const router = useRouter();

  const handleNavigation = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      router.push(`/questions?page=${newPage}`);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Página de Questões</h1>
      <div className={styles.grid}>
        {questions.map((question) => (
          <div key={question.id} className={styles.questionCard}>
            <h2>{question.title}</h2>
            <p>{question.content}</p>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={() => handleNavigation(page - 1)} disabled={page === 1}>
          Anterior
        </button>
        <span>Página {page} de {totalPages}</span>
        <button onClick={() => handleNavigation(page + 1)} disabled={page === totalPages}>
          Próximo
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = Number(context.query.page) || 1;
  const questionsPerPage = 8;
  const res = await fetch(`https://api.com/perguntas?page=${page}&limit=${questionsPerPage}`);
  const { questions, total } = await res.json();

  const totalPages = Math.ceil(total / questionsPerPage);

  return {
    props: { questions, page, totalPages },
  };
};