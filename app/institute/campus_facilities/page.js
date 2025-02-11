import CampusMap from "@/app/components/CampusMap/CampusMap";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import React from "react";

export default function page() {
  const images = ["/ar-3.jpg"];
  return (
    <>
      <SliderMain images={images} heading="Campus and Facilities" />
      <div className="p-10">
        <CampusMap
          heading1="Deptt. Of Anatomy"
          paragraph1="The Department of Anatomy at NSHMC serves as a cornerstone of our medical education, providing students with a comprehensive understanding of the human body’s structure and function. Our curriculum emphasizes both theoretical knowledge and practical, hands-on learning through the study of gross anatomy, histology, and embryology. Students gain valuable insights into the intricate systems of the body, laying a strong foundation for their practice in homeopathy and other medical disciplines.
          With state-of-the-art facilities and experienced faculty, the Department of Anatomy ensures that students develop a deep appreciation for the human body's complexity and its relevance to holistic healthcare. Through interactive lectures, lab sessions, and clinical correlations, we aim to prepare students for a successful career in health sciences, where an understanding of anatomy is essential to diagnosis and treatment."
          img1="/anatomy.jpg"
          heading2="Deptt. Of Surgery"
          paragraph2="The Department of Surgery at NSHMC offers students a thorough grounding in the principles and practices of surgery, with a focus on integrating homeopathic approaches to patient care. Our department covers a wide range of topics, including surgical anatomy, aseptic techniques, wound care, and basic surgical procedures, while also emphasizing the importance of holistic and non-invasive treatments when possible.
          Under the guidance of experienced surgeons and healthcare professionals, students gain both theoretical knowledge and practical skills through hands-on training and clinical observation. This department plays a critical role in preparing students to understand surgical interventions, while also equipping them with the knowledge to provide comprehensive, patient-centered care that aligns with homeopathic principles."
          img2="/surgery.jpg"
        />
        <CampusMap
          heading1="Deptt. Of Pathology"
          paragraph1="The Department of Pathology at NSHMC focuses on the study of disease processes, providing students with a deep understanding of the causes, mechanisms, and effects of diseases on the human body. Through the study of pathology, students learn how to diagnose diseases by examining tissues, organs, and bodily fluids, while correlating clinical symptoms with underlying biological changes.
          Our curriculum covers key areas such as general pathology, systemic pathology, and microbiology, blending theoretical knowledge with practical experience in laboratory techniques. The department plays a vital role in preparing students to make accurate diagnoses and understand disease progression, all within the broader context of homeopathic and holistic healthcare practices. This knowledge is essential for developing treatment plans that address both the root cause and symptoms of illness."
          img1="/pathology.jpg"
          heading2="Deptt. Of Materia And Medica"
          paragraph2=" The Department of Materia Medica at NSHMC is dedicated to the study of homeopathic remedies and their therapeutic applications. Materia Medica focuses on understanding the properties, origins, and effects of various natural substances used in homeopathic medicine, including plants, minerals, and animal products. Students are taught how to carefully analyze symptoms and select appropriate remedies based on the individual’s unique health condition.
          Our curriculum covers classical homeopathic texts and modern advancements, emphasizing both theoretical learning and practical case analysis. Through in-depth study and clinical practice, students gain expertise in remedy selection, dosage, and individualized treatment approaches. The Department of Materia Medica serves as a crucial pillar of homeopathic education, empowering future practitioners to provide precise, patient-centered care based on the principles of homeopathy."
          img2="/materia.jpg"
        />
        <CampusMap
          heading1="Deptt. Of Pharmacy"
          paragraph1="The Department of Pharmacy at NSHMC plays a vital role in educating students on the preparation, dispensing, and management of homeopathic medicines. This department focuses on the principles of homeopathic pharmacology, including the sourcing, preparation, and potentization of remedies. Students learn about the standards for manufacturing, storing, and dispensing medicines to ensure both safety and efficacy.
          Through hands-on training and theoretical instruction, the Department of Pharmacy equips students with the knowledge required to handle homeopathic remedies with precision and care. Understanding the pharmacological aspects of these medicines is essential for accurate prescription and administration, empowering students to deliver high-quality, individualized care in their future practices. The department emphasizes ethical practices, quality control, and a deep respect for natural healing methods."
          img1="/pharmacy.jpg"
          heading2="Disection Hall"
          paragraph2="The Dissection Hall at NSHMC provides students with a unique and invaluable opportunity to explore the intricate anatomy of the human body through hands-on experience. Equipped with modern facilities and tools, the Dissection Hall is designed to enhance students’ understanding of human anatomy by allowing them to observe and dissect cadaver specimens under the guidance of experienced faculty.
          This practical approach to learning anatomy reinforces theoretical knowledge and helps students develop a deeper appreciation of the body’s structure and functions. The Dissection Hall fosters a respectful and focused environment where students can gain essential insights into the complexities of the human body, which are fundamental to both medical and homeopathic education."
          img2="/disection.jpg"
        />
        <CampusMap
          heading1="Deptt. Of Physiology"
          paragraph1="The Department of Physiology at NSHMC focuses on the study of the normal functions of the human body, providing students with a comprehensive understanding of how various systems and organs work together to maintain health. Physiology is fundamental to understanding the body's responses to internal and external stimuli, as well as its ability to heal and maintain balance, which is essential for both medical and homeopathic practices.
          Our curriculum covers areas such as cellular physiology, neurophysiology, cardiovascular, respiratory, and endocrine systems, blending theoretical knowledge with practical applications. Students engage in interactive learning through lectures, lab sessions, and clinical case studies to explore how physiological processes are affected by disease and how homeopathic interventions can help restore health. This department lays the foundation for understanding how the body functions, equipping students with the knowledge needed to approach patient care holistically."
          img1="/physiology.jpg"
          heading2="Deptt. Of Bio-chemistry"
          paragraph2="Biju Patnaik Central Library (BPCL) of NIT Rourkela, named after the legendary industrialist and statesman, and the founding Chairman of Board of Governors of REC Rourkela, is functioning since 1965. It acts as main learning resource centre of the institute which constitutes robust collections in both print and electronic resources. The central library supports teaching and research activities of faculty, students and research scholars. For more details visit http://library.nitrkl.ac.in/. Phone : (0661) 246 2101"
          img2="/biochemistry.jpg"
        />
        <CampusMap
          heading1="Deptt. Of Repertory"
          paragraph1="The Department of Repertory at NSHMC focuses on the systematic study and use of homeopathic repertories—comprehensive reference guides that help practitioners select appropriate remedies based on a patient’s symptoms. The repertory is an essential tool in homeopathic practice, enabling students to match specific symptoms with corresponding remedies for individualized treatment.
          Our curriculum trains students in the art of repertorization, teaching them how to efficiently navigate and interpret various repertories, such as Kent’s Repertory, and modern versions. With hands-on case analysis and clinical practice, students learn to use repertories as a crucial aid in diagnosing and prescribing remedies. The Department of Repertory plays a pivotal role in refining students' skills in case-taking, analysis, and remedy selection, ensuring accurate and effective homeopathic treatment."
          img1="/repertory.jpg"
          heading2="Dental OPD"
          paragraph2="The Dental OPD (Outpatient Department) at NSHMC provides students with practical exposure to dental care and oral health management within a clinical setting. The department offers diagnostic, preventive, and therapeutic services for a wide range of dental conditions, focusing on holistic approaches that align with homeopathic principles.
          Students receive hands-on training in dental procedures such as oral examinations, basic restorative treatments, extractions, and oral hygiene education. Under the guidance of experienced dental professionals, they also learn how to integrate homeopathic remedies to support dental health and address conditions like oral ulcers, gum disease, and post-procedural healing. The Dental OPD serves as a crucial platform for students to develop clinical skills and offer comprehensive oral care to the community."
          img2="/dental.jpg"
        />
      </div>
    </>
  );
}
