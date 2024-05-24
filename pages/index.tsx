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
      <div className={inter.className}>
        <h1>Servidor cliente rodando!</h1>
      </div>
    </>
  );
}
