"use client";
import React from "react";
import { useState } from "react";
import RelatedLink from "../components/RelatedLink/RelatedLink";

export default function Page() {
  const [collegeNameIndex, setCollegeNameIndex] = useState(0);

  const collegeNames = ["NSHMC ", "एसकेसी एलएनसीटी "];
  return (
    <div>
      <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
        //   backgroundImage: "url('/logo1.png')",
        backgroundColor:"#d598d6",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Society Registration</h1>
      </div>
        
        <div className="flex w-full gap-20 justify-center">
        <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/societyregi.jpg" className="w-[500px] m-auto"></img>
      </div>

      <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
          <div className="relative h-full ">
            <RelatedLink />
          </div>
        </div>
        </div>
      
    </div>
  );
}
