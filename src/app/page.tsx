import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import SpareParts from "@/components/SpareParts";
import Beyinler from "@/components/Beyinler";
import EcuYazilim from "@/components/EcuYazilim";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { FaqJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <FaqJsonLd />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <FAQ />
        <SpareParts />
        <Beyinler />
        <EcuYazilim />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
