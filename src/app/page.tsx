import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import SpareParts from "@/components/SpareParts";
import Beyinler from "@/components/Beyinler";
import EcuYazilim from "@/components/EcuYazilim";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
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
