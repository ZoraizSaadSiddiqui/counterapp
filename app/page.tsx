"use client";
import { useState } from  "react";
export  default function Counter(){
   const [count, setCount] = useState(0);
   return(
    <div className=" flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-teal-500 mt-9 mb-5 ">Counter Website</h1>
        <h2 className="text-2xl font-semi-bold mb-5">Counter: {count}</h2>
        <button className="bg-teal-200 hover:bg-teal-300 px-4 py-3 font-semibold cursor-pointer text-xl rounded-md" onClick={()=>setCount(count+1)}>Increment</button>
    </div>
   );
 }