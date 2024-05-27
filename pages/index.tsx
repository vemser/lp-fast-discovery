import DefaultTextMenu from '@/components/atoms/default-text-menu/DefaultTextMenu';
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
        <h1>Servidor cliente rodando!</h1>
        <DefaultTextMenu href="#">Menu BarNav</DefaultTextMenu>
      </section>
      
    </>
  );
}