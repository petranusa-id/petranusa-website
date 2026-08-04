import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://petranusa.my.id"),
  title: {
    default: "PT. Petratama Abdi Nusa",
    template: "%s | PT. Petratama Abdi Nusa",
  },
  description:
    "Professional Certification, In House Training, Consultancy and Public Course since 2003.",
  keywords: [
    "Training",
    "Certification",
    "Consultancy",
    "Oil and Gas",
    "Energy",
    "Petranusa",
    "Jakarta",
  ],
  openGraph: {
    title: "PT. Petratama Abdi Nusa",
    description:
      "Professional Certification, In House Training, Consultancy and Public Course.",
    url: "https://petranusa.my.id",
    siteName: "Petranusa",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>

        <Navbar />

        {children}

        <Footer />

        <FloatingWhatsApp />

      </body>

    </html>
  );
}
