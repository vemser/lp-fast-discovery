import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


interface TextDark {
    text: string;
}

export default function DefaultTextDark({text}: TextDark) {
    return(
        <>
       <div className="font-inter text-black leading-24">{text}</div>
        </>
    )
}
