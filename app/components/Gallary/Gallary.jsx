import React from "react";
import CulturalCard from "./CulturalCard";

export default function Gallary() {
  return (
    <div>
      <div class=" mt-2 grid grid-cols-3 gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery1.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery5.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery3.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery13.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="Graduationceremony.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery14.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery15.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery16.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery17.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery18.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery19.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery20.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery21.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery22.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery23.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery24.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery25.jpeg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="gallery26.jpeg"
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
