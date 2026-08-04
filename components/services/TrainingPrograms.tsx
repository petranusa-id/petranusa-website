const programs = [
  "HAZOP",
  "Process Safety Management",
  "Drilling Engineering",
  "Well Integrity",
  "Reservoir Engineering",
  "Pipeline Engineering",
  "Production Engineering",
  "Project Management",
  "Risk Management",
  "Leadership Development",
  "Oil & Gas Economics",
  "Asset Integrity Management",
];

export default function TrainingPrograms() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold">

            Featured Training Programs

          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {programs.map((program) => (

            <div
              key={program}
              className="bg-white rounded-2xl p-6 border hover:border-green-600 hover:shadow-lg transition"
            >

              <h3 className="font-semibold text-lg">

                {program}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
