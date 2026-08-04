import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative h-[420px]">

      <Image
        src="/images/services-banner.jpg"
        alt="Services"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto px-6">

          <span className="uppercase tracking-[5px] text-yellow-400">

            Our Services

          </span>

          <h1 className="text-6xl font-bold text-white mt-6">

            Professional Training &
            Certification Solutions

          </h1>

          <p className="text-white mt-8 text-xl max-w-3xl">

            Delivering practical, effective and competitive
            business solutions for organizations throughout Indonesia.

          </p>

        </div>

      </div>

    </section>
  );
}
