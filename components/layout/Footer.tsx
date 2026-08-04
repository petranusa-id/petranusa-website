import Link from "next/link";

export default function Footer(){

return(

<footer className="bg-slate-950 text-white">

<div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-12">

<div>

<h2 className="text-3xl font-bold">

PT. Petratama
Abdi Nusa

</h2>

<p className="mt-5 text-slate-400 leading-8">

Professional Certification,
Training,
Consultancy
and Public Course
since 2003.

</p>

</div>

<div>

<h3 className="font-bold">

Quick Links

</h3>

<div className="space-y-3 mt-5">

<Link href="/about">About</Link><br/>

<Link href="/services">Services</Link><br/>

<Link href="/gallery">Gallery</Link><br/>

<Link href="/contact">Contact</Link>

</div>

</div>

<div>

<h3 className="font-bold">

Contact

</h3>

<p className="mt-5">

+62 21 7919 7673

</p>

<p>

pan@petranusa.co.id

</p>

<p>

@petranusa.id

</p>

</div>

<div>

<h3 className="font-bold">

Office

</h3>

<p className="mt-5 text-slate-400">

Office I

<br/>

Jl. Komplek Rukan Buncit Mas BB-3

Jakarta Selatan

</p>

</div>

</div>

<div className="border-t border-slate-800 text-center py-8 text-slate-500">

© 2026 PT. Petratama Abdi Nusa

</div>

</footer>

);

}
