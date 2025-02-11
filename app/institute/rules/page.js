import React from "react";
import SliderMain from "./SliderMain";
import Image from "next/image";
import RuleCard from "./RuleCard";

export default function Rules_Regulations() {
  const images = ["/banner2.jpg"];
  return (
    <div>
      <SliderMain images={images} heading="Rules and Regulations" />
      <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-10 pt-[36px]  grid grid-cols-3  gap-5 justify-evenly pb-10 ">
          <RuleCard bgcolor="bg-red-200" link="/" heading="2017" />
          <RuleCard bgcolor="bg-green-200" link="/" heading="2018" />
          <RuleCard bgcolor="bg-gray-200" link="/" heading="2019" />
          <RuleCard bgcolor="bg-blue-200" link="/" heading="2020" />
          <RuleCard bgcolor="bg-pink-200" link="/" heading="2021" />
          <RuleCard bgcolor="bg-blue-200" link="/" heading="2022" />
          <RuleCard bgcolor="bg-lime-200" link="/" heading="2023" />
          <RuleCard bgcolor="bg-blue-200" link="/" heading="2024" />
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
          <div className="relative h-full ">
            <Image
              src="/welcome.jpeg"
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
