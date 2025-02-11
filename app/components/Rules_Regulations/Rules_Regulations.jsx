import React from 'react'
import SliderMain from '@/app/components/SliderMain/SliderMain'
import FacultyCard from '../FacultyCard/FacultyCard';
import Image from 'next/image';
import RuleCard from '../RuleCard/RuleCard';
import RelatedLink from '../RelatedLink/RelatedLink';

export default function Rules_Regulations() {
    const images = ["/ar-3.jpg"];
  return (
    <div>
     <SliderMain images={images} heading="Homeo Shree Magazine"/>
     <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-10 pt-[36px]  grid grid-cols-3  gap-5 justify-evenly pb-10 ">
        <RuleCard bgcolor="bg-blue-200" link="https://drive.google.com/file/d/1w1CS6wNibnH83XPirTSlU1KKpz415RjD/view?usp=sharing" heading="Homeo Shree 79th Edition"/>
        <RuleCard bgcolor="bg-gray-200" link="https://drive.google.com/file/d/1h_iDrLyGuuyllxGQ_YY6J-MFC9kVXrf6/view?usp=sharing" heading="Homeo Shree 78th Edition"/>
        <RuleCard bgcolor="bg-green-200" link="https://drive.google.com/file/d/1VD26bzuBWZo_9TIPM2UXdSK50DN__ddF/view?usp=sharing" heading="Homeo Shree 77th Edition"/>
        <RuleCard bgcolor="bg-red-200" link="https://drive.google.com/file/d/1e8q1DcvtwuYlPLY9etr-_Kw7a1Tbs7wZ/view?usp=sharing" heading="Homeo Shree 76th Edition"/>
        <RuleCard bgcolor="bg-pink-200" link="https://drive.google.com/file/d/1sm1xXHSkZ1TC25_stACnOjv28r295n9a/view?usp=sharing" heading="Homeo Shree 75th Edition"/>
        <RuleCard bgcolor="bg-purple-200" link="https://drive.google.com/file/d/1dfi8pcmykGIYrPhqBOngyCZYoqJ5AiSx/view?usp=sharing" heading="Homeo Shree 74th Edition"/>
        <RuleCard bgcolor="bg-lime-200" link="https://drive.google.com/file/d/1UC58neGd__z8eOWL8TUKJVjjDKXWVgN0/view?usp=sharing" heading="Homeo Shree 73th Edition"/>
        <RuleCard bgcolor="bg-blue-200" link="https://drive.google.com/file/d/10L4wzOpaIAFcPa87QFgbwczC7wUUBJDo/view?usp=sharing" heading="Homeo Shree 72th Edition"/>
        <RuleCard bgcolor="bg-purple-200" link="https://drive.google.com/file/d/1MiLhhslW-gJN7pjUA7uC3KXxjEGiqat6/view?usp=sharing" heading="Homeo Shree 71th Edition"/>
        <RuleCard bgcolor="bg-pink-200" link="https://drive.google.com/file/d/1JjgHCEzzmm8Qr9R5bBbFy2cyUuk3ev8n/view?usp=sharing" heading="Homeo Shree 70th Edition"/>
        <RuleCard bgcolor="bg-red-200" link="https://drive.google.com/file/d/1RU_CA7XoEc0tGhg-Ov8Zw3s0FHrni1nb/view?usp=sharing" heading="Homeo Shree 69th Edition"/>
        <RuleCard bgcolor="bg-gray-200" link="https://drive.google.com/file/d/1yX7pW3p820nzdLaWkZ9gSNIYGiyzELu6/view?usp=sharing" heading="Homeo Shree 68th Edition"/>
        <RuleCard bgcolor="bg-blue-200" link="https://drive.google.com/file/d/1hD0eFBC_41nyTdZhNR-S8naVAATNmJoW/view?usp=sharing" heading="Homeo Shree 67th Edition"/>
        <RuleCard bgcolor="bg-yellow-200" link="https://drive.google.com/file/d/10kmsFS_rOGbzHVDwU4JSs_xS-KIP81Lq/view?usp=sharing" heading="Homeo Shree 66th Edition"/>
        <RuleCard bgcolor="bg-green-200" link="https://drive.google.com/file/d/1TVlWm7myAXcow6rowcTeUZ3zTDIVp5x9/view?usp=sharing" heading="Homeo Shree 65th Edition"/>
        <RuleCard bgcolor="bg-lime-200" link="https://drive.google.com/file/d/1J-vWXMLir9WHYFXP5KuOSF6Xybz4y2vM/view?usp=sharing" heading="Homeo Shree 64th Edition"/>
        <RuleCard bgcolor="bg-purple-200" link="https://drive.google.com/file/d/18ynWBoIOKWvG9nBQiJJPEx5u42QcewPJ/view?usp=sharing" heading="Homeo Shree 63th Edition"/>
        {/* <RuleCard bgcolor="bg-red-200" link="/" heading="Homeo Shree 62th Edition"/>
        <RuleCard bgcolor="bg-lime-200" link="/" heading="Homeo Shree 72th Edition"/>
        <RuleCard bgcolor="bg-blue-200" link="/" heading="Homeo Shree 72th Edition"/> */}
      
        
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
          <div className="relative h-full ">
            <RelatedLink />
          </div>
        </div>

        {/* <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
        <div className="relative h-full ">
              <Image
                src="/welcome.jpeg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
        </div> */}
      </div>
    </div>
    
  )
}
