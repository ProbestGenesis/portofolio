"use client"

import React from 'react'
import Image from "next/image"
import image1 from "@/assets/numerique.jpeg"

const AboutMe = () => {
  return (
    <div className='flex flex-col gap-y-7 '>
        <div className='mb-81'> <h1 className='uppercase text-center text-3xl font-bold'>
            A propos
        </h1>
        <p className='text-center text-muted'>
                Incredible skills
        </p>
        </div>

       <div className=''>
        <div className='relative w-screen h-[80vh]'  >
            <Image src={image1} alt="vvv"  fill className='opacity-10' priority={false} />

            <div className='absolute m-auto h-full w-full'>
              <span className='flex items-center justify-center  h-full w-full text-center'>
                <p className='text-primary  ~text-lg/3xl'>Ma mission est de rendre accessible une numérisation repondant a tout les besoins</p>
                </span> 
            </div> 
            
            </div> 
        </div>
        
       
        
    </div>
  )
}

export default AboutMe