"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";

import { clients } from "@/data/clients";

export default function Clients() {

return (

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-4xl font-bold">

Trusted By

</h2>

<Swiper

modules={[Autoplay]}

slidesPerView={5}

spaceBetween={40}

loop

autoplay={{

delay:0,

disableOnInteraction:false,

}}

speed={4000}

>

{

clients.map((logo)=>(

<SwiperSlide key={logo}>

<Image

src={logo}

alt="client"

width={180}

height={80}

className="object-contain grayscale hover:grayscale-0 transition"

/>

</SwiperSlide>

))

}

</Swiper>

</div>

</section>

);

}
