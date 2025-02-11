import DocCard from "@/app/components/DocCard/DocCard";
import RelatedLink from "@/app/components/RelatedLink/RelatedLink";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import React from "react";

export default function page() {
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
        <h1 className=" uppercase font-bold text-5xl">Merit List</h1>
      </div>
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-10 py-10 grid grid-cols-2 gap-10 ">
          <DocCard link="https://drive.google.com/file/d/16JqWK9ZJBJXvHkCnxFNjfI_KBDBQpxV2/view?usp=sharing" heading="Merit 2020" />
          <DocCard link="https://drive.google.com/file/d/17sgMEN6zhX1zIZqJETPjUEWKg8b3RS0I/view?usp=sharing" heading="Merit 2021" />
          <DocCard link="https://drive.google.com/file/d/1kN5acZ7gsIMusD2HT8x-QahHKg0WJWth/view?usp=sharing" heading="Merit 2022" />
          <DocCard link="https://drive.google.com/file/d/1vJI9prJe_3Q1MUk3sKWKde59o61amUq7/view?usp=sharing" heading="Merit 2023" />
          <DocCard link="#" heading="uploading soon" />
          <DocCard link="#" heading="uploading soon" />
          <DocCard link="#" heading="uploading soon" />
        </div>

        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 px-4 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
