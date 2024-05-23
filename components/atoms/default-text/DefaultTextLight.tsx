import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface TextLight {
    text: string;
}

export default function DefaultTextLight({text}: TextLight) {
    return(
        <>
       <div className="font-inter text-white leading-24">{text}</div>
        </>
    )
}
