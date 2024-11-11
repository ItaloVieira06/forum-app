'use client'
import { useRouter } from 'next/router';
import styles from '../styles/UserMenu.module.css';

export default function UserMenu() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    // Exemplo de lógica de logout: remover o token ou limpar dados de sessão
    localStorage.removeItem('authToken'); // Exemplo para remoção de token do localStorage
    router.push('/login'); // Redireciona para a página de login
  };

  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.title}>Menu do Usuário</h1>

      {/* Botão para Enviar Pergunta */}
      <button 
        onClick={() => handleNavigation('/questions/submitQuestion')} 
        className={styles.menuButton}
      >
        Enviar Pergunta
      </button>

      {/* Botão para Atualizar Dados */}
      <button 
        onClick={() => handleNavigation('/user/updateProfile')} 
        className={styles.menuButton}
      >
        Atualizar Dados
      </button>

      {/* Botão para Logout */}
      <button 
        onClick={handleLogout} 
        className={styles.logoutButton}
      >
        Logout
      </button>
    </div>
  );
}