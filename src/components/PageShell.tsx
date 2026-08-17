import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import MobileContactBar from "./MobileContactBar";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
      <MobileContactBar />
    </>
  );
}
