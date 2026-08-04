import Image from "next/image";

export default function NewsCard() {
  return (
    <article className="rounded-3xl overflow-hidden shadow-lg bg-white">

      <Image
        src="/images/news.jpg"
        alt="News"
        width={600}
        height={400}
      />

      <div className="p-8">

        <span className="text-green-600 text-sm font-semibold">
          COMPANY NEWS
        </span>

        <h2 className="text-2xl font-bold mt-4">
          New Professional Training Program Launched
        </h2>

        <p className="mt-5 text-gray-600 leading-8">
          PT. Petratama Abdi Nusa continues to develop
          innovative training programs for the energy sector.
        </p>

      </div>

    </article>
  );
}
