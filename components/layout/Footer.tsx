PT. Petratama Abdi Nusa

Office I

Office II

Quick Links

Certification

Training

Consultancy

Public Course

Email

pan@petranusa.co.id

Instagram

@petranusa.id

Copyright © 2026
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-14">

        <div>

          <h2 className="text-3xl font-bold">

            PT. Petratama
            <br />
            Abdi Nusa

          </h2>

          <p className="mt-6 text-slate-400 leading-8">

            Trusted partner in Certification,
            In House Training,
            Consultancy,
            and Public Course
            since 2003.

          </p>

        </div>

        <div>

          <h3 className="font-bold text-xl">

            Services

          </h3>

          <div className="mt-6 space-y-3">

            <Link href="/certification">Certification</Link><br/>

            <Link href="/training">In House Training</Link><br/>

            <Link href="/consultancy">Consultancy</Link><br/>

            <Link href="/public-course">Public Course</Link>

          </div>

        </div>

        <div>

          <h3 className="font-bold text-xl">

            Contact

          </h3>

          <div className="space-y-5 mt-6">

            <div className="flex gap-3">

              <Phone size={18}/>

              +62 21 7919 7673

            </div>

            <div className="flex gap-3">

              <Mail size={18}/>

              pan@petranusa.co.id

            </div>

            <div className="flex gap-3">

              <Instagram size={18}/>

              @petranusa.id

            </div>

          </div>

        </div>

        <div>

          <h3 className="font-bold text-xl">

            Office

          </h3>

          <div className="mt-6 flex gap-3">

            <MapPin size={18}/>

            <p className="text-slate-400">

              Office I
              <br/>

              Jl. Komplek Rukan Buncit Mas BB-3
              Jakarta Selatan

            </p>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-8 text-center text-slate-500">

        © 2026 PT. Petratama Abdi Nusa.
        All Rights Reserved.

      </div>

    </footer>
  );
}
