import TrustBar from "@/components/home/TrustBar";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Benefits from "@/components/home/Benefits";
import BeforeAfter from "@/components/home/BeforeAfter";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/floating/WhatsAppButton";

export default function Home() {
  return (
    <>
      <TrustBar />
      <Header />
      <Hero />
      <Services />
      <Process />
      <Benefits />
      <BeforeAfter />
      <Testimonials />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </>
  );
}