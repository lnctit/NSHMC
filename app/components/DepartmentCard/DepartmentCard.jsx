import Image from 'next/image'
import React from 'react'

export default function DepartmentCard({image,heading}) {
  return (
   <>
   <div className='flex justify-between '>
   <section
    
    className=" w-[500px] h-[350px]  overflow-hidden rounded-md   mx-auto mt-10 flex justify-center     "
    style={{
        background: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
>

    
    <div className="container  flex flex-col lg:flex-row items-center rounded-md  bg-opacity-75 bg-purple-900 h-[580px]  ">
    <h1 className= ' text-white text-2xl relative  p-2 ' >{heading}</h1>
        </div>
       
        </section>
   
        
            </div>
            
   </>
  )
}
