import Image from "next/image";
import React from "react";
export default function AbouttheInstitute() {
  return (
    <>
      <div className="  w-11/12 mx-auto mt-10 justify-around bg-gradient-to-r from-purple-700 to-purple-900">
        <div className="   ">
          <h1 className="text-4xl pt-10 pb-5 px-10 ">About the Institute</h1>
          <p className="  px-10 pb-4">
          Suresh Kumar Educational & Social Welfare Society, Bhopal., registered in 2008 (registration No. 01/01/01/19406/08 dated 23th Aug. 2008 Under M.P. Society Registration Act. 1973 by the registrar, firms and society M.P.) Established First Private Engineering College of Bhopal named LAKSHMI NARAIN COLLEGE OF TECHNOLOGY (LNCT) in the year 1994-95.
          Since 1999 Suresh Kumar Educational & Social Welfare Society, Bhopal. is running Homoeopathic Medical College & Hospital, named as NARAYAN SHREE HOMOEOPATHIC MEDICAL COLLEGE & HOSPITAL, CLINICAL & RESEARCH CENTRE. This institute does not receive any grant-in aid or any financial help from the Government of India or the state government. It is running exclusively on its own resources. The college is situated at Pushpa Nagar, Near Main Railway Station, Bhopal..
          </p>
          <p className="  px-10 pb-5 border-b  ">
          College is located at Bhopal, the capital of Madhya Pradesh. Bhopal is beautiful and historical city. There are number of historical places like Bhojpur (Mahadev Temple), Bhim Betka, Sanchi, Rani Kamlapati Mahal, Sadar Manzil and an ancient palace with Mughal Garden at Halalpura near Bhopal.
          </p>
          <div className="flex ">
            <div className=" p-10  flex items-start">
              {/* <Image
                src="/mission.png"
                alt="mission img"
                width={80}
                height={80}
              /> */}
              <div>
              <h1 className="text-2xl font-semibold text-center mb-2 ">
                MISSION
              </h1>
              <p className=" p-2 ">
              Our mission is to provide a holistic and integrative education in homeopathy, fostering a deep understanding of natural healing principles. We aim to cultivate compassionate and skilled homeopathic practitioners who are dedicated to improving the health and well-being of individuals and communities. Through rigorous academic training, clinical practice, and ongoing research, we strive to advance the field of homeopathy, emphasizing patient-centered care and the harmonious balance of mind, body, and spirit.
              </p>
              </div>
            </div>
            <div className=" p-10 flex items-start">
              {/* <Image
                src="/vision.png"
                alt="vision img"
                width={80}
                height={80}
              /> */}
             <div>
              <h1 className="text-2xl  font-semibold text-center mb-2">
                VISION
              </h1>
              <p className=" p-2   mb-4">
              Our vision is to be a globally recognized leader in homeopathic education, inspiring a new generation of practitioners to innovate and expand the scope of natural medicine. We envision a future where homeopathy is widely accepted and integrated into mainstream healthcare, offering safe, effective, and sustainable solutions for health challenges worldwide. Through our commitment to excellence in education, research, and practice, we seek to promote a healthier, more balanced society.
              </p>
              </div>
            </div>
          </div>
        </div>
          <h1 className="text-4xl  border-t p-4 px-10  ">Message from Director</h1>
        <div className=" flex justify-between items-center w-full">
          <div className=" flex justify-between pt-1 px-10">
            <div className="w-full">
            <p className=" p-2     ">
              To become an internationally acclaimed institution of higher
              learning that will serve as a source of knowledge and expertise
              for the society and be a preferred destination for undergraduate
              and graduate studiesTo become an internationally acclaimed
              institution of higher learning that will serve as a source of
              knowledge and expertise for the society and be .
              and graduate studiesTo become an internationally acclaimed
              institution of higher learning that will serve as a source of
              knowledge and expertise for the society and be .
              and graduate studiesTo become an internationally acclaimed
              institution of higher learning that will serve as a source of
              knowledge and expertise for the society and be .
              and graduate studiesTo become an internationally acclaimed
              institution of higher learning that will serve as a source of
              knowledge and expertise for the society and be .
            </p>
            </div>
            <div className="w-full  flex justify-around items-end ">
            <Image src="/founderr.png" alt="" height={230} width={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}