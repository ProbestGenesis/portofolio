"use client"

import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import typescript from "@/assets/typescript.png"
import js from "@/assets/js.png"
import next from "@/assets/nextjs.png"
import redux from "@/assets/redux.png"
import electron from "@/assets/electron.png"
import tailwind from "@/assets/tailwindcss.png"
import html from "@/assets/html.png"
import css from "@/assets/css.png"
import node from "@/assets/node.png"
import react from "@/assets/react.png"
import sass from "@/assets/sass.png"
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"

export default function Cart() {

    const animate : Variants = {
        offscreen: {
            opacity: 0,
            rotate: -10
        },

        onscreen: {
            opacity: 100,
            rotate:  0, 
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.7
            }
        }
    }
  return (
    <div className='flex flex-col gap-y-7 '>
       <div className='mb-81'> <h1 className='uppercase text-center text-3xl font-bold'>
            COMPETENCES 
        </h1>
        <p className='text-center text-muted'>
                Incredible skills
        </p>
        </div>


        <motion.div className='flex space-10 gap-10 mt-10 max-sm:flex-col justify-center items-center max-lg:flex-col max-lg:gap-5 '
                initial="offscreen"
                whileInView="onscreen"
                viewport={{amount: 0.7}}
        >
               <motion.div variants={animate}><Card className=''>
                    <CardContent className='h-[300px]'>
                        <CardHeader className='text-center ~text-xs/sm '>
                            Languages
                        </CardHeader> 
                        <CardDescription className='text-center ~text-xs/sm '>
                            Is powerfull of programming
                        </CardDescription>
                        <ul className='flex flex-col space-y-8 my-4'> 
                            <li>
                                <span className='flex gap-2 items-center'>
                                    <span className='flex gap-4 items-center justify-center'>
                                        <Image src={html} alt="html icon" />
                                        <Image src={css} alt="css icon" />
                                    </span>
                                    <p>HTML - CSS</p>
                                </span>
                                
                            </li>
                            <li> 
                                <span className='flex gap-2 items-center'>
                                    <span className='flex gap-4 items-center justify-center'>
                                        <Image src={js} alt="js icon" />
                                        <Image src={typescript} alt="js icon" />
                                    </span> 
                            
                                    <p>JavaScript - TypeScript</p> 
                                </span>
                            </li>
                        </ul>
                    </CardContent>
                </Card></motion.div>

               <div className='flex flex-wrap gap-5 justify-center items-center'> 
               <motion.div variants={animate}>
                <Card className=''> 
                        <CardContent className='text-center ~text-xs/sm '>
                            <CardHeader >
                                Framework    
                            </CardHeader>

                            <CardDescription>
                                <p className='text-xs text-muted-foreground text-center'>JAVASCRIPT</p>
                            </CardDescription>

                            <ul className='flex flex-col space-y-4 mt-2'>
                                <li className='flex gap-4 items-center'>
                                    <Image src={next} alt='nextjs icon' />Nextjs
                                </li>

                                <li className='flex gap-4 items-center'>
                                    <Image src={redux} alt='redux icon' />Redux
                                </li>
                                <li className='flex gap-4 items-center'>
                                    <Image src={node} width={48} height={48} alt='electron icon' />Nodejs
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    </motion.div>

            <motion.div variants={animate}>
                <Card>
                    <CardContent className='text-center ~text-xs/sm '>
                        <CardHeader >
                            Framework    
                        </CardHeader>

                        <CardDescription>
                            <p className='text-xs text-muted-foreground text-center'>UI/UX</p>
                        </CardDescription>

                        <ul className='flex flex-col space-y-4 mt-2'>
                            <li className='flex gap-4 items-center'>
                                <Image src={tailwind} alt='nextjs icon' />Tailwind
                            </li>

                            <li className='flex gap-4 items-center'>
                            <span className='w-12 h-12 flex items-center justify-center'>
                                <svg viewBox="0 0 41 14" id="svg12637382782"><path d="M 15.481 0 L 7.38 13.988 L 0 13.988 L 6.325 3.066 C 7.306 1.372 9.753 0 11.791 0 Z M 33.579 3.497 C 33.579 1.566 35.231 0 37.269 0 C 39.307 0 40.959 1.566 40.959 3.497 C 40.959 5.428 39.307 6.994 37.269 6.994 C 35.231 6.994 33.579 5.428 33.579 3.497 Z M 16.865 0 L 24.245 0 L 16.144 13.988 L 8.764 13.988 Z M 25.581 0 L 32.961 0 L 26.636 10.922 C 25.655 12.615 23.208 13.988 21.17 13.988 L 17.48 13.988 Z" fill="var(--token-f32baa44-90b8-42a5-8bca-ffba9d95b23a, rgb(245, 245, 245))"></path></svg>
                            </span> Motion
                            </li>
                            <li className='flex gap-4 items-center'>
                                <Image src={sass} width={48} height={48} alt='electron icon' />Sass
                            </li>
                        </ul>
                    </CardContent>

                </Card>
                </motion.div>

                <motion.div variants={animate}>
                <Card>
                    <CardContent className='text-center ~text-xs/sm'>
                        <CardHeader >
                            Framework    
                        </CardHeader>

                        <CardDescription>
                            <p className='text-xs text-muted-foreground text-center'>MOBILE & DESKTOP</p>
                        </CardDescription>

                        <ul className='flex flex-col space-y-4 mt-2'>
                            <li className='flex gap-4 items-center'>
                                <Image src={react} alt='nextjs icon' />react native
                            </li>

                           
                            <li className='flex gap-4 items-center'>
                                <Image src={electron} width={48} height={48} alt='electron icon' />Electron
                            </li>
                        </ul>
                    </CardContent>

                </Card>
                </motion.div>
                </div>
        </motion.div>


        <div className='flex justify-center items-center'>
            <p className='text-center '>
                Ceci est une liste exhaustive des langages/frameworks que je maîtrise et continue de perfectionner. Bien sûr, dans ma quête de connaissance, j&pos;apprends également d&pos;autres langages, notamment <strong className='text-accent-foreground'>Python</strong> et <strong className='text-accent-foreground'>C#</strong>, aussi bien pour le développement web que natif.
            </p>
        </div>
    </div>
  )
}