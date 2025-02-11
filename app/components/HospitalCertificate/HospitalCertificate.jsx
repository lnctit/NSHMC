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
        <h1 className=" uppercase font-bold text-5xl">Hospital Cerificates</h1>
      </div>
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-10 py-10 grid grid-cols-2 gap-10 ">
          <DocCard link="https://drive.google.com/file/d/1R9TsaunCvgP1VAnAHVTLt0GQrJorBiFt/view?usp=sharing" heading="Hospital Reg. Certificate 22-25" />
          <DocCard link="https://drive.google.com/file/d/1VYoTnxx0ySbqxMkN712ZzjW8kTq2Pzp7/view?usp=sharing" heading="AERB License" />
          <DocCard link="https://drive.google.com/file/d/1vBrokTQonDsO1LBfRdmO5HDqxMbWk_cD/view?usp=sharing" heading="BMW Certificate" />
          <DocCard link="https://drive.google.com/file/d/10B-bz_eCETCgb4gfngV1SKwiQtcoyPpi/view?usp=sharing" heading="Digital X-ray MOU" />
          <DocCard link="https://drive.google.com/file/d/1K8IsFaJXOm-6IWh2Lcl_TaeABXh89Hz_/view?usp=sharing" heading="Fire Certificate" />
          <DocCard link="https://drive.google.com/file/d/10Eq0Aw0gMTXHFSrEiY6Qw2xaNtJIi3In/view?usp=sharing" heading="Internship CHC Letter" />
          <DocCard link="https://drive.google.com/file/d/18WfnHT59i45wjD87JNODWHkH4uJbAkeD/view?usp=sharing" heading="MOU Laundary" />
          <DocCard link="https://drive.google.com/file/d/1edXfNyx3OUYOKrgAAjRU5gjQiGhW5z2i/view?usp=sharing" heading="MoU Super Speciality Hospital LN Medical" />
          <DocCard link="https://drive.google.com/file/d/1z5qyxbY_9AjIenxNHH-pv2vxk3Ajpl23/view?usp=sharing" heading="MoU Super Speciality Hospital Siddhanta Hospital" />
          <DocCard link="https://drive.google.com/file/d/1Qn_X9l2QVLAnUivTyg0OQiyFCp9SuMhF/view?usp=sharing" heading="Pollution Control Certificate" />
        </div>

        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 px-4 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
