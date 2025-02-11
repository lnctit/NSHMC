"use client";
import React from "react";
import CampusMap from "../CampusMap/CampusMap";
import SliderMain from "../SliderMain/SliderMain";
import Counter from "@/app/components/Counter";

export default function Library() {
  const images = ["/lib.jpg"];
  return (
    <>
      {/* <SliderMain images={images} heading="gcfbdhsnjk" /> */}
      <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
          //   backgroundImage: "url('/logo1.png')",
          backgroundColor: "#d598d6",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Library</h1>
      </div>
      <div className="pt-4 pb-4">
        <CampusMap
          img4="/elibrary.jpg"
          heading4="E-library"
          paragraph4="The E-Library at NSHMC offers students and faculty access to a vast digital collection of homeopathic resources from anywhere, at any time. With a wide range of e-books, journals, research papers, and multimedia content, the E-Library enhances learning by providing easy access to the latest studies and publications in homeopathy and related medical sciences. This digital platform supports remote learning and research, allowing users to explore essential texts, case studies, and articles with just a few clicks. The E-Library is an invaluable tool for modern education, fostering convenient and comprehensive access to knowledge."
          img3="/readingroom.jpg"
          heading3="Reading Room "
          paragraph3="The reading rooms at NSHMC library provide a quiet and comfortable environment for students to focus on their studies and research. Equipped with individual study desks, ample lighting, and a peaceful ambiance, these rooms are designed to promote concentration and productivity. Whether preparing for exams, conducting research, or reviewing homeopathic texts, the reading rooms offer an ideal space for uninterrupted learning. With access to a wide range of academic resources and free Wi-Fi, students can engage deeply with their studies in a supportive and distraction-free setting."
          heading2="Library Books"
          paragraph2="The library at NSHMC houses an extensive collection of books dedicated to the study of homeopathy, offering students and faculty access to classic texts and modern research. From foundational works by Samuel Hahnemann and James Tyler Kent to contemporary studies on remedies, case analysis, and homeopathic philosophy, the library supports a comprehensive academic experience. The collection covers subjects like Materia Medica, Organon of Medicine, and Repertory, ensuring that learners can explore every aspect of homeopathic education. These resources are invaluable for deepening knowledge, advancing research, and enhancing clinical practice in homeopathy"
          img2="/librarybooks.jpg"
          heading1="Library"
          paragraph1="The Homeopathy Library at NSHMC serves as a valuable resource for students, faculty, and practitioners, offering a vast collection of books, journals, and research papers dedicated to the study of homeopathy and related medical sciences. The library houses classic works by pioneers like Samuel Hahnemann, James Tyler Kent, and Constantine Hering, alongside modern publications that explore the latest advancements in homeopathic medicine.In addition to an extensive range of materia medica, repertories, and clinical case studies, the library provides access to digital resources, research databases, and journals to support both academic study and research. With comfortable reading spaces and research-friendly environments, the Homeopathy Library is an essential hub for deepening knowledge and fostering a lifelong dedication to learning in the field of homeopathy."
          img1="/library.jpg"
        />
      </div>

      {/* <section className=" w-11/12 mx-auto mt-10">
        <div className=" w-8/9 rounded-t-md  sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1  justify-center items-center   dark:bg-dpurple   bg-blue-400">
          <div className="  ">
            <Counter
              initialValue={0}
              targetValue={2000}
              speed={0.001}
              text="Highest Package"
              textColor="text-blue-600"
              title="First Counter"
              color=""
            />
          </div>
          <div className=" ">
            <Counter
              initialValue={20}
              targetValue={100}
              speed={100}
              text="Dream Company Offers"
              textColor="text-green-700"
              title="Second Counter"
              color=""
            />
          </div>
          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Placements Batch 22-23"
              textColor=""
              title="Third Counter"
              color=""
            />
          </div>
          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="LNCTians Serving MNC"
              textColor="text-red-600"
              title="Third Counter"
              color=""
            />
          </div>
        </div>
        <div className=" rounded-b-md   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1  justify-center items-center   dark:bg-dpurple  mb-12 bg-blue-400">
          <div className=" ">
            <Counter
              initialValue={0}
              targetValue={2000}
              speed={0.001}
              text="NIRF All India Rank"
              textColor="text-blue-600"
              title="First Counter"
              color=""
            />
          </div>
          <div className=" ">
            <Counter
              initialValue={20}
              targetValue={100}
              speed={100}
              text="Companies Visited 2022"
              textColor="text-green-700"
              title="Second Counter"
              color=""
            />
          </div>
          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Offers For Core Branch"
              textColor="text-red-600"
              title="Third Counter"
              color=""
            />
          </div>
          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Ph.D Faculties"
              textColor="text-red-600"
              title="Third Counter"
              color=""
            />
          </div>
        </div>
      </section> */}
    </>
  );
}
