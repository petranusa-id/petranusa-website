import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Statistics from "@/components/home/Statistics";
import Clients from "@/components/home/Clients";
import Gallery from "@/components/home/Gallery";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Statistics />
      <Clients />
      <Gallery />
      <CTA />
    </>
  );
}
