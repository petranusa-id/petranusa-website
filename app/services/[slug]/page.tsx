import { notFound } from "next/navigation";
import { services } from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find(
    (item) => item.slug === params.slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold">
          {service.title}
        </h1>

        <p className="mt-8 text-lg leading-9 text-gray-600">
          {service.description}
        </p>

      </div>

    </main>
  );
}
