import Link from "next/link";

export default function CTA(){

return(

<section className="bg-green-700 py-28">

<div className="max-w-5xl mx-auto text-center text-white px-6">

<h2 className="text-5xl font-bold leading-tight">

Ready to Improve Your Organization's Competency?

</h2>

<p className="mt-8 text-xl">

Let's discuss how Petranusa can support your organization.

</p>

<div className="flex justify-center gap-6 mt-10">

<Link

href="/contact"

className="bg-white text-green-700 px-8 py-4 rounded-xl"

>

Contact Us

</Link>

<Link

href="/company-profile.pdf"

className="border border-white px-8 py-4 rounded-xl"

>

Download Profile

</Link>

</div>

</div>

</section>

);

}
