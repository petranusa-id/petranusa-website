import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="bg-green-700 py-24">

      <div className="max-w-5xl mx-auto text-center text-white px-6">

        <h2 className="text-5xl font-bold leading-tight">

          Need a Customized Training Program?

        </h2>

        <p className="mt-8 text-xl">

          Contact our team to discuss the best solution for your organization.

        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <Link
            href="/contact"
            className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold"
          >
            Contact Us
          </Link>

          <Link
            href="/documents/company-profile.pdf"
            className="border border-white px-8 py-4 rounded-xl font-semibold"
          >
            Download Company Profile
          </Link>

        </div>

      </div>

    </section>
  );
}
