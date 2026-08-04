import {
  Award,
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
} from "lucide-react";

const services = [
  {
    title: "Certification",
    icon: Award,
    description:
      "Professional competency certification based on industry standards.",
  },
  {
    title: "In House Training",
    icon: GraduationCap,
    description:
      "Customized corporate training programs for your organization.",
  },
  {
    title: "Consultancy",
    icon: BriefcaseBusiness,
    description:
      "Technical and management consulting delivered by experienced experts.",
  },
  {
    title: "Public Course",
    icon: BookOpen,
    description:
      "Open registration training for individuals and organizations.",
  },
];

export default function ServiceList() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold">

            What We Do

          </h2>

          <p className="mt-6 text-gray-600">

            Comprehensive professional development services.

          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="rounded-3xl border p-10 hover:shadow-xl transition"
              >

                <Icon
                  size={54}
                  className="text-green-600"
                />

                <h3 className="text-3xl font-bold mt-8">

                  {service.title}

                </h3>

                <p className="text-gray-600 mt-5 leading-8">

                  {service.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
