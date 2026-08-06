"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {

return(

<header

className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-slate-100"

>

<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="PT Petratama Abdi Nusa"
    width={180}
    height={50}
    priority
  />
</Link>

<nav className="hidden lg:flex gap-10 font-medium">

<Link href="/">Home</Link>

<Link href="/about">About</Link>

<Link href="/services">Services</Link>

<Link href="/gallery">Gallery</Link>

<Link href="/clients">Clients</Link>

<Link href="/contact">Contact</Link>

</nav>

<button

className="hidden lg:block bg-green-600 text-white px-6 py-3 rounded-xl"

>

Get Consultation

</button>

<Menu className="lg:hidden"/>

</div>

</header>

);

}
