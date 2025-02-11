import React from 'react'
import SliderMain from "../SliderMain/SliderMain";
import RelatedLink from "../RelatedLink/RelatedLink";
import RuleCard from "../RuleCard/RuleCard";
import Link from "next/link";

export default function Recognition(images) {
  return (
    <>
      <SliderMain images={images} heading="OPD REPORTS" />
      <div className="w-full mx-auto flex relative mt-2  font-semibold text-lg">
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
      </div>
     
    </>
  )
}
