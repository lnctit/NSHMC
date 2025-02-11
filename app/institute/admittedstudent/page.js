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
        <h1 className=" uppercase font-bold text-5xl">Admitted Students</h1>
      </div>
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-10 py-10 grid grid-cols-2 gap-10 ">
          <DocCard link="https://drive.google.com/file/d/1qGC0XBc-md4-CdLYSRfMktz6JdZs0-kN/view?usp=sharing" heading="Admitted students 2016-17" />
          <DocCard link="https://drive.google.com/file/d/1A8Y7SrYins6TJi43Agvp7xLfW0GqxtK0/view?usp=sharing" heading="Admitted students 2017-18" />
          <DocCard link="https://drive.google.com/file/d/1DLiJ2mabtSeNSY8e42H5OnnfORK7ub2s/view?usp=sharing" heading="Admitted students 2018-19" />
          <DocCard link="https://drive.google.com/file/d/1VD_4CaLCbxZGBY_LV2bLKvtzheZQ2Sn4/view?usp=sharing" heading="Admitted students 2019-20" />
          <DocCard link="https://drive.google.com/file/d/1iDlfeierimT7G54rSD2bLMrlIStoARAw/view?usp=sharing" heading="Admitted students 2020-21" />
          <DocCard link="https://drive.google.com/file/d/16wRMaipwfGEpgBmG3-RTw5g-dSO2eKBA/view?usp=sharing" heading="Admitted students 2021-22" />
          <DocCard link="https://drive.google.com/file/d/1jMAQiIEqcYCuHj8Thwwd_QSgmBujMNiV/view?usp=sharing" heading="Admitted students 2022-23" />
          <DocCard link="https://drive.google.com/file/d/1yMoN5MXviLaGzooBFej6n4-mFITH_g04/view?usp=sharing" heading="Admitted students 2023-24" />
        </div>

        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 px-4 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
