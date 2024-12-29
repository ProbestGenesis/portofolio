"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {project} from "@/data/project"
import { Plus, TreeDeciduous } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"

type ProjetCardProps = {
  data: {
    Name: string
    Description: string
    image: string,
    Status: string,
    StartDate: string,
    EndDate: string,
    Owner: string
  }[]
}

const ProjetCard: React.FC<ProjetCardProps> = ({ data }) => {
  const animate : Variants = {
    offscreen: {
      opacity: 0,
    },

    onscreen: {
      opacity: 1,
      transition: {
        type:"spring",
        bounce: "O.4", 
        duration: 0.7
      }
    }
  }
    return (<>{
        data.map((item, index) => (
            <motion.div initial="offscreen" 
                whileInView="onscreen"
                viewport={{amount: 0.7}}
                key={index}
            >
              
           <motion.div variants={animate}>
            <Card  className="max-w-[600px] 2xl:max-w-[900px]">
                <CardContent className='relative'>
                    <CardTitle>
                      <CardHeader>
                            {item.Name}
                            <span className='text-muted-foreground text-xs'>
                           { `${item.StartDate} ${item.EndDate && `- ${item.EndDate}` }`}
                        </span>
                       </CardHeader>  

                    </CardTitle>
                    <div>
                       {item.Description}
                    </div>

                  <CardFooter className='flex flex-col'>
                      <span className='text-xs m-2'>
                          <p>lien:<strong className='text-muted'> Non disponible</strong> </p>
                      </span>

                         <div className='flex gap-2 items-center w-full justify-between'>
                          <span className='flex gap-2 items-center ~text-xs/sm'>
                             <TreeDeciduous/>  {item.Owner}
                            </span> 

                           {item.Status === "Active" && <span className='flex items-center text-card-foreground gap-1'>
                              <p> {item.Status} </p>
                              <p className='bg-green-600 p-1 rounded-full'></p>
                              </span>  }
                          </div>  
                  </CardFooter>
                </CardContent>
            </Card> 
            </motion.div>
            </motion.div>
        ))
    }
    </>)
}

export default function ProjetModule() {
  const animate : Variants = {
    offscreen: {
      opacity: 0,
    },

    onscreen: {
      opacity: 1,
      transition: {
        type:"spring",
        bounce: "O.4", 
        duration: 0.9
      }
    }
  }
  return (
    <div className='flex flex-col gap-y-7 '>
        <div className='mb-8'> <h1 className='uppercase text-center text-3xl font-bold'>
            PROJETs
        </h1>
        <p className='text-center text-muted'>
            Improvement through practice
        </p>
        </div>


        <div className='flex flex-wrap max-sm:flex-col gap-10 items-center justify-center '>
           <ProjetCard data={project}/>

          <motion.div initial="offscreen" 
                whileInView="onscreen"
                viewport={{amount: 0.9}}>
            <motion.div variants={animate}>
          <Card>
                <CardContent>
                   <TooltipProvider>
                    <Tooltip>
                    <CardTitle>
                       <TooltipTrigger> 
                        <CardHeader>
                            <div className='rounded-full p-2 border-dotted border-2 border-secondary-foreground flex items-center justify-center transition-all hover:scale-105'>
                                     <Plus className='w-10 h-10 '/>
                            </div>
                        </CardHeader>

                        <CardDescription>
                            Me proposer un projet
                        </CardDescription>
                        </TooltipTrigger>
                    </CardTitle>

                    <TooltipContent>
                           <p>Indisponible</p>
                    </TooltipContent>
                    </Tooltip>
                    </TooltipProvider> 
                </CardContent>
           </Card>
           </motion.div> 
           </motion.div>
        </div>
    </div>
  )
}