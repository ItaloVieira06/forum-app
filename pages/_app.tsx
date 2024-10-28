'use client'
import '../styles/global.css'; 
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

export default function ForumApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar /> 
      <Component {...pageProps} />
      <Footer />
    </>
  );
}