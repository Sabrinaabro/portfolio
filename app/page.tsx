import Banner from "@/components/ui/Banner";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Ideas from "@/components/ui/Ideas";
import Info from "@/components/ui/Info";
import Services from "@/components/ui/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <Info />
      <Services />
      <Contact />
      <Ideas />
      <Footer />
      
    </div>
  );
}
