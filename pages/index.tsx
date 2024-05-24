
import { EmailBtn } from "@/components/atoms/email-btn/EmailBtn";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { EnvelopeSimple } from "@phosphor-icons/react"

const inter = Inter({ subsets: ["latin"] });

import 'react-toastify/dist/ReactToastify.min.css';

export default function Home() {
  return (
   <>
    <ToastContainer/>
   Start

      <div className="absolute ">
      <EmailBtn />
      </div>
   </>
  );
}
