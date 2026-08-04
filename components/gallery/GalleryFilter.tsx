"use client";

const categories = [
  "All",
  "Training",
  "Certification",
  "Workshop",
  "Consultancy",
];

export default function GalleryFilter() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          className="px-6 py-3 rounded-full border hover:bg-green-600 hover:text-white transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
