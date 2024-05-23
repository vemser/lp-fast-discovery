
import DefaultTextDark from "@/components/atoms/default-text/DefaultTextDark";
import DefaultTextLight from "@/components/atoms/default-text/DefaultTextLight";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
   <>   
   <DefaultTextDark text="Teste de estilização" />
   <DefaultTextLight text="Teste de estilização" />
   </>
  );
}
