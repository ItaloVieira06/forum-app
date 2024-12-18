'use client'
import React, { useState } from 'react';
import styles from '../../styles/SubmitQuestion.module.css';

export default function SubmitQuestion() {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [questionText, setQuestionText] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Pergunta Enviada:", { title, category, questionText, image });
    setImage(null);
    setTitle("");
    setCategory("");
    setQuestionText("");
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Enviar uma Nova Pergunta</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        
        <label htmlFor="image" className={styles.label}>
          Anexar Imagem:
        </label>
        <input 
          type="file" 
          id="image" 
          accept="image/*" 
          onChange={handleImageUpload} 
          className={styles.fileInput} 
        />

        <label htmlFor="title" className={styles.label}>
          Título da Pergunta:
        </label>
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className={styles.input} 
          required 
        />

        <label htmlFor="category" className={styles.label}>
          Categoria:
        </label>
        <input 
          type="text" 
          id="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className={styles.input} 
          required 
        />

        <label htmlFor="questionText" className={styles.label}>
          Pergunta:
        </label>
        <textarea 
          id="questionText" 
          value={questionText} 
          onChange={(e) => setQuestionText(e.target.value)} 
          className={styles.textarea} 
          required 
        />

        <button type="submit" className={styles.submitButton}>
          Enviar Pergunta
        </button>
      </form>
    </div>
  );
}