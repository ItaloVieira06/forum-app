import Link from 'next/link';
import styles from './Navbar.module.css';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          Logo
        </Link>
      </div>
      <ul className={styles.navList}>
        <li className={`${router.pathname === '/' ? styles.active : ''} ${styles.bordered}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname === '/faq' ? styles.active : ''}>
          <Link href="/faq">FAQ</Link>
        </li>
        <li className={router.pathname === '/questions' ? styles.active : ''}>
          <Link href="/questions">Questions</Link>
        </li>
        <li className={`${router.pathname === '/login' ? styles.active : ''} ${styles.bordered}`}>
          <Link href="/login">Login</Link>
        </li>
        <li className={`${router.pathname === '/login' ? styles.active : ''} ${styles.bordered2}`}>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}