"use client";

import Link from "next/link";

export default function FloatingWhatsApp(){

return(

<Link

href="https://wa.me/6287780746660"

target="_blank"

className="fixed bottom-8 left-8 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl z-50"

>

WhatsApp

</Link>

);

}
