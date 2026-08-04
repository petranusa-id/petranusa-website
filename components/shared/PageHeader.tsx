import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  image: string;
};

export default function PageHeader({
  title,
  subtitle,
  image,
}: Props) {
  return (
    <section className="relative h-[380px]">

      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-bold text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-white text-xl">
              {subtitle}
            </p>
          )}

        </div>

      </div>

    </section>
  );
}
