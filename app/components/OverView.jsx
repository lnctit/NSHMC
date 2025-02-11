"use client"
import CampusMap from "@/app/components/CampusMap/CampusMap";
import Gallary from "@/app/components/Gallary/Gallary";
import { ParallaxScroll } from "@/app/components/ParallaxScroll/ParallaxScroll";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function OverView() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 1300); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  const imagess = [
    "/gallery1.jpeg",
    "/gallery2.JPG",
    "/gallery3.jpeg",
    "/gallery4.jpg",
    "/gallery5.JPG",
    "/feildvisit6.jpg",
    "/gallery6.jpg",
    "/feildvisit7.jpeg",
    "/gallery7.jpg",
    '/Graduationceremony.jpeg',
    "/gallery8.jpeg",
    "/gallery9.jpg",
    "/feildvisit11.jpg",
    "/feildvisit10.jpg",
    "/feildvisit3.jpeg",
    "/healthCamp.jpg",
    "/feildvisit4.jpg",
    "/feildvisit2.jpg",
    "/feildvisit1.jpeg",
    "/feildvisit5.jpeg",
    "/elibrary.jpg",
    "/gallery12.jpg",
    "/gallery11.jpg",
    "/gallery10.jpg",
  ];
  return (
    <>
    
      <div className="w-full flex h-[650px]  ">
        <div className="w-[850px] h-full flex flex-col justify-center items-center p-4 ">
          <Image src="/LNMC-BPL.png" width={150}
          height={150} />
          <h1 className="text-4xl font-semibold flex items-center text-purple-600 ">
           Overview of NSHMC Bhopal
          </h1>
          <p className="text-black text-justify bg-purple-200 p-10 pt-2">
            {" "}
            At NSHMC, our academic programs offer a comprehensive education in homeopathy, combining rigorous scientific training with holistic principles. 
            The curriculum covers essential subjects such as Anatomy, Physiology, Pathology, and Biochemistry, alongside specialized homeopathic courses like materia medica and repertory. 
            Students benefit from hands-on training through clinical rotations, laboratory work, and case studies, ensuring practical application of their knowledge. 
            Our programs also emphasize research, professional development, and community engagement, preparing students to innovate in the field, navigate professional challenges, and serve diverse populations with compassion. 
            By integrating theory with practice, we aim to cultivate skilled, empathetic practitioners ready to advance the field of homeopathy and enhance patient care.
          </p>
        </div>
        <div className="w-full   overflow-hidden ">
          {" "}
          <div className="md:w-full lg:w-full sm:w-full w-full flex justify-center items-center ">
       
        <Image
          className="duration-500 w-full mt-2 min-h-[330px] max-h-[730px]"
          src='/building.jpg'
          alt={"images"}
          width={700}
          height={650}
          z
        />
      </div>
        </div>
      </div>
     
      <div className=" w-11/12 mx-auto mt-10 mb-6">
        <ParallaxScroll images={imagess} />
      </div>
    </>
  );
}
