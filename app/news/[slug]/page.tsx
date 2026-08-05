import { notFound } from "next/navigation";
import { news } from "@/data/news";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetail({ params }: Props) {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold">
          {article.title}
        </h1>

        <p className="text-gray-500 mt-4">
          {article.date}
        </p>

        <p className="mt-10 leading-9">
          {article.excerpt}
        </p>
      </div>
    </main>
  );
}
