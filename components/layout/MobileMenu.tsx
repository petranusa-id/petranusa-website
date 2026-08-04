"use client";

import Link from "next/link";

type Props={

open:boolean;

onClose:()=>void;

};

export default function MobileMenu({

open,

onClose,

}:Props){

if(!open)return null;

return(

<div className="fixed inset-0 bg-black/70 z-50">

<div className="absolute right-0 w-80 bg-white h-full p-8">

<div className="space-y-8 text-xl">

<Link href="/" onClick={onClose}>Home</Link>

<Link href="/about" onClick={onClose}>About</Link>

<Link href="/services" onClick={onClose}>Services</Link>

<Link href="/gallery" onClick={onClose}>Gallery</Link>

<Link href="/news" onClick={onClose}>News</Link>

<Link href="/contact" onClick={onClose}>Contact</Link>

</div>

</div>

</div>

);

}
