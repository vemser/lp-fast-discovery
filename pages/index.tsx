import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> main
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
=======
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
>>>>>>> main
});

import 'react-toastify/dist/ReactToastify.min.css';

export default function Home() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
   <> 
   
   
=======
   <>   
   <h1>Start</h1>
>>>>>>> main
   </>
=======
    <>
      <ToastContainer />
      <div className={inter.className}>
        <h1>Servidor cliente rodando!</h1>
      </div>
    </>
>>>>>>> main
  );
}
