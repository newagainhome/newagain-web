import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/floating/WhatsAppButton";

import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";

export default function ServiciosPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />

        <ServicesGrid />

        <Benefits />

        <Process />

        <FAQ />

        <CallToAction />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}