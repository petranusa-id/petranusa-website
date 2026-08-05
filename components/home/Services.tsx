"use client";

import Link from "next/link";
import {
  BadgeCheck,
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import { services } from "@/data/services";

const icons = {
  BadgeCheck,
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
};

export default function Services() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-green-600 font-semibold">
            OUR SERVICES
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Professional Solutions
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We provide integrated services to improve competence,
            productivity, and organizational capability.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mt-20">
          {services.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];

            return (
              <Link
                key={item.id}
                href={`/services/${item.slug}`}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-3 transition duration-300"
              >
                <Icon
                  size={48}
                  className="text-green-600 group-hover:scale-110 transition"
                />

                <h3 className="text-2xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 mt-8 text-green-600 font-semibold">
                  Learn More
                  <ArrowRight size={18} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
