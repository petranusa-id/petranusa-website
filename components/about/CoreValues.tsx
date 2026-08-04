import {
  ShieldCheck,
  Handshake,
  Lightbulb,
  Users,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We uphold honesty, professionalism, and accountability.",
  },
  {
    icon: Handshake,
    title: "Commitment",
    text: "Dedicated to delivering value for every client.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Continuous improvement through knowledge and technology.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Working together to achieve sustainable success.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Core Values
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
              >
                <Icon
                  size={48}
                  className="mx-auto text-green-600"
                />

                <h3 className="text-2xl font-bold mt-6">
                  {value.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {value.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
