const testimonials=[

{

name:"Energy Company",

quote:"Excellent training with experienced instructors.",

},

{

name:"Oil & Gas Client",

quote:"Highly recommended for competency development.",

},

{

name:"Mining Company",

quote:"Professional and practical learning experience.",

},

];

export default function Testimonials(){

return(

<section className="py-24">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">

<h2 className="text-5xl font-bold">

Testimonials

</h2>

</div>

<div className="grid lg:grid-cols-3 gap-8 mt-16">

{

testimonials.map((item)=>(

<div

key={item.name}

className="rounded-3xl border p-10"

>

<p className="italic">

"{item.quote}"

</p>

<h3 className="mt-8 font-bold">

{item.name}

</h3>

</div>

))

}

</div>

</div>

</section>

);

}
