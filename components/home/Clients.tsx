"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import { clients } from "@/data/clients";

export default function Clients(){

return(

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">

<h2 className="text-5xl font-bold">

Trusted By

</h2>

<p className="mt-4 text-gray-600">

National and International Companies

</p>

</div>

<Swiper

modules={[Autoplay]}

slidesPerView={5}

loop

speed={4500}

autoplay={{

delay:0,

disableOnInteraction:false,

}}

spaceBetween={40}

className="mt-20"

>

{

clients.map((logo)=>(

<SwiperSlide key={logo}>

<Image

src={logo}

alt="Client"

width={170}

height={80}

className="grayscale hover:grayscale-0 transition mx-auto"

/>

</SwiperSlide>

))

}

</Swiper>

</div>

</section>

);

}
