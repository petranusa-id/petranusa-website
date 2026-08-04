import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main>

      <Hero />

    </main>
  );
}
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Statistics from "@/components/home/Statistics";
import Clients from "@/components/home/Clients";
import Gallery from "@/components/home/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Statistics />
      <Clients />
      <Gallery />
    </>
  );
}
