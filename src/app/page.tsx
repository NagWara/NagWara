import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShiftSection from "@/components/ShiftSection";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Vision from "@/components/Vision";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ShiftSection />
      <Services />
      <HowWeWork />
      <Vision />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
