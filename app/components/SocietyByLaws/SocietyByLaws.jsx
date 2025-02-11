import DocCard from "@/app/components/DocCard/DocCard";
import RelatedLink from "@/app/components/RelatedLink/RelatedLink";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import React from "react";

export default function Page() {
  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  return (
    <div>
      {/* <SliderMain images={images} /> */}
      <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
        //   backgroundImage: "url('/logo1.png')",
        backgroundColor:"#d598d6",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Society ByLaws</h1>
      </div>
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-10 py-10 grid grid-cols-2 gap-6 ">
        
          <DocCard link="https://drive.google.com/file/d/1i9ayaPlhrERU9w1uRVJE3WpEiuZH-xK9/view?usp=sharing" heading="Society ByLaws" /> 
         
          
          {/* <DocCard link="" heading="" /> */}
          </div>

        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 px-4 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
