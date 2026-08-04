"use client";

import { ArrowUp } from "lucide-react";

import { useEffect,useState } from "react";

export default function BackToTop(){

const[show,setShow]=useState(false);

useEffect(()=>{

const handler=()=>{

setShow(window.scrollY>500);

};

window.addEventListener("scroll",handler);

return()=>window.removeEventListener("scroll",handler);

},[]);

if(!show)return null;

return(

<button

onClick={()=>window.scrollTo({

top:0,

behavior:"smooth",

})}

className="fixed bottom-8 right-8 bg-green-600 text-white w-14 h-14 rounded-full shadow-xl"

>

<ArrowUp className="mx-auto"/>

</button>

);

}
