import type { Metadata } from "next";

import ContactHero from "@/components/contact/Hero";
import OfficeLocation from "@/components/contact/OfficeLocation";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMaps from "@/components/contact/GoogleMaps";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact PT. Petratama Abdi Nusa",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <OfficeLocation />
      <ContactForm />
      <GoogleMaps />
    </main>
  );
}
