"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navlink from "./Navlink";

import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const [collegeNameIndex, setCollegeNameIndex] = useState(0);
  const menuId = usePathname();

  const collegeNames = [
    "Narayan Shree Homoeopathic Medical College & Hospital, Bhopal",
    "नारायण श्री होम्योपैथिक मेडिकल कॉलेज और अस्पताल, भोपाल",
  ];

  const navItems = [
    {
      main: "Institute",
      child: [
        {
          name: "Institute",
          subchild: [
            {
              name: "Welcome to NSHMC",
              link: "/institute/welcome",
            },
            {
              name: "Vision and Mission",
              link: "/institute/mission_vision",
            },
            // {
            //   name: "Former Directors",
            //   link: "/institute/former_directors",
            // },
            // {
            //   name: "Campus and Facilities",
            //   link: "/institute/campus_facilities",
            // },
            
          ],
        },
        {
          name: "Administration",
          subchild: [
            {
              name: "Board of Governors",
              link: "/institute/bog",
            },
            // {
            //   name: "The Senate",
            //   link: "/institute/senate",
            // },
            
            {
              name: "Chairperson",
              link: "/institute/chairperson",
            },
            {
              name: "Director",
              link: "/institute/director",
            },
            {
              name: "Principal's Detail",
              link: "https://drive.google.com/file/d/14lqVK-0HMpo6JglFDbMpVoL9eYFCUqal/view?usp=sharing",
            },
            {
              name: "Principal's Message",
              link: "/principal",
            },

            {
              name: "Nodal Officer",
              link: "https://drive.google.com/file/d/1FbUXYi4G8cWKoSWHl5asLU3jTfr4kVXL/view?usp=sharing",
            },
            // {
            //   name: "Building and Work Committee",
            //   link: "/institute/bwc",
            // },
          ],
        },
        {
          name: "Key Documents",
          subchild: [
            {
              name: "Society ByLaws",
              link: "/academic/societybylaws",
            },
            
            {
              name: "Society Registration",
              link: "/society-registration",
            },
            {
              name: "Hospital Certificates",
              link: "/academic/hospitalcertificate",
            },
            {
              name: "College Certificates",
              link: "/academic/collegecertificate",
            },
            // {
            //   name: "Rules and Regulations",
            //   link: "/students/rules_regulations",
            // },
            // {
            //   name: "Annual Reports",
            //   link: "/institute/annual_reports",
            // },
            // {
            //   name: "Approval Documents",
            //   link: "/approval-document",
            // },
          ],
        },
        {
          name: "Other Important Links",
          subchild: [
            {
              name: "AYUSH Department, Govt. of M.P. ",
              link: "https://ayush.mp.gov.in/index.php/en/ ",
            },
            {
              name: "Affiliating University M.P. Medical Science University Jabalpur (M.P.) ",
              link: " https://mpmsu.edu.in/",
            },
            {
              name: "National Commission for Homoeopathy (NCH) ",
              link: "https://nch.org.in/",
            },
            {
              name: "Ministry of AYUSH ",
              link: "https://ayush.gov.in/",
            },
            // {
            //   name: "AICTC Regulations",
            //   link: "https://forms-peach.vercel.app/",
            // },
          ],
        },
      ],
    },
    {
      main: "Academics & Committee",
      child: [
        {
          name: "Academic",
          subchild: [
            
            {
              name: "Academic Overview",
              link: "/academic/overview",
            },
            {
              name: "Administration And Libaray Staff",
              link: "/academic/programs",
            },
            {
              name: "Teaching Staff",
              link: "https://drive.google.com/file/d/1R7ZzHQATflfqJxp56NTxLgWU0ZgdMjMy/view?usp=sharing",
            },
            {
              name: "Our Committes",
              link: "/academic/ourcommitte",
            },
            {
              name: "CME Program",
              link: "/academic/cme",
            },
            // {
            //   name: "Academic Calendar",
            //   link: "/academic/calender",
            // },
            // {
            //   name: "Curriculum and Syllabus",
            //   link: "/academic/syllabus",
            // },
          ],
        },
        {
          name: "Departments",
          subchild: [
            {
              name: "Organon of Medicine",
              link: "/department/me",
            },
            {
              name: "Materia Medica & Therapeutics",
              link: "/department/cse",
            },
            {
              name: "Forensic Medicine & Toxicology",
              link: "/department/ece",
            },
            {
              name: "Community Medicine",
              link: "/department/eet",
            },
            {
              name: "Physiology & BioChemistry",
              link: "/department/it",
            },
            {
              name: "Obstretics & Gynecology",
              link: "/department/og",
            },
          ],
        },
        {
          name: "",
          subchild: [
            {
              name: "Pathology & Microbiology",
              link: "/department/pm",
            },
            {
              name: "Practice of Medicine",
              link: "/department/pfm",
            },
            {
              name: " Department of Repertory",
              link: "/department/rep",
            },
            {
              name: "Department of Pharmacy",
              link: "/department/pharm",
            },
            {
              name: " Department of Anatomy",
              link: "/department/anotomy",
            },
            {
              name: " Department of Surgery",
              link: "/department/surgery",
            },
          ],
        },
        // {
        //   name: "Facilities",
        //   subchild: [
           
        //     // {
        //     //   name: "High Performance Computing",
        //     //   link: "/academic/hfc",
        //     // },
        //   ],
        // },
        // {
        //   name: "Technical Service Units",
        //   subchild: [
        //     {
        //       name: "Health Care",
        //       link: "/health-center",
        //     },
        //     {
        //       name: "Lawn and Garden",
        //       link: "/academic/lawn",
        //     },
        //   ],
        // },
      ],
    },

    {
      main: "Students",
      child: [
        {
          name: "Prospective Students",
          subchild: [
            {
              name: "WhyNSHMC",
              link: "/why_skclnct",
            },
            {
              name: "Gallery",
              link: "/gallery",
            },
            {
              name: "Field Visit",
              link: "/academic/fieldvisit",
            },
            {
              name: "Homeo Shree Magazine",
              link: "/students/rules_regulations",
            },
            // {
            //   name: "Campus Life",
            //   link: "/student/campuslife",
            // },
            // {
            //   name: "Academic Programs",
            //   link: "/academic/programs",
            // },
            {
              name: "Admission Process",
              link: "https://drive.google.com/file/d/19kBai4yzQihJiN5ccZEDINtYCIQexX5x/view?usp=sharing",
            },
          ],
        },
        // {
        //   name: "Existing Students",
        //   subchild: [
        //     // {
        //     //   name: "Rules and Regulations",
        //     //   link: "/students/rules_regulations",
        //     // },
            
        //     {
        //       name: "Time Table",
        //       link: "/institute/former_directors",
        //     },
        //    
        //   ],
        // },
        {
          name: "Student Related Links",
          subchild: [
            // {
            //   name: "Internship Programs",
            //   link: "/placementcalender",
            // },
            {
              name: "Academic Calendar",
              // link: "/academic/calender",
              link: "https://drive.google.com/file/d/1WUFi4T2_bnKYMcXi9NY0dlQkBEC-2ERn/view?usp=sharing",
            },
            
            {
              name: "Admitted Students",
              link: "/institute/admittedstudent",
            },
            {
              name: "Results",
              link: "/institute/report",
            },
            {
              name: "Merit List ",
              link: "/institute/merit",
            },
            {
                    name: "Online Fee Payment",
                    link: "/academic/onlinefee",
                  },
            // {
            //   name: "Career Development Cell",
            //   link: "/cdc",
            // },
          ],
        },
      ],
    },
    // {
    //   main: "Placement",
    //   child: [
    //     {
    //       name: "Overview",
    //       subchild: [
    //         {
    //           name: "Placement Overview",
    //           link: "/placementview",
    //         },
    //         {
    //           name: "Career Development Cell",
    //           link: "/cdc",
    //         },
    //         {
    //           name: "Leading Recruiters",
    //           link: "/leading_recruiters",
    //         },
    //         {
    //           name: "Regular Activities",
    //           link: "/regular_activite",
    //         },
    //         {
    //           name: "Placement Calendar and Process",
    //           link: "/placementcalender",
    //         },
    //       ],
    //     },
    //     {
    //       name: "For Students",
    //       subchild: [
    //         {
    //           name: "Student Testimonial",
    //           link: "student_testimonial",
    //         },
    //         {
    //           name: "Career",
    //           link: "/career/?college=LNCT",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   main: "Alumni",
    //   child: [
    //     {
    //       name: "Alumni",
    //       subchild: [
    //         {
    //           name: "Register Alumni",
    //           link: "/alumni-form",
    //         },
    //         {
    //           name: "About Alumni Cell",
    //           link: "/alumni",
    //         },
    //         {
    //           name: "Eminent",
    //           link: "/eminent",
    //         },
    //         {
    //           name: "Director's Message to Alumni",
    //           link: "/institute/contact",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   main: "Resources",
    //   child: [
    //     {
    //       name: "Resources",
    //       subchild: [
    //         {
    //           name: "Central Research Facility",
    //           link: "/crf",
    //         },
    //         {
    //           name: "Centre for Technology Innovation and Industry Relations",
    //           link: "/relations",
    //         },
    //         {
    //           name: "High Performance Computing",
    //           link: "/highpc",
    //         },
    //         {
    //           name: "Industrial Consultancy",
    //           link: "/ic",
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      main: "Hospital ",
      child: [
        {
          name: "Clinical Material",
          subchild: [
            {
              name: "Hospital Staff",
              // link: "/academic/hospitalstaff",
              link:"https://drive.google.com/file/d/1euHUm8IVlmZzmLezYBfXtoZKScNVS7K_/view?usp=sharing",
            },
            {
              name: "OPD Reports",
              link: "/academic/opd",
            },
            {
              name: "IPD Reports",
              link: "/academic/ipd",
            },
            {
              name: "Clinical Pathology Reports",
              link: "/academic/clinicalpathologyreport",
            },
            {
              name: "Xray Reports",
              link: "/academic/xray",
            },
            {
              name: "Other Records",
              link: "/academic/clinicalpathology",
            },
            // {
            //   name: "War Against Covid",
            //   link: "/institute/covid",
            // },
            // {
            //   name: "Rural OPDs Reports",
            //   link: "/institute/rural-opd",
            // },
          ],
        },
      ],
    },
    {
      main: "Campus And Facilities",
      child: [
        {
          name: "facilities",
          subchild: [
            {
              name: "Canteen",
              link: "/academic/central-workshop",
            },
            {
              name: "Library",
              link: "/institute/library",
            },
            {
              name: "Hospital",
              link: "/academic/hospital",
            },
            {
              name: "Hostel",
              link: "/academic/hostel",
            },
            {
              name: "Playground",
              link: "/academic/playground",
            },
            
            // {
            //   name: "NABH Certification",
            //   link: "/institute/covid",
            // },
            // {
            //   name: "LETTER OF PERMISSION BY NCH UG & PG COURSES",
            //   link: "/institute/covid",
            // },
            // {
            //   name: "NOC By State Goverment",
            //   link: "https://drive.google.com/file/d/1L4qlUbdi5fLqt7GmE8WdkLV1-sVHPVqV/view?usp=sharing",
            // },
            // {
            //   name: "Rural OPDs Reports",
            //   link: "/institute/covid",
            // },
          ],
        },
      ],
    },
    {
      main: "Contact Us",
      child: [
        {
          name: "",
          subchild: [
            {
              name: "Contact Us",
              link: "/institute/contact",
            },
            
            // {
            //   name: "NABH Certification",
            //   link: "/institute/covid",
            // },
            // {
            //   name: "LETTER OF PERMISSION BY NCH UG & PG COURSES",
            //   link: "/institute/covid",
            // },
            // {
            //   name: "NOC By State Goverment",
            //   link: "https://drive.google.com/file/d/1L4qlUbdi5fLqt7GmE8WdkLV1-sVHPVqV/view?usp=sharing",
            // },
            // {
            //   name: "Rural OPDs Reports",
            //   link: "/institute/covid",
            // },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    setOpenSubMenuId(null);
  }, [menuId]);

  // Function to toggle submenu
  const toggleSubMenu = (submenuId) => {
    setOpenSubMenuId(openSubMenuId === submenuId ? null : submenuId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCollegeNameIndex((prevIndex) =>
        prevIndex === collegeNames.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const path = usePathname();

  return (
    <>
      {path.includes("admin") || path.includes("payments") ? (
        <></>
      ) : (
        <div className="text-white z-50">
          <div className="flex items-center justify-between p-2 bg-purple-900">
            <div className="flex items-center gap-4">
              <p>Admissions</p>
              {/* <p>Placement</p> */}
              <p>Careers</p>
            </div>

            <div className="flex items-center gap-4">
              <img src="/twitter.png" className="w-8 h-8 rounded-full" />
              <img src="/yt.png" className="w-8 h-8 rounded-full" />
              {/* <img src="/insta.png" className="w-8 h-8 rounded-full" /> */}
            </div>

            <div className="flex gap-2">
              <Link
                className="text-xs px-4 py-2 leading-none rounded-full hover:bg-green-300 hover:text-black border-2"
                href="/loginPage"
              >
                STAFF LOGIN
              </Link>
              <Link
                className="text-xs px-4 py-2 leading-none rounded-full hover:bg-green-300 hover:text-black border-2"
                href="http://1.22.218.13/AccSoft2/Login.aspx"
                target="_blank"
              >
                LOGIN
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-900 z-50">
            <div className="w-[100%] mx-auto flex items-center justify-around px-4 py-2">
              <div className="flex items-center gap-[12px]">
                <div className="">
                  <Image
                    src="/logonshmc.jpg"
                    objectFit="contain"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <h1 className="text-2xl font-semibold">
                  {collegeNames[collegeNameIndex]}
                </h1>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-2 rounded-full border border-white focus:outline-none focus:border-gray-300"
                />
              </div>
              <Image
                src="/skcgroup.png"
                width={180}
                height={180}
                objectFit="contain"
                alt="Logo"
              />
            </div>
          </div>

          <div className="w-full bg-purple-900 z-50">
            <div className="flex flex-wrap w-full mx-auto gap-4 justify-center bg-purple-900 relative items-center">
              <Link href="/" className="text-3xl p-1">
                <FaHome className="hover:scale-105 duration-500 hover:text-gray-400 cursor-pointer" />
              </Link>
              {navItems.map((item, index) => {
                let dropdownWidth;
                let dropdownLeft;
                switch (item.main) {
                  case "Institute":
                    dropdownWidth = "w-[950px]";
                    dropdownLeft = "left-[-79px]";
                    break;
                  case "Academics & Committee":
                    dropdownWidth = "w-[900px]";
                    dropdownLeft = "left-[-460px]";
                    break;
                  case "Students":
                    dropdownWidth = "w-[480px]";
                    dropdownLeft = "left-20";
                    break;
                  // case "Placement":
                  //   dropdownWidth = "w-[590px]";
                  //   dropdownLeft = "left-30";
                  //   break;
                  // case "Alumni":
                  //   dropdownWidth = "w-60";
                  //   dropdownLeft = "left-40";
                  //   break;
                  case "Resources":
                    dropdownWidth = "w-[300px]";
                    dropdownLeft = "left-50";
                    break;
                  default:
                    dropdownWidth = "w-64";
                    dropdownLeft = "left-[-50px]";
                }

                return (
                  <div key={index} className="relative group z-50">
                    <Link
                      href="#"
                      className={`text-white font-semibold text-lg hover:text-gray-300 hover:bg-purple-700 flex gap-2 items-center px-3 py-4 ${
                        openSubMenuId === item.main ? "bg-purple-800" : ""
                      }`}
                      onClick={() => toggleSubMenu(item.main)}
                    >
                      {item.main}
                      <FaChevronDown size={15} />
                    </Link>

                    <div
                      className={`absolute top-full mt-2 p-3 bg-white shadow-lg rounded flex ${dropdownWidth} ${
                        openSubMenuId === item.main ? "" : "hidden"
                      }`}
                      style={{ left: dropdownLeft }}
                    >
                      {item.child.map((link, index) => (
                        <div key={index} className="p-2">
                          <h4 className="text-purple-700 font-bold text-lg">
                            <Link href="#">{link.name}</Link>
                          </h4>
                          <ul className="mt-2 space-y-2">
                            {link.subchild.map((navlink, index) => (
                              <li key={index}>
                                <Navlink
                                  name={navlink.name}
                                  link={navlink.link}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
