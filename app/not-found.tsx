import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-green-600">

          404

        </h1>

        <h2 className="text-4xl font-bold mt-6">

          Page Not Found

        </h2>

        <p className="mt-6 text-gray-600">

          The page you are looking for doesn't exist.

        </p>

        <Link
          href="/"
          className="inline-block mt-10 bg-green-600 text-white px-8 py-4 rounded-xl"
        >
          Back Home
        </Link>

      </div>

    </main>
  );
}
