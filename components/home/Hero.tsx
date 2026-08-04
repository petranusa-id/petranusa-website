"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">

      <Image
        src="/images/hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:.8}}
        >

          <p className="uppercase tracking-[5px] text-yellow-400">

            Since 2003

          </p>

          <h1 className="text-7xl font-bold text-white max-w-4xl leading-tight mt-6">

            Empowering Professionals Through
            Certification &
            Training

          </h1>

          <p className="text-gray-200 text-xl mt-8 max-w-3xl leading-9">

            PT. Petratama Abdi Nusa is a trusted partner in
            Certification,
            In House Training,
            Consultancy and Public Course.

          </p>

          <div className="flex gap-6 mt-10">

            <Link
              href="/services"
              className="bg-green-600 px-8 py-4 rounded-xl text-white"
            >

              Explore Services

            </Link>

            <Link
              href="/contact"
              className="border border-white px-8 py-4 rounded-xl text-white"
            >

              Contact Us

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
