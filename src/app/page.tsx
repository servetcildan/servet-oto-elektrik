import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkShowcase from "@/components/WorkShowcase";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import SpareParts from "@/components/SpareParts";
import Beyinler from "@/components/Beyinler";
import EcuYazilim from "@/components/EcuYazilim";
import GoogleReviews from "@/components/GoogleReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import MobileContactBar from "@/components/MobileContactBar";
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
        <WorkShowcase />
        <About />
        <Beyinler />
        <EcuYazilim />
        <SpareParts />
        <FAQ />
        <GoogleReviews />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <MobileContactBar />
    </>
  );
}
