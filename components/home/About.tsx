import Image from "next/image";

export default function About() {

    return (

<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6">

<div>

<Image
src="/images/about.jpg"
alt="Training"
width={700}
height={700}
className="rounded-3xl shadow-2xl"
/>

</div>

<div>

<span className="text-green-600 font-semibold">

ABOUT PETRANUSA

</span>

<h2 className="text-5xl font-bold mt-4">

Trusted Professional Development Partner

</h2>

<p className="mt-8 text-lg text-gray-600 leading-9">

PT. Petratama Abdi Nusa established in 2003
and has become one of Indonesia's trusted providers
of Certification, Consultancy,
In House Training and Public Courses.

</p>

<div className="grid grid-cols-2 gap-8 mt-12">

<div>

<h3 className="font-bold text-xl">

Vision

</h3>

<p className="text-gray-600 mt-3">

Provide effective,
competitive and practical
business solutions.

</p>

</div>

<div>

<h3 className="font-bold text-xl">

Mission

</h3>

<p className="text-gray-600 mt-3">

Become Indonesia's leading
professional training partner.

</p>

</div>

</div>

</div>

</div>

</section>

);

}
