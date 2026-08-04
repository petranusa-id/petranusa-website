"use client";

import CountUp from "react-countup";

const stats = [
  {
    number: 20,
    suffix: "+",
    label: "Years Experience",
  },
  {
    number: 500,
    suffix: "+",
    label: "Training Programs",
  },
  {
    number: 100000,
    suffix: "+",
    label: "Participants",
  },
  {
    number: 50,
    suffix: "+",
    label: "Corporate Clients",
  },
];

export default function Statistics() {
  return (
    <section className="bg-green-700 py-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center text-white">

        {stats.map((item) => (

          <div key={item.label}>

            <h2 className="text-6xl font-bold">

              <CountUp
                end={item.number}
                duration={3}
              />

              {item.suffix}

            </h2>

            <p className="mt-5">

              {item.label}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
