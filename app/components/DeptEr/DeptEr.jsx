"use client";
import React, { useState, useEffect } from "react";
import SliderMain from "../SliderMain/SliderMain";
import Image from "next/image";
import Counter from "@/app/components/Counter";
import DeptCounter from "../DeptCounter/DeptCounter";
import ProgramCard from "../ProgramCard/ProgramCard";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Slider from "../Slider/Slider";
import { head } from "lodash";
import Curriculumn from "../Curriculumn/Curriculumn";


export default function DeptEr({ dept, deps }) {
  // const [cardData, setCardData] = useState({
  //   deptImg: "",
  //   mission: "",
  //   vision: "",
  // });

  const images = ["/ar-3.jpg"];
  const counter = [
    {
      title: "undergraduate students",
      value: "120",
      textColor: "text-red-600",
      color: "bg-red-500",
      speed: "40",
    },
    {
      title: "postgraduate students",
      value: "60",
      textColor: "text-red-600",
      color: "bg-purple-500",
      speed: "35",
    },
    {
      title: "doctoral students",
      value: "30",
      textColor: "text-red-600",
      color: "bg-pink-500",
      speed: "30",
    },
    {
      title: "recent job offers",
      value: "300",
      textColor: "text-red-600",
      color: "bg-yellow-500",
      speed: "30",
    },
    {
      title: "faculties",
      value: "60",
      textColor: "text-red-600",
      color: "bg-teal-500",
      speed: "30",
    },
  ];

  let headD;
  let headImg;
  let phoneHead;
  let emailHead;
  let faculties;
  let aboutDept;
  let deptImg;
  let slogan;
  let author;
  let experience;
  let degree;
  let dob;
  let doj;
  let address;
  switch (dept) {
    case "me":
      slogan = "Empowering Healers with the Timeless Principles of Homeopathy.";
      author = "Dr.Sandeep Jha";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Organon of Medicine is a department in homoeopathic institutions that teaches students about the principles of homoeopathic treatment and make Students learn about the principles of homoeopathic treatment and how to apply them in practice Written by Samuel Hahnemann, the founder of homeopathy, The Organon of Medicine is the cornerstone of homeopathic principles and practice, and used by homeopathy students and practitioners all over for treatment of sick individuals.";
      dept = "Organon of Medicine";
      headD = "Dr.Sandeep Jha";

      headImg = "/sandeepjha.jpg";
      phoneHead = "+91 9303132274";
      emailHead = "drsandeepjha@hotmail.com";
      dob = "DOB-18/05/1966";
      doj = "DOJ-04/09/1999";
      address = "71, Jha Sadan, Ansal Pradhan Enclave, E-8, Arera Colony, Bhopal";
      degree = "DHMS, BHMS, M.D. (Hom)/ 10020"
      experience = '33 years & 8 months/ F.T.';
      faculties = [
        {
          name: "Dr. Anupama Jaiswal",
          position: "Associate Professor",
          degree: "BHMS, M.D. (Hom.)/ 15865",
          experience: "9 years & 7 months/ F.T.",
          email: 'dr.praveenjaisal@gmail.com',
          image: "/anupamajaiswal.jpg",
          DOB: "31/07/1977",
          DOJ: "02/03/2021",
          address: "H.No. H-7, Vardhman Green Park Ashoka Garden, Bhopal (M.P.)"
        },
        {
          name: "Dr. Priyanka Tiwari",
          position: "Assistant Professor",
          degree: "BHMS, M.D (Hom.)/ 17037",
          experience: "1 year & 1 months/ F.T.",
          email: "drpriyanka55555@gmail.com",
          image: "/priyanakatiwari.jpeg",
          DOB: "10/02/1985",
          DOJ: "08/05/2023",
          address: "A-60, Indus Residency, Near Mittal College, Bhpoal (M.P.)"
        },

        // Add more faculty members as needed
      ];

      break;
    case "cse":
      slogan = "Unlocking the Science of Cure through the Laws of Health";
      author = "Dr. Neelam Sharma";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "Homoeopathic Materia Medica is the backbone of Homoeopathic system of treatment in which there is huge collection of symptoms of medicines which are arranged in systemic manner.There are different approaches to treat the patents i.e. through constitution, guiding, gentle and pathological symptoms etc.Medicines in the Materia Medica have different sources like vegetable, animal, mineral etc. and each source is having its own characteristic which helps to select the remedy and to individual the case on holistic approach which helps to cure the sick to health and not only its relief or palliation for time being.Therefore Homoeopathy is called holistic system of treatment.";
      dept = "Materia Medica And Therapeutics";
      headD = "Dr. Neelam Sharma";
      headImg = "/neelamsharma.jpg";
      phoneHead = "+91 9993375073";
      emailHead = "drneelamsharma01@gmail.com";
      dob = "DOB-01/08/1971";
      doj = "DOJ-08/04/2019";
      address = "C-32, Vardhman Green Park, Ashoka Garden, Bhopal";
      degree = "DHMS,MD (Hom.)/11385",
        experience = "16 years/F.T."
      faculties = [
        {
          name: "Dr. Megha Mungaria",
          position: "Assistant Professor",
          degree: "BHMS,MD (Hom.)/21869",
          experience: "3 years 3 month/F.T.",
          email: "meghamungaria@gmail.com",
          image: "/megha.jpg",
          DOB: "30/05/1990",
          DOJ: "08/03/2021",
          address: "H.No.26, Kunjan Nagar, Phase-II,Danish Nagar, Hoshangabad Road, Bhopal"
        },
        // {
        //   name: "MS. SHARSHTI ATRE",
        //   position: "Assistant Professor",
        //   degree: "MSc",
        //   experience: "3 years",
        // },
        // {
        //   name: "Ms. MAMTA GEHLOT",
        //   position: "Assistant Professor",
        //   degree: "M.E.",
        //   experience: "1 years",
        // },
        // Add more faculty members as needed
      ];

      break;
    case "ece":
      slogan = "Foundation of Homeopathic Wisdom, Leading to Holistic Wellness.";
      author = "Dr. Farook Mohd. Khan";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "Forensic Medicine is important branch of medical sciences which provided the legal knowledge of cases deals with solution of legal problems like applying the medical knowledge in deciding case of injuries, murder, suicide, accident, sexual offences, poisoning etc. In homoeopathy, a physician also contain proper knowledge of acts, laws, different type of certificate necessary in clinical practice which provide the study of forensic medicine. ";
      dept = "Forensic Medicine And Toxicology";
      headD = "Dr. Farook Mohd. Khan";
      headImg = "/farook.jpg";
      phoneHead = "+91 9425451532";
      emailHead = "k.farooq2012@gmail.com";
      dob = "DOB-05/02/1964";
      doj = "DOJ-26/08/2022";
      address = "95,Ikbal Colony, Ashoka Garden, Bhopal (M.P.)";
      degree = "DHMS/11769";
      experience = "25 years & 5 months/F.T."
      faculties = [
        {
          name: "Dr. Avaneesh Kumar Pandey",
          position: "Assistant Professor",
          degree: "BHMS, MD (Hom.)/ 23080",
          experience: "3 Years & 3 months/ F.T.",
          email: "dr.avaneesh1@gmail.com",
          image: "/Avaneesh.jpg",
          DOB: "10/06/1981",
          DOJ: "08/03/2021",
          address: "Room No.3, Reza Apartment, Hinotiya Chouraha, Pushpa Nagar, Bhopal (M.P.)"
        },
        // {
        //   name: "Jane Smith",
        //   position: "Data Scientist",
        //   degree: "Masters in Data Science",
        //   experience: "3 years",
        // },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        // },
        // Add more faculty members as needed
      ];
      break;
    case "eet":
      slogan = "Foundation of Homeopathic Wisdom, Leading to Holistic Wellness.";
      author = "Dr. Shoeba Perveen";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "Community medicine is the field concerned with the study of health and disease in the defined community or group. Its goal is to identify the health problems and needs of people and then accordingly to plan, implement and evaluate the effectiveness of health care system.Homoeopathic play a important role in community medicine in a number of ways including prophylaxis and complementary treatment. During covid 19 pandemic we used Ars. Alb. 30 as a preventive with great efficacy.";
      dept = "Communtiy Medicine";
      headD = "Dr. Shoeba Perveen";
      headImg = "/shoeba.jpg";
      phoneHead = "+91 8224903697";
      emailHead = "drshoebaali1991@gmail.com";
      dob = "DOB-04/05/1991";
      doj = "DOJ-20/12/2019";
      address = "H.No. 71, Rambha Nagar, Berasia Road, Bhopal, M.P.-462001";
      degree = "BHMS, M.D. (Hom.)/ 22445",
        experience = "4 year & 6 months/F.T."
      faculties = [
        {
          name: "Dr. Garima Namdev",
          position: "Associate  Professor",
          degree: "M.B.B.S. M.D. (C.M.) /9154",
          experience: "13 years & 7 months/ G.F.",
          email: "namdevgarima50@gmail.com",
          image: "/garima.jpg",
          DOB: "23/02/1981",
          DOJ: "21/11/2017",
          address: "Ganga Ashram, Sehore"
        },
        {
          name: "Dr. Bhumika Gangwani",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom.)/ H038739",
          experience: "1 year/F.T.",
          email: "bhumibhms2605@gmail.com",
          image: "/bhumika.jpg",
          DOB: "26/09/1992",
          DOJ: "21/08/2023",
          address: "78, Deepak Society, Chuna Bhatti, Kolar Road, Bhopal-462016 (M.P.)"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        // },
        // Add more faculty members as needed
      ];

      break;
    case "it":
      slogan = "Unlocking the Secrets of Health Through Physiology and Biochemistry.";
      author = "Dr. Shail Jain";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Physiology & Biochemistry at NSHMC provides a foundational understanding of the human body's functions and chemical processes. Physiology explores how various systems and organs work together to maintain health, while Biochemistry focuses on the molecular mechanisms that underlie these functions. Through interactive lectures, lab work, and research, students gain in-depth knowledge of essential processes like metabolism, cellular function, and hormonal regulation.These disciplines are critical in understanding how the body responds to health challenges and treatment, making them central to both homeopathic and conventional medical education. The department fosters a comprehensive, integrative approach, equipping students with the knowledge and skills to understand health at both the systemic and molecular levels.";
      dept = "Physiology & BioChemistry";
      headD = "Dr. Shail Jain";
      headImg = "/shailjain.jpg";
      phoneHead = "+91 9893269251";
      emailHead = "drshailjain@yahoo.com";
      dob = "DOB-14/09/1964";
      doj = "DOJ-10/09/2002";
      address = "175, Ashok Vihar, Ashoka Garden, Bhopal";
      degree = "MBBS/8905",
        experience = "22 years/ F.T."
      faculties = [
        {
          name: "Dr. Naveen Jaggi",
          position: "Associate Professor",
          degree: "DHMS, BHMS(Graded)/13720",
          experience: "20 years & 11 months/ F.T.",
          email: "dr.naveenjaggi@gmail.com",
          image: "/naveen.jpg",
          DOB: "21/02/1974",
          DOJ: "03/01/2018",
          address: "S-10, Seagul, Aakriti, E-8, Rohit Nagar, Bhopal"
        },
        {
          name: "Dr. Rajani Suryawanshi",
          position: "Associate Professor",
          degree: "DHMS, M.D. (Hom.)/13218",
          experience: "6 years & 4  months/F.T.",
          email: "rajanishakya302@gmail.com",
          image: "/rajani.jpg",
          DOB: "19/06/1977",
          DOJ: "01/02/2020",
          address: "C-30, Vardhman Green Park, Ashoka Garden, Bhopal- 462023"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "og":
      slogan = "Guiding Safe Journeys from Motherhood to Womanhood.";
      author = "Dr. Prerna Tiwari";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Obstetrics & Gynaecology at NSHMC is dedicated to the comprehensive study of women's health, focusing on pregnancy, childbirth, and the reproductive system. The department provides students with both theoretical knowledge and practical skills in managing pregnancy, labor, and postpartum care, as well as diagnosing and treating gynecological disorders. With a strong emphasis on maternal and fetal health, students are trained in both preventive and curative care, ensuring they are well-prepared to support women through all stages of life.Through hands-on clinical training, interactive learning, and research opportunities, the department equips future practitioners with the expertise to deliver compassionate, patient-centered care. The holistic approach integrates modern medical practices with homeopathic principles, fostering a well-rounded understanding of women's health.";
      dept = "Obstretics & Gynaecology";
      headD = "Dr. Prerna Tiwari";
      headImg = "/prerna.jpg";
      phoneHead = "+91 8871712624";
      emailHead = "prernaghmc@gmail.com";
      dob = "DOB-24/08/1992";
      doj = "DOJ-19/07/2019";
      address = "F-205, Drishti City, Kolar Road, Bhopal (M.P.)-462042";
      degree = "BHMS, M.D. (Hom.)/ 22406",
        experience = "5 years/ F.T."
      faculties = [
        {
          name: "Dr. Rinku Bhaskar",
          position: "Professor",
          degree: "MBBS, DGO/5486",
          experience: "13 years & 9 months/ G.F.",
          email: "nshmcbpl@gmail.com",
          image: "/rinku.jpg",
          DOB: "17/08/1979",
          DOJ: "06/09/2010",
          address: "D-33, Akriti Garden, Nehru Nagar, Bhopal"
        },
        {
          name: "Dr. Niharika Prahladi",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom)/ 24219",
          experience: "8 months/ F.T.",
          email: "niharikasinghharshana@gmail.com",
          image: "/niharika.jpg",
          DOB: "23/11/1992",
          DOJ: "08/11/2023",
          address: "H.No.96, Kanta Shrawan, Jairam State, Near Ayodhya Bypass, Bhopal (M.P.)"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "pm":
      slogan = "Where Pathology Meets Microbiology: Understanding Health from Every Angle.";
      author = "Dr. Ritesh Kumbhare";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Pathology & Microbiology at NSHMC focuses on the study of disease processes and the role of microorganisms in health and illness. Pathology involves the examination of tissues, organs, and bodily fluids to understand the nature and progression of diseases, while Microbiology explores the impact of bacteria, viruses, fungi, and parasites on human health.Students receive in-depth training in diagnostic techniques, laboratory analysis, and disease management, learning to identify and interpret pathological and microbiological findings. The department emphasizes both theoretical knowledge and practical skills, preparing students to diagnose diseases accurately and understand the microbial factors influencing health. By integrating these disciplines, the department ensures a comprehensive approach to understanding and combating diseases, essential for effective medical and homeopathic practice.";
      dept = "Pathology & Microbiology";
      headD = "Dr. Ritesh Kumbhare";
      headImg = "/ritesh.jpg";
      phoneHead = "+91 9584340592";
      emailHead = "drriteshkumbhare0909@gmail.com";
      dob = "DOB-30/09/1975";
      doj = "DOJ-05/11/2011";
      address = "B-203, Pushpa Nagar Colony, Bhopal";
      degree = "BHMS/14425",
        experience = "12 years & 8 Months/ F.T."
      faculties = [
        {
          name: "Dr. Arun Maity",
          position: "Professor",
          degree: "MBBS, M.D. (Pathology)/ 8836",
          experience: "14 Years 4 Months/G.F.",
          email: "N/A",
          image: "/arun.jpg",
          DOB: "19/06/1964",
          DOJ: "17/10/2020",
          address: "H.No. 3, Vinayak Parisar, Gulmohar Colony, Bhopal"
        },
        {
          name: "Dr. Shailendra Singh",
          position: "Assistant Professor",
          degree: "BHMS, MD (Hom.)/21037",
          experience: "3 year & 3 Months/ F.T.",
          email: "mr.shailendra@gmail.com",
          image: "/shailendra.jpg",
          DOB: "15/07/1987",
          DOJ: "01/04/2021",
          address: "Flat No.7, BDA Colony, Talaiya, Bhopal (M.P.)"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];
      break;
    case "eet":
      slogan = "Foundation of Homeopathic Wisdom, Leading to Holistic Wellness.";
      author = "Dr. Shoeba Perveen";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Community Medicine at NSHMC focuses on the health and well-being of populations, emphasizing preventive healthcare, public health initiatives, and health education. This department trains students to understand the social, environmental, and behavioral factors that influence health, aiming to promote disease prevention and improve community health outcomes. Through fieldwork, research, and community engagement, students learn to assess health needs, plan interventions, and implement public health programs. The department is committed to producing healthcare professionals who are skilled in addressing the broader determinants of health and making a positive impact on public health at both local and globally.";
      dept = "Communtiy Medicine";
      headD = "Dr. Shoeba Perveen";
      headImg = "/shoeba.jpg";
      phoneHead = "+91 8224903697";
      emailHead = "drshoebaali1991@gmail.com";
      dob = "DOB-04/05/1991";
      doj = "DOJ-20/12/2019";
      address = "H.No. 71, Rambha Nagar, Berasia Road, Bhopal, M.P.-462001";
      degree = "BHMS, M.D. (Hom.)/ 22445",
        experience = "4 year & 6 months/F.T."
      faculties = [
        {
          name: "Dr. Garima Namdev",
          position: "Associate  Professor",
          degree: "M.B.B.S. M.D. (C.M.) /9154",
          experience: "13 years & 7 months/ G.F.",
          email: "namdevgarima50@gmail.com",
          image: "/garima.jpg",
          DOB: "23/02/1981",
          DOJ: "21/11/2017",
          address: "Ganga Ashram, Sehore"
        },
        {
          name: "Dr. Bhumika Gangwani",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom.)/ H038739",
          experience: "1 year/F.T.",
          email: "bhumibhms2605@gmail.com",
          image: "/bhumika.jpg",
          DOB: "26/09/1992",
          DOJ: "21/08/2023",
          address: "78, Deepak Society, Chuna Bhatti, Kolar Road, Bhopal-462016 (M.P.)"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        // },
        // Add more faculty members as needed
      ];

      break;
    case "it":
      slogan = "Unlocking the Secrets of Health Through Physiology and Biochemistry.";
      author = "Dr. Shail Jain";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "Physiology is the study of how the human body works. It describes the chemistry and physics behind basic body functions, from how molecules behave in cells to how systems of organs work together.Physiology plays a crucial role in medical science for several reasons-Understanding normal functions it provides the baseline for understanding how the human body functions and explain how body maintains internal stability despite external changes.Disease Mechanism Knowledge of Physiology helps in understanding how disease alter normal physiological processes and help in clinical correlation and identifying the root causes of disease.Drug development & Pharmacology  Physiology helps in understanding how drugs interact with body and their effects on various systems and organs.Diagnostic Tools  Physiological measurements (like blood pressure, heart rate and respiratory rate) are biomarkers in diagnosing in various medical conditions.Imaging Techniques  Understanding physiological processes enhances the interpretation of imaging results, such as MRI, CT Scans.Education & Training  Physiology is a core subject in medical education, providing future health care professional with essential knowledge about the human body and its functions.Research and Innovation  Ongoing physiology research drives innovations in medical technology, treatments and preventive measure.In summary physiology is fundamental to medical science as it underpins our understanding of health and disease, inform clinical processes guide research and shapes the development of new therapeutic strategies.";
      dept = "Physiology & BioChemistry";
      headD = "Dr. Shail Jain";
      headImg = "/shailjain.jpg";
      phoneHead = "+91 9893269251";
      emailHead = "drshailjain@yahoo.com";
      dob = "DOB-14/09/1964";
      doj = "DOJ-10/09/2002";
      address = "175, Ashok Vihar, Ashoka Garden, Bhopal";
      degree = "MBBS/8905",
        experience = "22 years/ F.T."
      faculties = [
        {
          name: "Dr. Naveen Jaggi",
          position: "Associate Professor",
          degree: "DHMS, BHMS(Graded)/13720",
          experience: "20 years & 11 months/ F.T.",
          email: "dr.naveenjaggi@gmail.com",
          image: "/naveen.jpg",
          DOB: "21/02/1974",
          DOJ: "03/01/2018",
          address: "S-10, Seagul, Aakriti, E-8, Rohit Nagar, Bhopal"
        },
        {
          name: "Dr. Rajani Suryawanshi",
          position: "Associate Professor",
          degree: "DHMS, M.D. (Hom.)/13218",
          experience: "6 years & 4  months/F.T.",
          email: "rajanishakya302@gmail.com",
          image: "/rajani.jpg",
          DOB: "19/06/1977",
          DOJ: "01/02/2020",
          address: "C-30, Vardhman Green Park, Ashoka Garden, Bhopal- 462023"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "og":
      slogan = "Guiding Safe Journeys from Motherhood to Womanhood.";
      author = "Dr. Prerna Tiwari";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "In Obstetrics & Gynecology Department focuses on womens reproductive health encompassing two main areas:Obstetrics – This branch deals with pregnancy, childbirth and postpartum period. It includes prenatal care, labor and delivery support and postnatal care to ensure the health of both mother and baby.Gynecology- This area addresses the female reproductive system’s health, including menstruation, fertility, menopause and conditions such as endometriosis and fibroids. Gynecological services often include routing exams, screening and treatment for various disorders.Together – The Obstetrics & Gynecology Department provides comprehensive care and holistic treatment with Homoeopathy that supports women’s health throughout their lives, combining medical expertise with compassionate support.";
      dept = "Obstretics & Gynaecology";
      headD = "Dr. Prerna Tiwari";
      headImg = "/prerna.jpg";
      phoneHead = "+91 8871712624";
      emailHead = "prernaghmc@gmail.com";
      dob = "DOB-24/08/1992";
      doj = "DOJ-19/07/2019";
      address = "F-205, Drishti City, Kolar Road, Bhopal (M.P.)-462042";
      degree = "BHMS, M.D. (Hom.)/ 22406",
        experience = "5 years/ F.T."
      faculties = [
        {
          name: "Dr. Rinku Bhaskar",
          position: "Professor",
          degree: "MBBS, DGO/5486",
          experience: "13 years & 9 months/ G.F.",
          email: "nshmcbpl@gmail.com",
          image: "/rinku.jpg",
          DOB: "17/08/1979",
          DOJ: "06/09/2010",
          address: "D-33, Akriti Garden, Nehru Nagar, Bhopal"
        },
        {
          name: "Dr. Niharika Prahladi",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom)/ 24219",
          experience: "8 months/ F.T.",
          email: "niharikasinghharshana@gmail.com",
          image: "/niharika.jpg",
          DOB: "23/11/1992",
          DOJ: "08/11/2023",
          address: "H.No.96, Kanta Shrawan, Jairam State, Near Ayodhya Bypass, Bhopal (M.P.)"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "pm":
      slogan = "Where Pathology Meets Microbiology: Understanding Health from Every Angle.";
      author = "Dr. Ritesh Kumbhare";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "Pathology is the branch of medical science which studies the cause and effects the disease, structural and functional changes. Branches of Pathology are systemic Pathology, Microbiology, Parasitology, Virology, Bacteriology and Haematology. Clinical pathology is a medical speciality that play vital role to help in diagnosis, prognosis and treatment of disease.The Pathological state of the disease helps us in designing and planning the line of treatment of the patient and it helps in homoeoapathy in selection of  potency also.Pathological diagnosis help us in management of the disease, proper diet and regimen, medico-legal purposes, prognostic purposes and in application of preventive measures and eventually in research.";
      dept = "Pathology & Microbiology";
      headD = "Dr. Ritesh Kumbhare";
      headImg = "/ritesh.jpg";
      phoneHead = "+91 9584340592";
      emailHead = "drriteshkumbhare0909@gmail.com";
      dob = "DOB-30/09/1975";
      doj = "DOJ-05/11/2011";
      address = "B-203, Pushpa Nagar Colony, Bhopal";
      degree = "BHMS/14425",
        experience = "12 years & 8 Months/ F.T."
      faculties = [
        {
          name: "Dr. Arun Maity",
          position: "Professor",
          degree: "MBBS, M.D. (Pathology)/ 8836",
          experience: "14 Years 4 Months/G.F.",
          email: "N/A",
          image: "/arun.jpg",
          DOB: "19/06/1964",
          DOJ: "17/10/2020",
          address: "H.No. 3, Vinayak Parisar, Gulmohar Colony, Bhopal"
        },
        {
          name: "Dr. Shailendra Singh",
          position: "Assistant Professor",
          degree: "BHMS, MD (Hom.)/21037",
          experience: "3 year & 3 Months/ F.T.",
          email: "mr.shailendra@gmail.com",
          image: "/shailendra.jpg",
          DOB: "15/07/1987",
          DOJ: "01/04/2021",
          address: "Flat No.7, BDA Colony, Talaiya, Bhopal (M.P.)"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];


      break;
    case "pfm":
      slogan = "Rooted in Principles, Driven by Compassionate Healing";
      author = "Dr. Nitesh Suryawanshi";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The practice of medicine is the applying of medical or surgical  knowledge for the purpose of identifying, diagnosing, preventing, relieving, or curing disease, or aiding natural functions, or modifying or removing the results of physical injury , by application of homeopathic knowledge which states that, highest ideal of cure is rapid, gentle and permanent restoration of the health, or removal and annihilation of the disease in its whole extent i9n the shortest most reliable and most harmless way on easily comprehensible principles.The department fulfils all the  parameters as stated by National council of homoeopathy.";
      dept = "Practice of Medicine";
      headD = "Dr. Nitesh Suryawanshi";
      headImg = "/nitesh.jpg";
      phoneHead = "+91 9893547451";
      emailHead = "dr.niteshsuryawanshi@gmail.com";
      dob = "DOB-25/04/1978";
      doj = "DOJ-06/10/2003";
      address = "C-30, Vardhman Green Park, Ashoka Garden, Bhopal";
      degree = "DHMS, M.D. (Hom.)/ 13245",
        experience = "20 years & 9 month/ F.T."
      faculties = [
        {
          name: "Dr. Rupesh Chandra",
          position: "Associate Professor",
          degree: "BHMS, M.D. (Hom.)/ 26582",
          experience: "13 years & 6 months/ F.T.",
          email: "drrupeshchandra@gmaill.com",
          image: "/rupesh.jpg",
          DOB: "15/01/1976",
          DOJ: "20/02/2020",
          address: "D- 2/300, Danish Nagar, Hoshangabad, Road, Bhopal, M.P."
        },
        {
          name: "Dr. Prachi Shrivastava Dubey",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom)/ 22649",
          experience: "2 Years & 9 Months/ F.T.",
          email: "prachi.prachi.27@gmail.com ",
          image: "/prachi.jpg",
          DOB: "27/03/1989",
          DOJ: "01/10/2021",
          address: "Pt. Bheemsen Joshi Parisar, Flat No.M-105 B Block, Saket Nagar, Sec-2C, Near AIIMS, Bhopal (M.P.)"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "rep":
      slogan = "Navigating Symptoms to Remedies with Expertise and Insight.";
      author = "Dr. Rajendra Prasad Sharma";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "Repertory is an index a catalogue of symptoms of Homoeopathic Materia Medica, neatly arranged in a Practical from and also indicating the relative gradation of drugs and it greatly facilitates for quick selection of indicated remedy.It helps to select a Homoeopathic remedy/ simillimum.It helps the study of Homoeopathic Materia Medica.Repertory helps to elicit the group of remedies.It teaches us to select the proper symptoms and consider only those symptoms which are required to get simillimum.It suggest related remedies which could be helpful for selecting a drug for a second prescription.In Repertory Homoeopathic software’s are available such as RADAR, CARA, Hompath, Mac Repertory. These technical adds reduce physicians labour and helps in fast repertorisation too.";
      dept = "Department of Repertory";
      headD = "Dr. Rajendra Prasad Sharma";
      headImg = "/rpsharma.jpg";
      phoneHead = "+91-9826356970";
      emailHead = "rps29sai@gmail.com";
      dob = "DOB-29/06/1957";
      doj = "DOJ-01/01/2021";
      address = "F-158, J.K. Road, Old Minal Residency,Bhopal (M.P.)";
      degree = "D.H.M.S./ 10366",
        experience = "33 Years & 6 months./ F.T."
      faculties = [
        {
          name: "Dr. Santosh Kumar Verma",
          position: "Professor",
          degree: "BHMS, M.D.(Hom.)/ H030584",
          experience: "8 years / F.T.",
          email: "santoshvarma5566@gmail.com",
          image: "/santosh.jpg",
          DOB: "11/09/1984",
          DOJ: "16/06/2016",
          address: "C-533, Pushpa Nagar, Near Main Railway Statoin, Bhopal-462010"
        },
        {
          name: "Dr. Yogeshvari",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom.)/ 23117",
          experience: "3years & 1 months/F.T",
          email: "divyanichourasiya616@gmail.com",
          image: "/yogeshvari.jpg",
          DOB: "23/12/1992",
          DOJ: "29/05/2021",
          address: "B-70, Naveen Nagar, Bhopal"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "pharm":
      slogan = "Pharmaceutical Expertise for Holistic Healing.";
      author = "Dr. Sandeep Sharma";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "Homoeopathic Pharmacy is the subject of BHMS Ist Prof.This subject deals with the identification and preparation of homoeopathic medicines from the sources which are available in the environment like vegetables, animals, minerals etc.Homoeopathic Pharmacy energizes the medicines through serial dilution of the substances means it gives extra power to the substances by process of potentization or dynamization.Since the medicines are dynamic in nature their existence as atoms or molecules cannot be seen through instruments especially the higher potencies.IIT Mumbai has conducted the research on Homoeopathic Medicines and conducted that it works on principle of nanotechnology.";
      dept = "Department of Pharmacy";
      headD = "Dr. Sandeep Sharma";
      headImg = "/sandeep.jpg";
      phoneHead = "+91 9893389440";
      emailHead = "dr.sandeep_sharma@yahoo.in";
      dob = "DOB-25/12/1970";
      doj = "DOJ-06/09/1999";
      address = "C-32, Vardhman Green Park, Ashoka Garden, Bhopal";
      degree = "DHMS, M.D. (Hom)/11686",
        experience = "20 years & 11 months/ F.T"
      faculties = [
        {
          name: "Dr. Arvind Jain",
          position: "Professor",
          degree: "DHMS, M.D. (Hom) /11604",
          experience: "26 years/ F.T.",
          email: "arvindjaindr1971@gmail.com",
          image: "/arvind.jpg",
          DOB: "01/01/1971",
          DOJ: "01/12/2017",
          address: "C-715, Shahpura, Bhopal"
        },
        {
          name: "Dr. Shifa Ansari",
          position: "Assistant Professor",
          degree: "BHMS, M.D (Hom.)/ 22399",
          experience: "1 year & 7 months/ F. T.",
          email: "shifaansari6491@gmail.com",
          image: "/shifa.jpg",
          DOB: "06/04/1991",
          DOJ: "16/11/2022",
          address: "H.No. 14, Near Golghar, Museum Ameerganj Colony, Idgah Hills, Bhpoal (M.P.)"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "anotomy":
      slogan = "Where Structure Meets Function: Mastering Anatomy for Better Care.";
      author = "Dr. R.S. Agrawal";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Anatomy at NSHMC provides an in-depth exploration of the human body's structure, offering essential knowledge for diagnosing and treating health conditions. Through detailed lectures, hands-on dissection, and advanced imaging techniques, students gain a comprehensive understanding of anatomical systems and their functions.The department's modern facilities and expert faculty support both theoretical learning and practical application, ensuring students are well-prepared for clinical practice. Mastery of anatomy is crucial for effective homeopathic and medical care, as it underpins accurate diagnosis, treatment planning, and a holistic approach to patient health.";
      dept = "Department of Anatomy";
      headD = "Dr. R.S. Agrawal";
      headImg = "/principalns.jpg";
      phoneHead = "+91 9827447031";
      emailHead = "dragrawalrs@gmail.com";
      dob = "DOB-31/05/1966";
      doj = "DOJ-01/02/2003";
      address = "11/1, Shalimar Sterling Complex, Raisen Road, Bhopal (M.P.)";
      degree = "DHMS, MD (Hom.)/ 10347",
        experience = "33 years & 7 months/ F. T."
      faculties = [
        {
          name: "Dr. Tahir Mohammad Warsi",
          position: "Associate Professor",
          degree: "BHMS/14621",
          experience: "14 years & 7 months/ F.T.",
          email: "tahirmohammadwarsi@gmail.com",
          image: "/tahir.jpg",
          DOB: "23/09/1979",
          DOJ: "03/07/2018",
          address: "Bagh Dilkusdha Lala Lajpat Rai Colony, Bhopal (M.P.)"
        },
        {
          name: "Dr. Dhanraj Bawan",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom)/ 23212",
          experience: "3 years & 1 Months/F.T.",
          email: "dhanraj.bawan1992@gmail.com",
          image: "/dhanraj.jpg",
          DOB: "14/08/1992",
          DOJ: "01/06/2021",
          address: "32, Phase-5, Kailash Nagar, Semra Kala, Bhopal"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "surgery":
      slogan = "Excellence in Surgery: Combining Precision with Holistic Insight.";
      author = "Dr. J.P. Buch";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Surgery at NSHMC is committed to providing students with a thorough understanding of surgical techniques and practices. The department covers a wide range of surgical disciplines, emphasizing both theoretical knowledge and hands-on skills. Students learn advanced surgical methods, patient management, and post-operative care, integrating these skills with homeopathic principles for comprehensive patient treatment.With state-of-the-art facilities and experienced faculty, the department ensures that students gain practical experience through simulations and clinical rotations. This preparation is essential for developing the expertise needed to perform surgeries safely and effectively while considering holistic approaches to patient care and recovery.";
      dept = "Department of Surgery";
      headD = "Dr. J.P. Buch";
      headImg = "/jpbuch.jpg";
      phoneHead = "+91 9424354149";
      emailHead = "jaiprakashbuch.ent@gmail.com";
      dob = "DOB-11/08/1977";
      doj = "DOJ-07/02/2008";
      address = "MIG-81, Old Subhash Nagar, Bhopal";
      degree = "MBBS, MS (ENT)/4466",
        experience = "16 years & 5 months/ F.T."
      faculties = [
        {
          name: "Dr. Ajit Kumar Jain",
          position: "Associate Professor",
          degree: "MBBS, DOMS/ 6006",
          experience: "21 years & 10 months/ G.F.",
          email: "drajitsjain@gmail.com",
          image: "/ajit.jpg",
          DOB: "12/11/1960",
          DOJ: "12/09/2002",
          address: "175, Ashok Vihar, Ashoka Garden, Bhopal"
        },
        {
          name: "Dr. Shahjahan Begum",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom)/ 18405",
          experience: "2 years & 7 months/ F.T.",
          email: "sarfrazshaikhshahjahan@gmail.com",
          image: "/shahjahan.jpg",
          DOB: "23/02/1981",
          DOJ: "21/11/2017",
          address: "CH.No.42, Behine A-One Star Shadi Hall, Near 80 Feet Road, Nav Bahar Colony, Bhopal (M.P.)-462010"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;

    default:
      break;
  }
  const [active, setActive] = useState(0)


  let deptImgs;
  let mission;
  let vision;

  switch (deps) {
    case "me":
      deptImgs = "/Organonlab.jpg";
      mission = "To impart knowledge and equip students with skills for generating quality civil engineering professionals with high ethical standards; carry out innovative research and consultancy projects to design, build and maintain civil engineering infrastructure ensuring environmental health and quality life.";
      vision = "To become a frontier in civil engineering education and research, which will serve the society with sustainable infrastructure and superior environmental health.";
      break;

    case "cse":
      deptImgs = "/materia.jpg";
      mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
      vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
      break;

    case "ece":
      deptImgs = "/fmt.jpg";
      mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
      vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
      break;

    case "eet":
      deptImgs = "/Communitymedicine.jpg";
      mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
      vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
      break;

    case "it":
      deptImgs = "/PhysiologyLab.jpg";
      mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
      vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
      break;

    case "og":
      deptImgs = "/Obstetrics&gynecology.jpg";
      mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
      vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
      break;

    case "pm":
      deptImgs = "/Pathologylab.jpg";
      mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
      vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
      break;

    case "pfm":
      deptImgs = "/Practiceofmedicine.jpg";
      mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
      vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
      break;

    case "rep":
      deptImgs = "/Repertory1.jpg";
      mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
      vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
      break;

    case "pharm":
      deptImgs = "/Pharmacy1.jpg";
      mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
      vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
      break;

    case "anotomy":
      deptImgs = "/AnatomyMuseum.jpg";
      mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
      vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
      break;

    case "surgery":
      deptImgs = "/surgery.jpg";
      mission = "To produce skilled electrical engineers who can innovate and contribute to the development of sustainable energy solutions.";
      vision = "To lead in electrical engineering education and research for a sustainable and technologically advanced future.";
      break;

    default:
      deptImgs = "/default-img.jpg";
      mission = "Default Mission";
      vision = "Default Vision";
  }




  const buttons = [
    'About The Department', 'Labs Facility', 'Faculty',
  ]
  return (
    <>
      <div>
        <SliderMain images={images} heading={dept} />
        <div className='mt-6 flex items-center gap-5'>
          {
            buttons.map((item, index) => (
              <button onClick={() => setActive(index)} className='border-2 p-4 rounded-lg bg-purple-500 hover:bg-purple-700' key={index}>{item}</button>
            ))
          }
        </div>

        <div className="w-full">
          {
            active === 0 && (
              <div className="w-full flex px-20 py-10  gap-7">
                <div className="w-2/3 ">
                  <div className="p-10">
                    <h2 className=" text-4xl text-purple-800 my-5">
                      About the Department
                    </h2>
                    {/* <div className="w-full   mt-5">
                      <div className="w-full grid grid-cols-3 gap-5 ">
                        {counter.map((count) => (
                          <DeptCounter
                            key={count.title}
                            initialValue={3}
                            targetValue={count.value}
                            speed={count.speed}
                            textColor={count.textColor}
                            text={count.title}
                            color={count.color}
                          />
                        ))}
                      </div>
                    </div> */}

                    <p className='mt-5 font-extralight text-sm text-justify h-[160px]'>
                      {aboutDept}
                    </p>
                  </div>
                </div>
                <div className='w-1/3 p-4'>
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
            )
          }
          {/* {
            active === 1 && (
              <div><Curriculumn /></div>
            )
          } */}
          {
            active === 1 && (
              <div className="w-full flex px-20 py-4 gap-7">
                <div className="w-3/5 h-[580px]">
                  <div className="relative h-full">
                    <Image
                      src={deptImgs}
                      alt="Department Image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="w-2/5 flex flex-col gap-10 py-20 justify-between">
                  <div className="w-11/12 mx-auto flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Image src="/mission-icon.png" width={70} height={20} alt="Mission Icon" />
                      <h1 className="text-2xl font-bold">Mission</h1>
                    </div>
                    <div>
                      <p className="text-sm font-extralight">{mission}</p>
                    </div>
                  </div>
                  <div className="w-11/12 mx-auto flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Image src="/vision-icon.png" width={70} height={20} alt="Vision Icon" />
                      <h1 className="text-2xl font-bold">Vision</h1>
                    </div>
                    <div>
                      <p className="text-sm font-extralight">{vision}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          {
            active === 2 && (
              <>
                <div className="w-full flex flex-col px-20 gap-4 py-6 ">
                  <h1 className="font-bold text-4xl text-purple-700">
                    Head Of Department
                  </h1>
                  <div className="flex justify-between gap-10">
                    <div className="w-1/2  flex items-center p-4">
                      <div className="w-72 h-72 rounded-full border-2 border-black relative overflow-hidden">
                        <Image src={headImg} fill />
                      </div>
                      <div className="flex flex-col justify-center  p-10">
                        <h1 className=" font-semibold text-2xl">{headD}</h1>
                        <h2 className="text-lg mb-2">Head Of Department</h2>
                        <h1 className="text-sm  mt-1">
                          <FaPhoneAlt className="inline mr-1" />
                          {phoneHead}
                        </h1>

                        <h1 className="text-sm  mt-1 flex items-center">
                          <MdEmail className="inline mr-1 " />
                          {emailHead}
                        </h1>
                        <h1 className="text-sm  mt-1">{dob}</h1>
                        <h1 className="text-sm  mt-1">{doj}</h1>
                        <h1 className="text-sm  mt-1">{address}</h1>
                        <h1 className="text-sm  mt-1">{degree}</h1>
                        <h1 className="text-sm  mt-1">{experience}</h1>

                      </div>
                    </div>
                    <div className="w-1/2  flex flex-col justify-center items-center">
                      <p className="p-5 text-3xl text-center"> {slogan}</p>
                      <h1 className=" italic  text-2xl">- {author}</h1>
                    </div>
                  </div>
                </div>
                <h1 className="text-3xl text-center font-semibold border-b">Faculty at NSHMC</h1>
                <div className=" grid ">
                  <div>
                    {faculties.map((faculty, index) => (
                      <div
                        className=" mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] "
                        key={index}
                      >
                        <div className=" flex gap-6 ">
                          <div className="w-48   relative  overflow-hidden rounded-lg">
                            <Image
                              src={faculty.image}
                              alt="Img Not Found"
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          <div className=" py-4">
                            <h1 className="my-2 font-bold text-lg mt-1">
                              <span className="font-semibold"> Name : </span>{" "}
                              {faculty.name}
                            </h1>
                            <h1 className="text-sm mt-1">
                              <span className="font-semibold"> Designation : </span>{" "}
                              {faculty.position}
                            </h1>
                            <h2 className="text-sm">
                              <span className="font-semibold"> Qualification : </span>{" "}
                              {faculty.degree}
                            </h2>
                            <h3 className="text-sm mt-1">
                              <span className="font-semibold"> Experience : </span>{" "}
                              {faculty.experience}
                            </h3>
                            <h3 className="text-sm mt-1">
                              <span className="font-semibold"> Gmail </span>
                              {faculty.email}
                            </h3>
                            <h3 className="text-sm mt-1">
                              <span className="font-semibold"> DOB </span>
                              {faculty.DOB}
                            </h3>
                            <h3 className="text-sm mt-1">
                              <span className="font-semibold"> DOJ </span>
                              {faculty.DOJ}
                            </h3>
                            <h3 className="text-sm mt-1">
                              <span className="font-semibold"> Address </span>
                              {faculty.address}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Add more rows as needed */}
                  </div>
                </div>
              </>
            )
          }
          {/* {
            active === 4 && (
              <>
                <div className="w-full flex flex-col px-20 gap-4 py-6">
                  <h1 className="text-4xl text-purple-700 font-bold p-2">
                    Academic Programmes
                  </h1>
                  <div className="w-full flex justify-center gap-20 ">
                    <ProgramCard
                      course={"Undergraduate"}
                      bgcolor={"bg-purple-800"}
                      admission={"NEET UG"}
                      dept={" It is a 5.5-year course that includes an internship and covers the medical knowledge of homeopathy"}
                    />
                    <ProgramCard
              course={"Post-Graduate"}
              bgcolor={"bg-purple-800"}
              admission={"JEE"}
              dept={"civil engineering"}
            />
                  </div>
                </div>
              </>
            )
          } */}





          {/* <div className="w-full p-2"></div> */}
        </div>
        <div>

        </div>


      </div>
    </>

  );
}






