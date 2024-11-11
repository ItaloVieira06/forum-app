'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/QuestionWithResponse.module.css';

export default function QuestionWithResponse() {
  const router = useRouter();
  const { id } = router.query;

  // Dados simulados para a pergunta
  const questionData = {
    title: `Título da Pergunta ${id}`,
    text: `Aqui está o texto detalhado da pergunta ${id}, com informações adicionais.`,
    imageUrl: "/path/to/question-image.jpg", // Imagem da pergunta
    answers: [
      {
        title: "Resposta 1",
        text: "Este é o conteúdo da primeira resposta, abordando a questão detalhadamente.",
        imageUrl: "/path/to/default-image.jpg",
      },
      {
        title: "Resposta 2",
        text: "Este é o conteúdo da segunda resposta, oferecendo outra visão sobre o problema.",
        imageUrl: "/path/to/default-image.jpg",
      },
    ],
  };

  // Estado para capturar o input do usuário
  const [newAnswerTitle, setNewAnswerTitle] = useState("");
  const [newAnswerText, setNewAnswerText] = useState("");

  const handleAnswerSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para enviar a nova resposta (exemplo)
    console.log("Nova Resposta:", newAnswerTitle, newAnswerText);
    setNewAnswerTitle("");
    setNewAnswerText("");
  };

  return (
    <div className={styles.pageContainer}>
      {/* Imagem e Título da Pergunta */}
      <div className={styles.questionHeader}>
        <img src={questionData.imageUrl} alt="Imagem da Pergunta" className={styles.questionImage} />
        <div>
          <h1 className={styles.questionTitle}>{questionData.title}</h1>
          <p className={styles.questionText}>{questionData.text}</p>
        </div>
      </div>

      {/* Seção para Responder a Pergunta */}
      <div className={styles.answerFormSection}>
        <h2>Responder esta Questão</h2>
        <form onSubmit={handleAnswerSubmit} className={styles.answerForm}>
          <input
            type="text"
            placeholder="Título da Resposta"
            value={newAnswerTitle}
            onChange={(e) => setNewAnswerTitle(e.target.value)}
            className={styles.answerTitleInput}
            required
          />
          <textarea
            placeholder="Texto da Resposta"
            value={newAnswerText}
            onChange={(e) => setNewAnswerText(e.target.value)}
            className={styles.answerTextInput}
            required
          />
          <button type="submit" className={styles.submitButton}>Enviar Resposta</button>
        </form>
      </div>

      {/* Caixa de Respostas Existentes */}
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