
import DefaultBtn from "@/components/atoms/default-btn/DefaultBtn";
import { EmailBtn } from "@/components/atoms/email-btn/EmailBtn";
import { Inter } from "next/font/google";

import { EnvelopeSimple } from "@phosphor-icons/react"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   Start

      <EmailBtn>
        <EnvelopeSimple size={48}/>
      </EmailBtn>
   </>
  );
}
