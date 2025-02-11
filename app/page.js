"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Counter from "@/app/components/Counter";
import Card from "@/app/components/Card";
import Seminar from "@/app/components/Seminar.jsx";
import Notices from "@/app/components/News-Notices";
import AbouttheInstitute from "@/app/components/AbouttheInstitute/AbouttheInstitute";
import NumberOne from "@/app/components/NumberOne/NumberOne";
import { ParallaxScroll } from "@/app/components/ParallaxScroll/ParallaxScroll";

export default function Home() {
  const [activeTab, setActiveTab] = useState("postgraduate");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Set default active tab to 'postgraduate'

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  // Function to toggle submenu

  const images = ["/building.jpg"];

  const EventData = [
    {
      title: "Event 1",
      startDate: "2024-04-10",
      type: "event",
      uuid: "event1_uuid",
    },
    {
      title: "Event 2",
      startDate: "2024-04-15",
      type: "event",
      uuid: "event2_uuid",
    },
    {
      title: "Event 3",
      startDate: "2024-04-20",
      type: "event",
      uuid: "event3_uuid",
    },
    // Add more events as needed
  ];

  const carouselData = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      imageUrl: "/yt.png",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      imageUrl: "/yt.png",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      imageUrl: "/yt.png",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      imageUrl: "/yt.png",
    },
    // Add more news items as needed
  ];

  const additionalCarouselData = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      imageUrl: "/ar-1.jpg",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      imageUrl: "/ar-3.jpg",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      imageUrl: "/yt.png",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      imageUrl: "/ar-2.jpg",
    },
  ];

  const EventsData = [
    {
      title: "Event 1",
      startDate: "2024-04-10",
      type: "event",
      uuid: "event1_uuid",
    },
    {
      title: "Event 2",
      startDate: "2024-04-15",
      type: "event",
      uuid: "event2_uuid",
    },
    {
      title: "Event 3",
      startDate: "2024-04-20",
      type: "event",
      uuid: "event3_uuid",
    },
    {
      title: "Event 1",
      startDate: "2024-04-10",
      type: "event",
      uuid: "event1_uuid",
    },
    {
      title: "Event 2",
      startDate: "2024-04-15",
      type: "event",
      uuid: "event2_uuid",
    },
    {
      title: "Event 3",
      startDate: "2024-04-20",
      type: "event",
      uuid: "event3_uuid",
    },
    // Add more events as needed
  ];

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

  const ScarouselData = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      imageUrl: "/yt.png",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      imageUrl: "/yt.png",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      imageUrl: "/yt.png",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      imageUrl: "/yt.png",
    },
    // Add more news items as needed
  ];
  const additionalCarouselDataseminar = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      imageUrl: "/yt.png",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      imageUrl: "/yt.png",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      imageUrl: "/yt.png",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      imageUrl: "/yt.png",
    },

    // Add more news items as needed
  ];

  return (
    <div className=" text-white">
      <div className="md:w-full lg:w-full sm:w-full w-full">
        <Image
          className="duration-500 w-full min-h-[500px] max-h-[500px]"
          src={images[currentSlide]}
          alt="Hero Image"
          width={700}
          height={650}
        />
      </div>

      <NumberOne
        img="/number-1.png"
        title="WHY NSHMC"
        content="NSHMC is a premier institute in the field of homoeopathic education. It endeavors to simplify the science of homoeopathy through a uniquely designed and highly effective syllabus. Our learning processes inculcate the qualities of observation, analysis, integrity and compassion in our doctors which allows personal as well as academic evolution.
        Our vision is to provide high class academic and clinical education to those who seek to practice homoeopathy professionally."
      />
      <section className="  w-11/12 mx-auto">
        <Notices
          eventData={EventData}
          carouselData={carouselData}
          additionalCarouselData={additionalCarouselData}
        />
      </section>
      <section className="mt-10 w-11/12 mx-auto mb-10">
        <Seminar
          eventData={EventsData}
          carouselData={ScarouselData}
          additionalCarouselData={  additionalCarouselDataseminar}
        />
      </section>
      
       <section
        className="academic-programe   mx-auto mt-10 flex justify-center     "
        style={{
          background: "url('/LNMC-BPL.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="container  flex flex-col lg:flex-row items-center  bg-opacity-75 bg-purple-900 h-[580px]  ">
          <nav className="nav flex-col lg:w-1/4 p-4">
            <h2 className="text-3xl w-80 text-white  text-center font-semibold mb-6">
              Academic Programme
            </h2>
            <ul className="space-y-2 bg-white rounded-xl p-4">
              <li className="text-center font-bold text-2xl rounded-lg text-black bg-purple-400">
                <button
                  onClick={() => handleTabClick("undergraduate")}
                  className={` p-4 nav-link ${
                    activeTab === "undergraduate" ? "active" : ""
                  }`}
                  role="tab"
                >
                  UNDERGRADUATE
                </button>
              </li>
             
            </ul>
          </nav>
          <div className="tab-content lg:w-3/4 p-4 ">

              <article
                className="tab-pane fade text-black"
                id="category_tab1"
                role="tabpanel"
              >
                <h2 className="text-white font-bold text-3xl ">
                  BHMS
                </h2>

                <p className="text-white  text-justify">
                 The full form of BHMS is Bachelor of Homeopathic Medicine and Surgery. BHMS is an academic undergraduate degree course that covers homoeopathic system medical knowledge. The curriculum has a period of five and a half years which involves four and half years of research followed by one year of internship. In the homoeopathic system, the undergraduate curriculum can also be pursued through the distance educational process. A graduate is qualified to become a doctor in the homoeopathic field of medicine after completing a BHMS degree.
                 Graduates of BHMS can find employment conveniently in government and private hospitals, insurance companies, pharmaceutical companies, NGOs, research laboratories, etc. Homoeopathic consultants, homoeopathic doctors, research associates, insurance officers, quality control officers, junior lecturers, and pharmacists are some standard job profiles for BHMS graduates. 
                 BHMS course enables candidates to select any specialization such as Paediatrics, Homoeopathic Pharmacy, Psychology, Infertility and Skin Specialist to treat patients with access to their knowledge of homoeopathic research.
                </p>
              </article>
    
         
        
  
          </div>
        </div>
      </section> 

      <AbouttheInstitute />

      <section class=" flex  h-[300px] w-11/12 mx-auto mt-10  ">
        <div class="items flex-1 w-full bg-cyan-900 text-white p-6 pt-14 text-center  ">
          <h2 className="font-semibold text-2xl">Thought of the Day</h2>
          <h5 className="font-semibold text-xl py-5 text-justify">
            Sometimes the biggest strength can be found in how you understand
            and confront your greatest weaknesses.
          </h5>
          <h5 className="font-semibold text-2xl">
            <i>--Michael Springer--</i>
          </h5>
        </div>
        <div class="item flex-1 w-full bg-purple-900 p-6 pt-14  items-center text-center ">
          <h2 className="font-semibold text-2xl">Word of the Day</h2>
          <h5 className="font-semibold text-xl py-5">कार्यात्मक</h5>
          <h5 className="font-semibold text-2xl">FUNCTIONAL</h5>
        </div>
      </section>
      <div className=" w-11/12 mx-auto">
        <ParallaxScroll images={imagess} />
      </div>
      <section className=" w-11/12 mx-auto mt-10">
        <div
          className=""
          style={{
            backgroundImage: "url('/endless.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* <div className=" w-8/9   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1  justify-center items-center   dark:bg-dpurple  ">
            <div className="  ">
              <Counter
                initialValue={0}
                targetValue={2000}
                speed={0.001}
                text="Highest Package"
                textColor="text-purple-600"
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
          <div className=" rounded-b-md   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1  justify-center items-center   dark:bg-dpurple  mb-12">
            <div className=" ">
              <Counter
                initialValue={0}
                targetValue={2000}
                speed={0.001}
                text="NIRF All India Rank"
                textColor="text-purple-600"
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
                text="Ph.D Faculties 2024"
                textColor="text-red-600"
                title="Third Counter"
                color=""
              />
            </div>
          </div> */}
        </div>
      </section>
      <section className="w-11/12 mx-auto">
        <div className=" bg-purple-100">
          <div
            //
            className="flex "
            style={{
              // backgroundImage: "url('/zig-zag.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="md:w-full lg:w-1/2 sm:w-full    ">
              {/* <h3 className="font-bold text-3xl p-5 ">
                Ranking and Recognition &nbsp; &nbsp;&nbsp;
                <Link href="/ranking" className="text-sm">
                  View All...
                </Link>
              </h3> */}
              {/* <Image
                className="duration-200 min-h-[480px] max-h-[400px] rounded-lg pt-6 flex mx-auto items-center"
                src={images[currentSlide]}
                alt="Hero Image"
                width={700}
                height={650}
              /> */}
            </div>
            {/* <div className="md:w-full lg:w-1/2 sm:w-full  flex flex-col justify-center  ">
              {/* <div className="w-ful rounded-md  sm:p-4  md:p-4 lg:p-5 p-8 shadow-none  border-black grid md:grid-cols-1 lg:grid-cols-2   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dpurple">
                {/* <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3  flex-wrap  ">
                  {/* <Card
                    title="Department"
                    content="10"
                    imageUrl="/department.png"
                  /> */}
                {/* </div>  */}
                {/* <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 flex-wrap ">
                  {/* <Card title="Faculty" content=" 70+" imageUrl="/staff.png" /> */}
                {/* </div> */} 
                {/* <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 flex-wrap ">
                  <Card
                    title="Faculty"
                    content="3050+"
                    imageUrl="/student-icon.png"
                  />
                </div> */}
                {/* <div className="  flex-col justify-center items-center inline-flex sm:w-full md:w-1/3  flex-wrap">
                  <Card title="Faculty" content="100" imageUrl="/faculty.png" />
                </div> */}
              {/* </div>  */}
            {/* </div> */} 
          </div>
        </div>
      </section>
    </div>
  );
}
