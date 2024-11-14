import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './NavBar.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    router.push('/login');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/Home">Logo</Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/Home" className={`${styles.link} ${styles.whiteButton}`}>
          Home
        </Link>
        <Link href="/FAQ" className={styles.link}>
          FAQ
        </Link>
        <Link href="/Questions" className={styles.link}>
          Questions
        </Link>

        {isAuthenticated ? (
          <>
            <Link href="/Questions/submitQuestion" className={`${styles.link} ${styles.whiteButton}`}>
              Enviar Pergunta
            </Link>
            <Link href="/user/menu" className={`${styles.link} ${styles.blackButton}`}>
              Menu do Usuário
            </Link>
            <span onClick={handleLogout} className={styles.logoutLink}>
              Logout
            </span>
          </>
        ) : (
          <>
            <Link href="/Login" className={`${styles.link} ${styles.whiteButton}`}>
              Login
            </Link>
            <Link href="/Register" className={`${styles.link} ${styles.blackButton}`}>
              Registrar
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}