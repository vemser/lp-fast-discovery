
import DefaultTextDark from "@/components/atoms/default-text/DefaultTextDark";
import DefaultTextLight from "@/components/atoms/default-text/DefaultTextLight";
import DefaultTitle from "@/components/atoms/default-title/DefaultTitle";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
   <> 
   <DefaultTitle variant="tertiary">teste</DefaultTitle>  
   <DefaultTextDark text="Teste de estilização" />
   <DefaultTextLight text="Teste de estilização" />
   </>
  );
}
