"use client";

export default function ContactForm() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Send Us a Message
        </h2>

        <form className="grid gap-6 mt-12">

          <input
            className="border rounded-xl p-4"
            placeholder="Full Name"
          />

          <input
            className="border rounded-xl p-4"
            placeholder="Company"
          />

          <input
            type="email"
            className="border rounded-xl p-4"
            placeholder="Email"
          />

          <textarea
            rows={6}
            className="border rounded-xl p-4"
            placeholder="Message"
          />

          <button
            className="bg-green-600 text-white py-4 rounded-xl"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}
