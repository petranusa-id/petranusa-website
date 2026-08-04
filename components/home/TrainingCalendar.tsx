const schedules=[

{

course:"HAZOP",

date:"12 Aug 2026",

city:"Jakarta",

},

{

course:"Well Integrity",

date:"19 Aug 2026",

city:"Balikpapan",

},

{

course:"Leadership",

date:"5 Sept 2026",

city:"Bandung",

},

];

export default function TrainingCalendar(){

return(

<section className="bg-slate-50 py-24">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center">

Upcoming Training

</h2>

<table className="w-full mt-16">

<thead>

<tr className="border-b">

<th className="py-4 text-left">

Course

</th>

<th>Date</th>

<th>Location</th>

</tr>

</thead>

<tbody>

{

schedules.map((item)=>(

<tr

key={item.course}

className="border-b"

>

<td className="py-5">

{item.course}

</td>

<td>

{item.date}

</td>

<td>

{item.city}

</td>

</tr>

))

}

</tbody>

</table>

</div>

</section>

);

}
