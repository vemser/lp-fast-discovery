import { FaqSection } from '@/components/organisms/faq-section/FaqSection';
import Footer from '@/components/organisms/footer/Footer';
import Header from '@/components/organisms/header/Header';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

import 'react-toastify/dist/ReactToastify.min.css';

export default function Home() {
  return (
    <>
      <ToastContainer />
      <section className={inter.className}>
        <Header/>        
        <FaqSection/>
        <Footer/>
      </section>
      </>
      
  );
}