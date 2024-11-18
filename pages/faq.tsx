'use client'
import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import styles from '../styles/FaqPage.module.css';

interface FaqQuestion {
  id: number;
  title: string;
  content: string;
  image: string;
}

interface FaqPageProps {
  questions: FaqQuestion[];
  page: number;
  totalPages: number;
}

export default function FaqPage({ questions, page, totalPages }: FaqPageProps) {
  const handleNavigation = (newPage: number) => {
    window.location.href = `/faq?page=${newPage}`;
  };

  return (
    <div className={styles.container}>
      <h1>FAQ</h1>
      <div className={styles.grid}>
        {questions.map((question) => (
          <Link key={question.id} href={`/faq/${question.id}`} passHref>
            <div className={styles.card}>
              <img src={question.image} alt={question.title} className={styles.image} />
              <div>
                <h2>{question.title}</h2>
                <p>{question.content}</p>
              </div>
            </div>
          </Link>
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
  const res = await fetch(`https://api.com/faq?page=${page}&limit=${questionsPerPage}`);
  const { questions, total } = await res.json();

  const totalPages = Math.ceil(total / questionsPerPage);

  return {
    props: { questions, page, totalPages },
  };
};
