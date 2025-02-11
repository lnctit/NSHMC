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
        <h1 className=" uppercase font-bold text-5xl">Other Records</h1>
      </div>
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-10 py-10 grid grid-cols-2 gap-6 ">
        
          {/* <DocCard link="https://drive.google.com/file/d/1ons_DUOJqWsc2NNN4-eElcajZXOU8PsL/view?usp=sharing" heading="Clinical Pathology" />  */}
          <DocCard link="https://drive.google.com/file/d/1iX36pRnx7Vp0zcJnupmy-QnpvrhU_7Te/view?usp=sharing" heading="Hematology" />
          <DocCard link="https://drive.google.com/file/d/11h0nhYjwU9x8UzqZBtOAZWCF-gOnjlbd/view?usp=sharing" heading="Biocgemistry General-Blood" /> 
          <DocCard link="https://drive.google.com/file/d/1rGKOrFbesBKPc4d-di3LIMEU34IV__9V/view?usp=sharing" heading="Endocrionology" />
          <DocCard link="https://drive.google.com/file/d/1iqI7wxq15Z4YioWNh2crPwk2ttLiaS0m/view?usp=sharing" heading="Microbiology" /> 
          <DocCard link="https://drive.google.com/file/d/1S6Acqd9AqBPKsYperzWsifxgB9Q7uih8/view?usp=sharing" heading="Semen Examination" />
          <DocCard link="https://drive.google.com/file/d/1nYh9Nnx30GGClcDPyLsCYpHMAt1a3uVk/view?usp=sharing" heading="Serology" /> 
          <DocCard link="https://drive.google.com/file/d/1b9Be5uIqM7EgRtTHgUbPm5dbykHMBwrI/view?usp=sharing" heading="Serum Of Widal" />
          <DocCard link="https://drive.google.com/file/d/1lfgh4ItFg_PkLkN98uTUEUH1L86gaSQ9/view?usp=sharing" heading="Urine Examination" /> 
          <DocCard link="https://drive.google.com/file/d/1xaGYSlP8ePbKRppJtW6n8xraJdxvAh0V/view?usp=sharing" heading="Vitamins Examination" />
          <DocCard link="https://drive.google.com/file/d/1okTJTLsx_x-CVrt3pPnBvdAKJioiMzcp/view?usp=sharing" heading="Stool Examination" /> 
          <DocCard link="https://drive.google.com/file/d/1EVdkz-jBN6I8tha32A4tsKmhdD0GHMMn/view?usp=sharing" heading="Dept. Of Radiology X-ray Report Yearly Jan23-Dec23" />        
          <DocCard link="https://drive.google.com/file/d/1gIaqAacBERU1SSELWcpxsIjqp3FFhovc/view?usp=sharing" heading="X-ray report" /> 
          <DocCard link="https://drive.google.com/file/d/1ZvS_9llVR1Yrhq6KwkCF2Gb1hAqGI25p/view?usp=sharing" heading="X-ray Report " /> 
          <DocCard link="https://drive.google.com/file/d/1ZQAemrTIVrNFA0rq3xoQqN7H_tyIMiBk/view?usp=sharing" heading="Investigation(X-ray,ECG,UCG)" />
          
          {/* <DocCard link="" heading="" /> */}
          </div>

        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 px-4 ">
          <RelatedLink />
        </div>
      </div>
    </div>
  );
}
