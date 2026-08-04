"use client";

import CountUp from "react-countup";

export default function Statistics() {

return (

<section className="bg-green-700 py-24">

<div className="max-w-7xl mx-auto grid md:grid-cols-4 text-center text-white gap-10">

<div>

<h2 className="text-6xl font-bold">

<CountUp end={20} duration={3}/>

+

</h2>

<p className="mt-3">

Years Experience

</p>

</div>

<div>

<h2 className="text-6xl font-bold">

<CountUp end={500} duration={3}/>

+

</h2>

<p>

Training Programs

</p>

</div>

<div>

<h2 className="text-6xl font-bold">

<CountUp end={100000} duration={4}/>

+

</h2>

<p>

Participants

</p>

</div>

<div>

<h2 className="text-6xl font-bold">

<CountUp end={50}/>

+

</h2>

<p>

Corporate Clients

</p>

</div>

</div>

</section>

);

}
