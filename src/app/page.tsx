import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Fleet from "@/components/Fleet";
import Gallery from "@/components/Gallery";
import RoutesSection from "@/components/RoutesSection";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Fleet />
        <Gallery />
        <RoutesSection />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
