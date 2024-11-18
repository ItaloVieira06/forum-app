'use client'
import React from 'react';
import styles from '../styles/Home.module.css';
//import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
      </div>

      <section className={styles.topQuestionsSection}>
        <h2>Questões Mais Respondidas</h2>
        <ul className={styles.questionsList}>
          <li>Como fazer login no site?</li>
          <li>Como resetar minha senha?</li>
          <li>Quais são os benefícios de uma conta premium?</li>
          <li>Como faço para atualizar meu perfil?</li>
          <li>Posso excluir minha conta permanentemente?</li>
        </ul>
      </section>
    </div>
  );
}