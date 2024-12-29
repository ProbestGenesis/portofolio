"use client"
import formation1 from "@/assets/formation1.png"
import formation2 from "@/assets/formation2.png"
import formation3 from "@/assets/formation3.png"
import Image, { StaticImageData } from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import * as motion from "motion/react-client"
import { Variants } from "motion/react"

export default function Formation() {
  const [img, setImage] = useState<StaticImageData | null>(null)

  const tab = [formation1, formation2, formation3]

  const animate : Variants = {
    offscreen: {
      opacity: 0,
      rotate: -10
    },
     

    onscreen: {
      opacity: 1,
      rotate: 0,

      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.7

      }
    }
  }
  return (
    <div className="">
        <div className='mb-8'> 
              <h1 className='uppercase text-center text-3xl font-bold'>
                Formations
              </h1>
            <p className='text-center text-muted'>
                    
            </p>
        </div>


       <Dialog> 
          <motion.div className="flex justify-center items-center gap-10 my-10 max-sm:flex-col" 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{amount: 0.7}}
          >{
              tab.map((item: StaticImageData, index: number) => (
                <div key={index}>
                   <DialogTrigger>
                     <motion.div className="flex items-center gap-10 w-[300px] h-[200px] relative" variants={animate}>
                       <Image src={item}  alt='formation scan' fill placeholder="blur" onClick={() => setImage(item)}/>
                      </motion.div> 
                    </DialogTrigger> 

                    <DialogContent  className="h-[90%]">
                        <div className="w-full h-full relative">
                          {img && <Image src={img} fill  alt="scan zoom"  quality={100} placeholder="blur"/>}
                        </div>
                    </DialogContent>
                </div>
              ))
            }
          </motion.div>
        </Dialog> 

        <div className="text-center ">
          <p>Il est present sur les sreens ci dessus quelques unes des nombreuse formation que j&apos;ai pu suivre, témoins de mes compétences </p>
        </div>
    </div>
  )
}