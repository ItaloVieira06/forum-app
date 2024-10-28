import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.separator} />
        <div className={styles.logo}>
          <Link href="/">
           Logo
          </Link>
        </div>
        <div className={styles.socialMedia}>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>
        </div>
      </footer>
    );
  }