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
        <h1 className=" uppercase font-bold text-5xl">College Cerificate</h1>
      </div>
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-10 py-10 grid grid-cols-2 gap-6 ">
          <DocCard link="https://drive.google.com/file/d/1f4dygKP3O7gMyUAxZ3ht4bKY4nng0IzE/view?usp=sharing" heading="Affiliation Cerificate" />
          <DocCard link="https://drive.google.com/file/d/1xNrqFB5lZ7KVlB6obGiGXmAbLYbYcbLe/view?usp=sharing" heading="NOC State Govt." />
          <DocCard link="https://drive.google.com/file/d/11nvmpkRCL_l5XeiCY5nDEhcmUGw_aKpb/view?usp=sharing" heading="Permissions" />
          <DocCard link="https://drive.google.com/file/d/10JLGV_bJWpb_fx83StmRgRX5LxqyrLro/view?usp=sharing" heading="Starting College" /> 
          <DocCard link="" heading="Uploading Soon" /> 
          <DocCard link="" heading="Uploading Soon" />        
          </div>

        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 px-4 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
