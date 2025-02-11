"use client";
import Image from "next/image";
import React from "react";
import Counter from "@/app/components/Counter";
import RelatedLink from "../RelatedLink/RelatedLink";

export default function AdministrationLibrary() {
  return (
    <>
    <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
        //   backgroundImage: "url('/logo1.png')",
        backgroundColor:"#d598d6",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Administration And Library Staff</h1>
      </div>
        <div className="flex w-full gap-20 justify-center">
        <div className="  ml-10 gap-[100px] mt-12 ">
        <img src="/adminlib.jpg" className="w-[500px] border-2 "></img>
      </div>
      <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
          <div className="relative h-full ">
            <RelatedLink />
          </div>
        </div>
        </div>
      
      
        
    </>
  );
}
