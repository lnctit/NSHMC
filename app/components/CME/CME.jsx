"use client";
import React from "react";
import { useState } from "react";
import RelatedLink from "../RelatedLink/RelatedLink";
import DocCard from "../DocCard/DocCard";

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
        <h1 className=" uppercase font-bold text-5xl">CME Program</h1>
      </div>
          <div className="flex w-full gap-20 justify-center">
          <div className=" w-2/3 px-10 py-10 grid grid-cols-2 gap-6 ">
          <DocCard link="https://drive.google.com/file/d/1SVCNRrHPcXIdHC9iSEFMedYhGRftDGqq/view?usp=sharing" heading="CME Detail 2024" /> 
          <DocCard link="https://drive.google.com/file/d/1ZpOhNBo09ADpcr9znJVW_2SarsyPcZjS/view?usp=sharing" heading="CME Detail 2023" /> 
        {/* <img src="/CMEdetailss.jpg" className="w-[500px] m-auto"></img> */}
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