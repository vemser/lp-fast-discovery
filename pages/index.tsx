
import DefaultTextGeral from "@/components/atoms/default-text/DefaultTextGeral";
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
   <DefaultTextGeral variant="dark">estilo dark</DefaultTextGeral>
   
   
   </>
  );
}
