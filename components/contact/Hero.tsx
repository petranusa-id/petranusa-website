import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-[380px]">

      <Image
        src="/images/contact-banner.jpg"
        alt="Contact"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-bold text-white">
            Contact Us
          </h1>

          <p className="text-white mt-6 text-xl">
            We'd love to hear from you.
          </p>

        </div>

      </div>

    </section>
  );
}
