"use client";

import Image from "next/image";

import { gallery } from "@/data/gallery";

export default function Gallery(){

return(

<section className="py-28 bg-slate-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center">

Training Gallery

</h2>

<div className="grid md:grid-cols-3 gap-8 mt-20">

{

gallery.map((item)=>(

<div

key={item}

className="overflow-hidden rounded-3xl shadow-xl"

>

<Image

src={item}

alt="Gallery"

width={600}

height={450}

className="hover:scale-110 transition duration-700"

 />

</div>

))

}

</div>

</div>

</section>

);

}
