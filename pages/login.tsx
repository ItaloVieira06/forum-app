'use client'
import { useState } from 'react';
import React from 'react';
import styles from '../styles/Login.module.css';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
    }
    

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Login</h1> 
      <div className={styles.loginBox}>
       <form onSubmit={handleSubmit}>
         <div style={{ marginBottom: '15px' }}>
           <label htmlFor="email">Email:</label>
           <input
             type="email"
             id="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
             style={{ width: '100%', padding: '2px', marginTop: '10px' }}
           />
         </div>
         <div style={{ marginBottom: '15px' }}>
           <label htmlFor="password">Senha:</label>
           <input
             type="password"
             id="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             required
             style={{ width: '100%', padding: '2px', marginTop: '10px' }}
           />
         </div>
         <button type="submit" className={styles.loginButton}>
           Login
         </button>
       </form>
     </div>
    </div>
  );
}
