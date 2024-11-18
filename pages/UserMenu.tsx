'use client'
import { useRouter } from 'next/router';
import styles from '../styles/UserMenu.module.css';

export default function UserMenu() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    
    localStorage.removeItem('authToken'); 
    router.push('/login');
  };

  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.title}>Menu do Usuário</h1>

      <button 
        onClick={() => handleNavigation('/questions/submitQuestion')} 
        className={styles.menuButton}
      >
        Enviar Pergunta
      </button>

      <button 
        onClick={() => handleNavigation('/user/updateProfile')} 
        className={styles.menuButton}
      >
        Atualizar Dados
      </button>

      <button 
        onClick={handleLogout} 
        className={styles.logoutButton}
      >
        Logout
      </button>
    </div>
  );
}