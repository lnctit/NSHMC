"use client";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import Image from "next/image";
import React from "react";
import Counter from "@/app/components/Counter";
import { MdEmail } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function page() {
  const imageData = [
    { src: "/reception.jpg", title: "Reception" },
    { src: "/registration.jpg", title: "Registration And Medicine Distribution" },
    { src: "/homoeopathicopd1.jpg", title: "Homeopathic OPD-1" },
    { src: "/homoeopathicOPD2.jpg", title: "Homeopathic OPD-2(M.O)" },
    { src: "/paediatricOPD.jpg", title: "Paediatric OPD" },
    { src: "/OPD-Medicine.jpg", title: "OPD Medicine" },
    { src: "/obsgynae.jpg", title: "OPD ObsGyane" },
    { src: "/OPDSurgeryDental.jpg", title: "OPD Surgery And Dental" },
    // { src: "/OPDObsGynae.jpg", title: "OPD ObsGynae" },
    { src: "/OTLabourRoom.jpg", title: "OT & Labour Room" },
    { src: "/PathologyRadiology.jpg", title: "Pathology and Radiology" },
    { src: "/ClinicalPathology.jpg", title: "Clinical Pathology" },
    { src: "/ETPPlant.jpg", title: "ETP Plant" },
    { src: "/DieticianYogaUnit.jpg", title: "Dietician And Yoga Unit" },
    { src: "/physiotherapy.jpg", title: "Physiotherapy" },
    { src: "/Ward1emergency.jpg", title: "Ward-1 Emergency" },
    { src: "/Ward2femalewardmedicine.jpg", title: "Ward-2 Female Ward Medicine" },
    { src: "/ward3femalewardsurgery.jpg", title: "Ward-3 Female Ward Surgery" },
    { src: "/ward4malewardsurgery.jpg", title: "Ward-4 Male Ward Surgery" },
    { src: "/ward5malemedicine.jpg", title: "Ward-5 Male Medicine" },
    { src: "/ward6paediatric.jpg", title: "Ward-6 Paeditric" },
    { src: "/ward7obsGynae.jpg", title: "Ward-7 ObsGynae" },
    // { src: "", title: "" },

  ];
  // const images = ["/ar-3.jpg"];
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
        <h1 className=" uppercase font-bold text-5xl">Hospital</h1>
      </div>

      <div className="mt-6  mx-auto border rounded-lg overflow-hidden shadow-lg bg-white">
        
        <div className="p-4 grid grid-cols-3 gap-8">
          {/* Map through the imageData array */}
          {imageData.map((item, index) => (
            <div key={index} className="flex flex-col h-96 justify-center items-center">
              <h3 className="text-lg font-bold mt-4 underline ">{item.title}</h3>
              <img
                src={item.src}
                alt={item.title}
                
                className="w-full h-96 object-cover rounded-md "
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div class=" mt-2 grid grid-cols-3 gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/reception.jpg"
            alt=""
            className="h-[16px]"
          ></img>
          <h1>Reception</h1>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          ></img>
        </div>

      </div> */}

      {/* <SliderMain images={images} /> */}
      {/* <div className="w-10/12 p-20 mx-auto  flex flex-col gap-4 ">
        <h1 className=" text-center text-3xl font-bold text-blue-600">
          CENTRAL RESEARCH FACILITY
        </h1>
        <h2 className=" text-center">
          Providing central facility of advanced techniques for research in
          various areas of science and technology.
        </h2>
        <div className="flex gap-5 my-5 ">
          <div className="w-1/2 h-[400px]  relative">
            <Image src="/ar-1.jpg" alt="img" fill />
          </div>
          <div className="w-1/2 ">
            <p className=" text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              quas temporibus, consectetur ipsa, provident repudiandae voluptas
              quaerat minus, voluptatem fuga est pariatur tenetur similique
              accusamus dolore optio exercitationem veniam aliquam nemo? Aliquam
              inventore corrupti nesciunt harum cum repellendus, libero
              reprehenderit, quas repellat suscipit commodi voluptas?
            </p>
            <p className=" text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              quas temporibus, consectetur ipsa, provident repudiandae voluptas
              quaerat minus, voluptatem fuga est pariatur tenetur similique
              accusamus dolore optio exercitationem veniam aliquam nemo? Aliquam
              inventore corrupti nesciunt harum cum repellendus, libero
              reprehenderit, quas repellat suscipit commodi voluptas?
            </p>
          </div>
        </div>

        <section>
          <div className="w-full mx-auto  rounded-full py-10   border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dpurple my-4">
            <div className=" ">
              <Counter
                initialValue={0}
                targetValue={12}
                speed={0.001}
                text="DEPARTMENTS UNDER"
                textColor="text-blue-600"
                title="First Counter"
                color="bg-[#bd5638]"
                textsize="text-base"
              />
            </div>
            <div className=" ">
              <Counter
                initialValue={20}
                targetValue={20}
                speed={100}
                text="HIGHEND INSTRUMENTS"
                textColor="text-green-700"
                title="Second Counter"
                color="bg-[#5a3224]"
                textsize="text-base"
              />
            </div>
            <div className="">
              <Counter
                initialValue={5}
                targetValue={15}
                speed={200}
                text="OTHER INSTRUMENTS
              "
                textColor="text-red-600"
                title="Third Counter"
                color="bg-[#223250]"
                textsize="text-base"
              />
            </div>

            <div className="">
              <Counter
                initialValue={5}
                targetValue={30}
                speed={200}
                text="EXTERNAL BOOKINGS"
                textColor="text-red-600"
                title="Third Counter"
                color="bg-[#22472d]"
                textsize="text-base"
              />
            </div>
          </div>
        </section>

        <div className="w-full  flex gap-4 justify-between  p-2 items-center">
          <div className=" w-72 h-20  p-2 flex gap-3 rounded-lg bg-gray-100">
            <div className=" flex justify-center items-center">
              <FaLocationDot
                size={50}
                className=" text-blue-400 bg-white rounded-full  p-2 "
              />
            </div>
            <div className=" flex  flex-col">
              <h1 className="text-black text-lg font-semibold capitalize">
                Address
              </h1>
              <h2 className=" text-sm">
                NSHMC, Bhopal, Madhya Pradesh, India, 111111
              </h2>
            </div>
          </div>
          <div className=" w-64 h-20  p-2 flex gap-3 rounded-lg bg-gray-100">
            <div className=" flex justify-center items-center">
              <MdEmail
                size={50}
                className=" text-blue-400 bg-white rounded-full  p-2 "
              />
            </div>
            <div className=" flex  flex-col">
              <h1 className="text-black text-lg font-semibold capitalize">
                Email
              </h1>
              <h2 className=" text-sm">skclnct@gmailcom</h2>
            </div>
          </div>
          <div className=" w-64 h-20  p-2 flex gap-3 rounded-lg bg-gray-100">
            <div className=" flex justify-center items-center">
              <FaHeadphones
                size={50}
                className=" text-blue-400 bg-white rounded-full  p-2 "
              />
            </div>
            <div className=" flex  flex-col">
              <h1 className="text-black text-lg font-semibold capitalize">
                Phone Number
              </h1>
              <h2 className=" text-sm">(0661) 246 - 2020 / 2002</h2>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
