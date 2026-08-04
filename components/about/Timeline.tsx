const timeline = [
  {
    year: "2003",
    title: "Company Established",
    description:
      "PT. Petratama Abdi Nusa officially established in Jakarta.",
  },
  {
    year: "2008",
    title: "Training Expansion",
    description:
      "Expanded professional engineering and management training programs.",
  },
  {
    year: "2015",
    title: "National Projects",
    description:
      "Supported major national energy companies through competency development.",
  },
  {
    year: "2020",
    title: "Digital Learning",
    description:
      "Introduced hybrid and online learning programs.",
  },
  {
    year: "2026",
    title: "Trusted Training Partner",
    description:
      "Continuing to serve organizations across Indonesia with high-quality training and certification.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Company Journey
          </h2>

          <p className="text-gray-600 mt-5">
            More than two decades of professional excellence.
          </p>
        </div>

        <div className="relative border-l-4 border-green-600 ml-4">

          {timeline.map((item) => (
            <div
              key={item.year}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-green-600"></div>

              <h3 className="text-green-700 text-2xl font-bold">
                {item.year}
              </h3>

              <h4 className="text-xl font-semibold mt-2">
                {item.title}
              </h4>

              <p className="mt-3 text-gray-600 leading-8">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
