import { EmailBtn } from "@/components/atoms/email-btn/EmailBtn";
import { BigHeroSection } from "@/components/organisms/big-hero-section/BigHeroSection";
import { FaqSection } from "@/components/organisms/faq-section/FaqSection";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import "react-toastify/dist/ReactToastify.min.css";
import { FastProccessSection } from "@/components/organisms/fast-proccess-section/FastProccessSection";
import { AgileJourneySection } from "@/components/organisms/agile-journey-section/AgileJourneySection";
import { BenefitsSection } from "@/components/organisms/benefits-section/BenefitsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>DBC | Fast Discovery</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-32x32.png"
        />
        <meta
          name="description"
          content="Fast Product Discovery: A ferramenta mais rápida e eficaz para validar seu produto digital no formato presencial ou remoto."
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DBC | Fast Product Discovery" />
        <meta
          property="og:description"
          content="Fast Product Discovery: A ferramenta mais rápida e eficaz para validar seu produto digital no formato presencial ou remoto."
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property="og:site_name" content="DBC | Fast Product Discovery" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
      </Head>
      <ToastContainer />
      <section className={`${inter.className} flex flex-col`}>
        <EmailBtn className="fixed bottom-4 right-6 z-10 md:bottom-14 md:right-14" />
        <Header />
        <BigHeroSection />
        <FastProccessSection />
        <AgileJourneySection />
        <BenefitsSection />
        <FaqSection />
        <Footer />
      </section>
    </>
  );
}
