import DefaultTextMenu from '@/components/atoms/default-text-menu/DefaultTextMenu';
import { EmailBtn } from '@/components/atoms/email-btn/EmailBtn';
import { BigHeroSection } from '@/components/organisms/big-hero-section/BigHeroSection';
import { FaqSection } from '@/components/organisms/faq-section/FaqSection';
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
        <EmailBtn className="fixed right-14 bottom-14 z-10" />
        <Header />
        <BigHeroSection />
        <FaqSection />
      </section>
    </>
  );
}
