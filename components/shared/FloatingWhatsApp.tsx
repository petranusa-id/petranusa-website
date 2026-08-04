"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {

return(

<a

href="https://wa.me/+6287780746660"

target="_blank"

className="fixed bottom-8 right-8 bg-green-600 p-5 rounded-full shadow-2xl hover:scale-110 transition z-50"

>

<MessageCircle className="text-white"/>

</a>

);

}
