import type { Metadata } from "next";

import ServiceHero from "@/components/services/Hero";
import ServiceList from "@/components/services/ServiceList";
import TrainingPrograms from "@/components/services/TrainingPrograms";
import ServicesCTA from "@/components/services/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Certification, In House Training, Consultancy and Public Course",
};

export default function ServicesPage() {
  return (
    <main>

      <ServiceHero />

      <ServiceList />

      <TrainingPrograms />

      <ServicesCTA />

    </main>
  );
}
