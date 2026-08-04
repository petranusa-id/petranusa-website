"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur">

      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">

        <Link href="/">
          <img src="/logo.png" className="h-12" />
        </Link>

        <div className="flex gap-8">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/services">Services</Link>

          <Link href="/gallery">Gallery</Link>

          <Link href="/contact">Contact</Link>

        </div>

      </div>

    </nav>
  );
}
