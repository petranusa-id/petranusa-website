import Link from "next/link";

export default function DownloadCenter(){

return(

<section className="py-24">

<div className="max-w-5xl mx-auto text-center px-6">

<h2 className="text-5xl font-bold">

Download Center

</h2>

<p className="mt-6 text-gray-600">

Access our latest documents.

</p>

<div className="grid md:grid-cols-2 gap-8 mt-16">

<Link

href="/documents/company-profile.pdf"

className="border rounded-2xl p-10 hover:shadow-lg"

>

Company Profile

</Link>

<Link

href="/documents/training-calendar.pdf"

className="border rounded-2xl p-10 hover:shadow-lg"

>

Training Calendar

</Link>

</div>

</div>

</section>

);

}
