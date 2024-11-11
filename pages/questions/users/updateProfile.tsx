'use client'
import React, { useState } from 'react';
import styles from '../../styles/UpdateProfile.module.css';

export default function UpdateProfile() {
  const [currentData, setCurrentData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [newData, setNewData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: 'current' | 'new',
    field: 'name' | 'email' | 'password'
  ) => {
    const value = event.target.value;
    if (type === 'current') {
      setCurrentData({ ...currentData, [field]: value });
    } else {
      setNewData({ ...newData, [field]: value });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const isCurrentDataFilled = Object.values(currentData).some((val) => val !== '');
    const isNewDataFilled = Object.values(newData).some((val) => val !== '');

    // Verifica se os campos correspondentes estão preenchidos corretamente
    if (
      (currentData.name && !newData.name) ||
      (!currentData.name && newData.name) ||
      (currentData.email && !newData.email) ||
      (!currentData.email && newData.email) ||
      (currentData.password && !newData.password) ||
      (!currentData.password && newData.password)
    ) {
      alert('Há dados faltando ou inseridos incorretamente. Verifique os campos.');
      return;
    }

    if (isCurrentDataFilled && isNewDataFilled) {
      // Lógica para atualizar os dados do usuário
      console.log('Dados atuais:', currentData);
      console.log('Novos dados:', newData);
    } else {
      alert('Por favor, preencha os campos de dados atuais e novos para atualizar.');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Digite os dados atuais e em seguida os novos dados somente onde desejar alterar</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.columnsContainer}>
          
          {/* Coluna de Dados Atuais */}
          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Dados Atuais</h2>
            <input
              type="text"
              placeholder="Nome Atual"
              value={currentData.name}
              onChange={(e) => handleInputChange(e, 'current', 'name')}
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email Atual"
              value={currentData.email}
              onChange={(e) => handleInputChange(e, 'current', 'email')}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Senha Atual"
              value={currentData.password}
              onChange={(e) => handleInputChange(e, 'current', 'password')}
              className={styles.input}
            />
          </div>

          {/* Coluna de Novos Dados */}
          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Novos Dados</h2>
            <input
              type="text"
              placeholder="Novo Nome"
              value={newData.name}
              onChange={(e) => handleInputChange(e, 'new', 'name')}
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Novo Email"
              value={newData.email}
              onChange={(e) => handleInputChange(e, 'new', 'email')}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Nova Senha"
              value={newData.password}
              onChange={(e) => handleInputChange(e, 'new', 'password')}
              className={styles.input}
            />
          </div>
        </div>

        {/* Botão para Enviar Dados */}
        <button type="submit" className={styles.submitButton}>
          Atualizar Dados
        </button>
      </form>
    </div>
  );
}
