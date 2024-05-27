import DefaultTextMenu from '@/components/atoms/default-text-menu/DefaultTextMenu';
import CardsLp from '@/components/molecules/card-lp/CardsLp';
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
        <h1>Servidor cliente rodando!</h1>     
       <CardsLp icon="/Iconhug.png" alt="Interatividade" title="Interatividade Elevada">Aqui vai o texto do card</CardsLp>
      </section>
      
    </>
  );
}