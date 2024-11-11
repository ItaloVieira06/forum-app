'use client'
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/QuestionDetail.module.css';

export default function QuestionDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Dados simulados da pergunta (exemplo)
  const questionData = {
    title: `Título da Pergunta ${id}`,
    text: `Aqui está o texto detalhado da pergunta ${id}, descrevendo o contexto e as informações relacionadas.`,
    answers: [
      {
        title: "Resposta 1",
        text: "Este é o conteúdo da primeira resposta, com detalhes sobre a solução ou comentário.",
        imageUrl: "/path/to/default-image.jpg", // Exemplo de imagem
      },
      {
        title: "Resposta 2",
        text: "Este é o conteúdo da segunda resposta, abordando outro aspecto ou visão sobre o problema.",
        imageUrl: "/path/to/default-image.jpg",
      },
    ],
  };

  return (
    <div className={styles.pageContainer}>
      {/* Título da Pergunta */}
      <h1 className={styles.questionTitle}>{questionData.title}</h1>

      {/* Texto da Pergunta */}
      <p className={styles.questionText}>{questionData.text}</p>

      {/* Caixa de Respostas */}
      <div className={styles.answersSection}>
        {questionData.answers.map((answer, index) => (
          <div key={index} className={styles.answerBox}>
            <img src={answer.imageUrl} alt="Imagem da resposta" className={styles.answerImage} />
            <div className={styles.answerContent}>
              <h3 className={styles.answerTitle}>{answer.title}</h3>
              <p className={styles.answerText}>{answer.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}