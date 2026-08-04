import NewsCard from "@/components/news/NewsCard";

export const metadata = {
  title: "News",
};

export default function NewsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <h1 className="text-5xl font-bold">
        News & Insights
      </h1>

      <div className="grid lg:grid-cols-3 gap-10 mt-16">

        <NewsCard />

        <NewsCard />

        <NewsCard />

      </div>

    </main>
  );
}
