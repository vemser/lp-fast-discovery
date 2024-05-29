import { EmailBtn } from '@/components/atoms/email-btn/EmailBtn';
import { BigHeroSection } from '@/components/organisms/big-hero-section/BigHeroSection';
import { FaqSection } from '@/components/organisms/faq-section/FaqSection';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';
import Header from '@/components/organisms/header/Header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

import 'react-toastify/dist/ReactToastify.min.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>DBC | Fast Discovery</title>
      </Head>
      <ToastContainer />
      <section className={`${inter.className} flex flex-col`}>
        <EmailBtn className="fixed right-6 bottom-4 md:right-14 md:bottom-14 z-10" />
        <Header />
        <BigHeroSection/>
        <FaqSection />
      </section>
    </>
  );
}
