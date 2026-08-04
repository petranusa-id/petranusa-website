import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "PT. Petratama Abdi Nusa",
  description:
    "Certification • In House Training • Consultancy • Public Course",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}
export const metadata = {

title:"PT. Petratama Abdi Nusa",

description:"Professional Certification, Training and Consultancy",

keywords:[
"Training",
"Certification",
"Consultancy",
"Energy",
"Oil and Gas",
"Petranusa",
"Jakarta",
],

openGraph:{

title:"PT. Petratama Abdi Nusa",

description:"Professional Training Partner",

images:["/images/hero.jpg"],

},

};
