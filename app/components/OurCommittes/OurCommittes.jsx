"use client";
import React from "react";
import { useState } from "react";
import RelatedLink from "../RelatedLink/RelatedLink";

export default function OurCommittes () {
  const [collegeNameIndex, setCollegeNameIndex] = useState(0);

  const collegeNames = ["NSHMC ", "एसकेसी एलएनसीटी "];
  const[active,setActive] = useState(0);
  const buttons=[
    'Academic Committee','Anti-Ragging Committee','Anti-Sexual Harrasment Committee','CBDC Committee','College Council Committee'
  ]
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
        <h1 className=" uppercase font-bold text-5xl">Our Committees</h1>
      </div>
      <div className='mt-4 flex items-center gap-5'>
      {
        buttons.map((item,index)=>(
          <button onClick={()=>setActive(index)} className='border-2 p-4 rounded-lg bg-purple-500 hover:bg-purple-700' key={index}>{item}</button>
        ))
      }
      </div>
      <div className="flex w-full gap-20 justify-center">
      <div className="w-full">
        {
          active===0 &&(
            <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/academiccommitte.jpg" className="w-[500px] m-auto"></img>
      </div>
          )
        }
        {
          active===1 &&(
            <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/antiragging.jpg" className="w-[500px] m-auto"></img>
      </div>
          )
        }
        {
          active===2 &&(
            <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/Antisexualcell.jpg" className="w-[500px] m-auto"></img>
      </div>
          )
        }
        {
          active===3 && (
            <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/cbdc.jpg" className="w-[500px] m-auto"></img>
      </div>
          )
        }
        {
          active===4 && (
            <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/collegecouncil.jpg" className="w-[500px] m-auto"></img>
      </div>
          )
        }
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