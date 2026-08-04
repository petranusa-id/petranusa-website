export default function GoogleMaps() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Find Us
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-lg">

          <iframe
            src="https://www.google.com/maps?q=Jakarta&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            style={{ border: 0 }}
          />

        </div>

      </div>

    </section>
  );
}
