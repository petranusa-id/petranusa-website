import Image from "next/image";

import { gallery } from "@/data/gallery";

export default function Gallery(){

return(

<section className="bg-slate-50 py-28">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">

<h2 className="text-5xl font-bold">

Training Gallery

</h2>

<p className="mt-5 text-gray-600">

Moments from our professional training activities.

</p>

</div>

<div className="grid md:grid-cols-3 gap-8 mt-20">

{

gallery.map((item)=>(

<div

key={item}

className="overflow-hidden rounded-3xl"

>

<Image

src={item}

alt="Gallery"

width={700}

height={500}

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
