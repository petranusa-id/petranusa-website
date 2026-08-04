import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[420px]">

      <Image
        src="/images/about-banner.jpg"
        alt="About Petranusa"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-bold text-white">
            About Petranusa
          </h1>

          <p className="text-white mt-6 text-xl">
            Trusted Professional Training &
            Certification Partner Since 2003
          </p>

        </div>

      </div>

    </section>
  );
}
