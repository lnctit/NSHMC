"use client";
import React from "react";
import { useState } from "react";

export default function HPC() {
  const [collegeNameIndex, setCollegeNameIndex] = useState(0);

  const collegeNames = ["NSHMC ", "एसकेसी एलएनसीटी "];
  return (
    <div>
   
     
        <h2 className="font-bold text-4xl uppercase  text-white text-center">
          HIGH PERFORMANCE COMPUTING
        </h2>
    
      <div className="grid grid-cols-2 m-auto gap-[100px] w-[100%] ">
      <img src="https://baksonhmc.com/wp-content/uploads/2022/09/ANNEXURE-9-NABH-Certificate_Page_1-1039x1536.jpg" className="w-[100%] ml-[40px]"></img>
        <div className=" mt-20 h-[350px] w-[270px]">
          <ul className="border border-gray-400 p-[15px] ">
            <h5 className=" text-[20px] mb-3">RELATED LINKS</h5>
            <li className=" py-[10px] text-red-800 text-[12px] ">
              {" "}
              <a href="" className="text-[15px]">About</a>
            </li>{" "}
            <hr />
            <li className=" py-[10px] text-[15px] hover:text-red-800 ">
              <a href="">Account and Log-in</a>
            </li>{" "}
            <hr />
            <li className=" py-[10px] text-[15px] hover:text-red-800 ">
              {" "}
              <a href="">Job Scripts</a>
            </li>{" "}
            <hr />
            <li className=" py-[10px] text-[15px] hover:text-red-800 ">
              <a href="">FAQs</a>{" "}
            </li>{" "}
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
}
