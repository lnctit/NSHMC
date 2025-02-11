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
        <h1 className=" uppercase font-bold text-5xl">Results</h1>
      </div>
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-10 py-10 grid grid-cols-2 gap-10 ">
          <DocCard link="https://drive.google.com/file/d/1bfvCr-SoEmDA2DZB1C4IKDv2SYJZxdnm/view?usp=sharing" heading="Result 2020" />
          <DocCard link="https://drive.google.com/file/d/1YLkGGi0y-YBUmLS06btRp2uZe_XR34cM/view?usp=sharing" heading="Result 2021" />
          <DocCard link="https://drive.google.com/file/d/17pzd96A7ppSRx_ws-FmzuHtSozTdH_78/view?usp=sharing" heading="Result 2022" />
          <DocCard link="https://drive.google.com/file/d/1Ntl299XmDA32IKk0mLrDCRJL2xCKHyX1/view?usp=sharing" heading="Result 2023" />
          <DocCard link="https://drive.google.com/file/d/1LbIqstONinuHTKU3RykB94OzipBI_iBx/view?usp=sharing" heading="Result 2024" />
          {/* <DocCard link="#" heading="Result 2022" />
          <DocCard link="#" heading="Result 2022" /> */}
        </div>

        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 px-4 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
