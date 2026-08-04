import AboutHero from "@/components/about/Hero";
import CompanyProfile from "@/components/about/CompanyProfile";
import VisionMission from "@/components/about/VisionMission";
import Timeline from "@/components/about/Timeline";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import CoreValues from "@/components/about/CoreValues";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyProfile />
      <VisionMission />
      <Timeline />
      <CoreValues />
      <WhyChooseUs />
    </>
  );
}
