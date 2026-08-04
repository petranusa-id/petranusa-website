const faq=[

{

q:"Can training be conducted in-house?",

a:"Yes. All programs can be customized according to your company needs.",

},

{

q:"Do participants receive certificates?",

a:"Yes, certificates are issued upon successful completion.",

},

];

export default function FAQ(){

return(

<section className="bg-slate-50 py-24">

<div className="max-w-5xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center">

Frequently Asked Questions

</h2>

<div className="mt-16 space-y-8">

{

faq.map((item)=>(

<div

key={item.q}

className="rounded-2xl border p-8"

>

<h3 className="font-bold">

{item.q}

</h3>

<p className="mt-4 text-gray-600">

{item.a}

</p>

</div>

))

}

</div>

</div>

</section>

);

}
