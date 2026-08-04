import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div className="relative">

          <Image
            src="/images/about.jpg"
            alt="About Petranusa"
            width={650}
            height={700}
            className="rounded-3xl shadow-2xl"
          />

        </div>

        <div>

          <span className="text-green-600 uppercase font-semibold tracking-[4px]">
            About Us
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">

            Building Professional Competence Since 2003

          </h2>

          <p className="mt-8 text-gray-600 leading-9">

            PT. Petratama Abdi Nusa established a professional
            legal entity in 2003 based in Jakarta.

            We provide Certification,
            In House Training,
            Consultancy,
            and Public Course
            for Indonesia's energy and industrial sectors.

          </p>

          <div className="grid grid-cols-2 gap-10 mt-12">

            <div>

              <h3 className="font-bold text-xl">

                Vision

              </h3>

              <p className="mt-4 text-gray-600">

                Effective and practical business solutions.

              </p>

            </div>

            <div>

              <h3 className="font-bold text-xl">

                Mission

              </h3>

              <p className="mt-4 text-gray-600">

                Trusted partner in professional competency development.

              </p>

            </div>

          </div>

          <Link
            href="/about"
            className="inline-block mt-12 bg-green-600 text-white px-8 py-4 rounded-xl"
          >

            Learn More

          </Link>

        </div>

      </div>

    </section>
  );
}
