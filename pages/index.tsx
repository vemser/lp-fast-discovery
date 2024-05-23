
import DefaultBtn from "@/components/atoms/default-btn/DefaultBtn";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
    <DefaultBtn>
       primary
    </DefaultBtn>

    <DefaultBtn variant="secondary">
       secondary
    </DefaultBtn>
   </>
  );
}