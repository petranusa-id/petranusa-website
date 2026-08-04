import {
  Award,
  GraduationCap,
  BriefcaseBusiness,
  Globe,
} from "lucide-react";

const items = [
  {
    icon: Award,
    title: "20+ Years Experience",
  },
  {
    icon: GraduationCap,
    title: "Experienced Instructors",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry-Based Programs",
  },
  {
    icon: Globe,
    title: "Trusted by National Companies",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold">

            Why Choose Petranusa

          </h2>

        </div>

        <div className="grid lg:grid-cols-4 gap-8 mt-16">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border p-8 text-center hover:bg-green-600 hover:text-white transition"
              >
                <Icon
                  size={48}
                  className="mx-auto mb-6"
                />

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
