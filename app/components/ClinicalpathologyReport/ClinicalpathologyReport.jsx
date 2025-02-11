import React from "react";
import Slider from "../Slider/Slider";
import SliderMain from "../SliderMain/SliderMain";
import RelatedLink from "../RelatedLink/RelatedLink";
import RuleCard from "../RuleCard/RuleCard";
import Link from "next/link";
import DocCard from "../DocCard/DocCard";

export default function Opd() {
  const images = ["/ar-1.jpg"];
  return (
    <>
      {/* <SliderMain images={images} heading="OPD REPORTS" /> */}
      <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
        //   backgroundImage: "url('/logo1.png')",
        backgroundColor:"#d598d6",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Clinical Pathology Report</h1>
      </div>
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3 px-10 py-10 grid grid-cols-2 gap-6 ">
        
          <DocCard link="https://drive.google.com/file/d/19cc4WPSeFU1BuwNUPi8AW-BaMBFwXYvJ/view?usp=sharing" heading="Clinical Pathology Report 2023" /> 
          <DocCard link="https://drive.google.com/file/d/1Nx-qeErMVkQnX7JuBiuwIaRRlnhQhhFc/view?usp=sharing" heading="Clinical Pathology Report 2022" />
          <DocCard link="https://drive.google.com/file/d/1dQtRa3nLPodgrhBQnmyJqvHUrOKvhrJt/view?usp=sharing" heading="Clinical Pathology Report 2021" /> 
          <DocCard link="https://drive.google.com/file/d/1YenjuNN8yc0GauEwcakRp13Rdd_r4Gu9/view?usp=sharing" heading="Clinical Pathology Report 2020" />
          <DocCard link="https://drive.google.com/file/d/1yuzoatN8cgs7l1OvmUiY2agz6d_pNPfW/view?usp=sharing" heading="Clinical Pathology Report 2019" /> 
          <DocCard link="https://drive.google.com/file/d/1LVMJWJQlsrqD1DaNiYw0QDYR_wLuf_2P/view?usp=sharing" heading="Clinical Pathology Report 2018" />
          <DocCard link="https://drive.google.com/file/d/1L9s4gX27zR6wj8KhSX0-6h--ttBM53le/view?usp=sharing" heading="Clinical Pathology Report 2017" /> 
          <DocCard link="https://drive.google.com/file/d/1zUng6g654KkuOQRiLER4gk8y9eCPgAN1/view?usp=sharing" heading="Clinical Pathology Report 2016" />
          <DocCard link="https://drive.google.com/file/d/1YQJ5vl9GIrIjLx9s0B9q4VxOW0jmUg_N/view?usp=sharing" heading="Clinical Pathology Report 2015" /> 
          <DocCard link="https://drive.google.com/file/d/1pHHqHQMgkKiejrlIUuZ0zVCoEx5q7x8O/view?usp=sharing" heading="Clinical Pathology Report 2014" /> 
          {/* <DocCard link="https://drive.google.com/file/d/1xaGYSlP8ePbKRppJtW6n8xraJdxvAh0V/view?usp=sharing" heading="OPD Report 2014" />
          <DocCard link="https://drive.google.com/file/d/1okTJTLsx_x-CVrt3pPnBvdAKJioiMzcp/view?usp=sharing" heading="Stool Examination" /> 
          <DocCard link="https://drive.google.com/file/d/1EVdkz-jBN6I8tha32A4tsKmhdD0GHMMn/view?usp=sharing" heading="Dept. Of Radiology X-ray Report Yearly Jan23-Dec23" />        
          <DocCard link="https://drive.google.com/file/d/1gIaqAacBERU1SSELWcpxsIjqp3FFhovc/view?usp=sharing" heading="X-ray report" /> 
          <DocCard link="https://drive.google.com/file/d/1ZvS_9llVR1Yrhq6KwkCF2Gb1hAqGI25p/view?usp=sharing" heading="X-ray Report " /> 
          <DocCard link="https://drive.google.com/file/d/1ZQAemrTIVrNFA0rq3xoQqN7H_tyIMiBk/view?usp=sharing" heading="Investigation(X-ray,ECG,UCG)" /> */}
          
          {/* <DocCard link="" heading="" /> */}
          </div>

        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 px-4 ">
          <RelatedLink />
        </div>
      </div>


      {/* <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/opd.jpg" className="w-[500px] m-auto pb-4"></img>
      </div> */}
      {/* <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
        <div className="w-2/3  ">
          <div className="w-full px-20 pt-[36px]   flex flex-wrap gap-5 justify-evenly ">
            <RuleCard
              bgcolor="bg-red-200"
              link="/"
              heading="B.Tech., B.Arch., Int.M.Sc. (5 yr), B.Tech. M.Tech. Dual Degree (5 yr) Summarized"
            />
            <RuleCard bgcolor="bg-green-200" link="/" heading="heading" />
            <RuleCard bgcolor="bg-gray-200" link="/" heading="heading" />
            <RuleCard bgcolor="bg-blue-200" link="/" heading="heading" />
            <RuleCard bgcolor="bg-pink-200" link="/" heading="heading" />
            <RuleCard bgcolor="bg-purple-200" link="/" heading="heading" />
            <RuleCard bgcolor="bg-lime-200" link="/" heading="heading" />
            <RuleCard bgcolor="bg-blue-200" link="/" heading="heading" />
          </div>
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
          <RelatedLink />
        </div>
      </div>
      <div className=" w-full "  style={{
          backgroundImage: "url('/crystal.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <h1 className="p-10 px-16 text-5xl text-white font-extrabold">
          Seminar/workshops
        </h1>

        <div className="flex p-5 mx-auto justify-around">
          <div>
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                May 6,2024
              </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          </div>
          <div>
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                May 6,2024
              </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          </div>
          <div>
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                May 6,2024
              </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          </div>
        </div>
        <div className="flex p-5 mx-auto justify-around">
          <div>
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 border-b-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                May 6,2024
              </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          </div>
          <div>
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                May 6,2024
              </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          </div>
          <div>
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                May 6,2024
              </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
      <div className="p-10">
        <h1 className="text-blue-500 font-extrabold text-3xl">
          EDUCATIONAL TOURS
        </h1>
        <div className="p-2">
          <h3>
            {" "}
            <span className="text-semibold"> 📆 </span> May 6 2024
          </h3>
          <h6>Dr. Harshal Khairnair London, UK</h6>
        </div>
        <div className="p-2">
          <h3>
            {" "}
            <span className="text-semibold"> 📆 </span> May 6 2024
          </h3>
          <h6>Dr. Harshal Khairnair London, UK</h6>
        </div>
        <div className="p-2">
          <h3>
            {" "}
            <span className="text-semibold"> 📆 </span> May 6 2024
          </h3>
          <h6>Dr. Harshal Khairnair London, UK</h6>
        </div>
        <div className="p-2">
          <h3>
            {" "}
            <span className="text-semibold"> 📆 </span> May 6 2024
          </h3>
          <h6>Dr. Harshal Khairnair London, UK</h6>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-blue-500 font-extrabold text-3xl">
        CO-CURRICULAR ACTIVITIES
        </h1>
        <div className="p-2">
          <h3>
            {" "}
            <span className="text-semibold"> 📆 </span> May 6 2024
          </h3>
          <h6>Dr. Harshal Khairnair London, UK</h6>
        </div>
        <div className="p-2">
          <h3>
            {" "}
            <span className="text-semibold"> 📆 </span> May 6 2024
          </h3>
          <h6>Dr. Harshal Khairnair London, UK</h6>
        </div>
        <div className="p-2">
          <h3>
            {" "}
            <span className="text-semibold"> 📆 </span> May 6 2024
          </h3>
          <h6>Dr. Harshal Khairnair London, UK</h6>
        </div>
        <div className="p-2">
          <h3>
            {" "}
            <span className="text-semibold"> 📆 </span> May 6 2024
          </h3>
          <h6>Dr. Harshal Khairnair London, UK</h6>
        </div>
      </div>
      </div> */}
     
    </>
  );
}
