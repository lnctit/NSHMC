import React from "react";
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
        <h1 className=" uppercase font-bold text-5xl">Playgrounds</h1>
      </div>
      <div class=" mt-2 grid grid-cols-3 gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/playground1.JPG"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg pb-2"
            src="/playground2.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-72 w-[400px] rounded-lg"
            src="/playground3.jpg"
            alt=""
            
          ></img>
        </div>
        {/* <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          ></img>
        </div> */}
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
