"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="/images/hero.jpg"
          alt="Petranusa Training"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-3xl"
        >

          <span className="text-yellow-400 uppercase tracking-[6px] font-semibold">

            Since 2003

          </span>

          <h1 className="mt-6 text-6xl md:text-7xl font-bold text-white leading-tight">

            Empowering Professionals Through

            <span className="text-yellow-400">

              {" "}Certification & Training

            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-200 leading-9">

            PT. Petratama Abdi Nusa is a trusted partner in
            Certification, In House Training, Consultancy and
            Public Course for Indonesia's Energy & Industrial Sector.

          </p>

          <div className="flex gap-5 mt-10">

            <Link
              href="/services"
              className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 transition text-white font-semibold"
            >

              Explore Services

            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border border-white text-white hover:bg-white hover:text-black transition"
            >

              Contact Us

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
