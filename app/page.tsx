import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Statistics from "@/components/home/Statistics";
import Clients from "@/components/home/Clients";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import TrainingCalendar from "@/components/home/TrainingCalendar";
import DownloadCenter from "@/components/home/DownloadCenter";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "PT Petratama Abdi Nusa",
  description:
    "PT. Petratama Abdi Nusa is a trusted partner in Certification, In House Training, Consultancy and Public Course.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Statistics />
      <Clients />
      <Gallery />
      <Testimonials />
      <FAQ />
      <TrainingCalendar />
      <DownloadCenter />
      <CTA />
    </>
  );
}
