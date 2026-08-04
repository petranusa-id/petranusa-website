import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function OfficeLocation() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6">

        <div className="rounded-3xl border p-10">

          <MapPin className="text-green-600" size={40} />

          <h2 className="text-3xl font-bold mt-6">
            Office I
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Jl. Komplek Rukan Buncit Mas BB-3
            <br />
            Hj. Tutty Alawiyah
            <br />
            Duren Tiga
            <br />
            Jakarta Selatan 12760
          </p>

        </div>

        <div className="rounded-3xl border p-10">

          <Phone className="text-green-600" size={40} />

          <h2 className="text-3xl font-bold mt-6">
            Contact Information
          </h2>

          <p className="mt-5 leading-8">
            +62 21 7919 7673
          </p>

          <p className="leading-8">
            pan@petranusa.co.id
          </p>

          <p className="leading-8">
            Instagram : @petranusa.id
          </p>

        </div>

      </div>
    </section>
  );
}
