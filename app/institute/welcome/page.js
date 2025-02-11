import React from "react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Monument from "@/app/components/Monument/Monument";

export default function page() {
  return (
    <>
      <div
        className="w-full border-2 h-36 flex justify-center  items-center"
        style={{
          // backgroundImage: "url('/building.jpg')",
          backgroundColor: "#d598d6",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">welcome to NSHMC</h1>
      </div>
      <div
        className="w-full h-screen  "
        style={{ height: "calc(100vh - 60px)" }}
      >
        <div className="w-full flex px-5 py-5  gap-5">
          <div className="w-2/3 ">
            <div className="p-10">
              <h2 className=" tracking-[10px] text-lg text-purple-700">
                WELCOME TO
              </h2>
              <h1 className="my-6 text-4xl  font-bold">NSHMC Bhopal</h1>

              <p className=" mt-2 font-extralight text-sm  text-justify">
                We are delighted to have you visit our website, where you can
                explore our world of holistic healing and transformative
                learning. At NSHMC, we are dedicated to providing an exceptional
                education in homeopathy, blending time-tested natural healing
                methods with modern medical insights. Whether you are a
                prospective student, a healthcare professional, or simply
                someone interested in the world of homeopathy, we are here to
                guide and support your journey. Take a moment to explore our
                programs, faculty, and community resources. We look forward to
                being a part of your journey toward a rewarding and meaningful
                career in homeopathy. Welcome to a future where natural healing
                meets innovation!
              </p>

              <p className=" mt-2 font-extralight text-sm text-justify">
                We believe in the power of homeopathy to bring about profound
                healing and balance in people&apos;s lives. Our curriculum is
                designed not only to teach the principles of homeopathy but also
                to nurture a deep sense of compassion, empathy, and
                professionalism in our students. With a focus on both academic
                excellence and hands-on clinical experience, we ensure that our
                graduates are well-equipped to make a positive impact on the
                health and well-being of individuals and communities worldwide.
                As you explore our website, you will find a wealth of
                information about our courses, faculty, campus, and the vibrant
                community that makes NSHMC unique. We invite you to learn more
                about how homeopathy can transform lives, and how you can be
                part of this dynamic and growing field. Thank you for
                considering NSHMC as your educational partner in your journey to
                becoming a skilled and compassionate homeopathic practitioner.
              </p>
            </div>
          </div>
          <div className="w-1/3  p-4">
            <div className="relative h-full">
              <Image
                src="/building.jpg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full mx-auto  px-20">
        <Monument />
      </div> */}
    </>
  );
}
