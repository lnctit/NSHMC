import React from "react";
import DocCard from "@/app/components/DocCard/DocCard";
// import CulturalCard from "./CulturalCard";

export default function Gallary() {
  return (
    <div>
        <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
          //   backgroundImage: "url('/logo1.png')",
          backgroundColor: "#d598d6",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Field-Visit And Cerificates</h1>
      </div>
        <div className="w-2/3 px-10 py-10 grid grid-cols-2 gap-6 ">
        <DocCard link="https://drive.google.com/file/d/1FOaRZmRH5c-_Nf3fp8TDD1WKgF9AwuGk/view?usp=sharing" heading="Sanchi Certificate" /> 
        <DocCard link="https://drive.google.com/file/d/1SxHUXr4R6sGzz_r2LOuAMdil21PddaI7/view?usp=sharing" heading="Amour Ice-cream Certificate" />
        <DocCard link="https://drive.google.com/file/d/1bEuqTXZtpFJIrpAnz7tsZ5gfxTE_Dkn7/view?usp=sharing" heading="Arera Hills Certificate" /> 
        <DocCard link="https://drive.google.com/file/d/1ImrXp6hHOCsDFa_t9zFeq1ny-7oWGRiX/view?usp=sharing" heading="District Health Society" />
        
        {/* <DocCard link="" heading="" /> */}
        </div>
      <div class=" mt-2 grid grid-cols-3 gap-4">
        <div>
          <img
            class="h-96 w-full rounded-lg"
            src="/feildvisit1.jpeg"
            alt=""
            className="h-72 w-[400px]"
          ></img>
        </div>
        <div>
          <img
            class="h-96 w-full rounded-lg"
            src="/feildvisit2.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 w-full rounded-lg"
            src="/feildvisit3.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 w-full rounded-lg"
            src="/feildvisit4.jpg"
            alt=""
            className="h-72 w-[400px]"
          ></img>
        </div>
        <div>
          <img
            class="h-96 w-full rounded-lg"
            src="/feildvisit5.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 w-full rounded-lg"
            src="/feildvisit6.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 w-full rounded-lg"
            src="/feildvisit7.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 w-full rounded-lg"
            src="/feildvisit8.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 w-full rounded-lg"
            src="/feildvisit9.jpg"
            alt=""
            className="h-72 w-[400px]"
          ></img>
        </div>
        <div>
          <img
            class="h-96 w-full rounded-lg"
            src="/feildvisit10.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 w-full rounded-lg"
            src="/feildvisit11.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f1.jpeg"
            alt=""
            className="h-72 w-[400px]"
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f2.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f3.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f4.jpeg"
            alt=""
            className="h-72 w-[400px]"
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f5.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f6.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f7.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f8.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f9.jpeg"
            alt=""
            className="h-72 w-[400px]"
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f10.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f11.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f12.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f13.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f14.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-96 
            w-full rounded-lg"
            src="/f16.jpeg"
            alt=""
          ></img>
        </div>
      </div>

      {/* <div className=" w-11/12 mx-auto p-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {[
           2, 3, 4, 5, 6, 7, 8, 1,9, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        ].map((index) => (
          <CulturalCard key={index} img={index}/>
          
        ))}
      </div>
    </div> */}
    </div>
  );
}
