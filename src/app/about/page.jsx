'use client'
import React from 'react'

import Image from 'next/image'
import principalImage from '../../../public/images/principal.jpg'
import Link from 'next/link'
import SideMenu from '../components/SideBar/SideBar'
import { ProfessorsList, teachers, IconColors } from '@/data/appData'
import { motion } from 'framer-motion'


function page() {

  return (
    <div className='flex'>
      <div className='bg-blue-400 my-auto h-screen'>
        <SideMenu />
      </div>
      <div className='flex justify-center gap-30 mx-auto text-gray-600 items-center h-screen'>
        <div className='w-1/3 '>
          <h1 className={`font-lexend text-5xl text-center text-${IconColors[1].split('-').slice(1).join('-')}`}>About.</h1>
          <p className='font-lexend text-md font-light'>At Regal Heights School, we believe education is more than just books—it is the foundation of life. From the very beginning, our mission was simple: to nurture curious minds, guide bright futures, and build strong values.</p>
          <p>Over the years, we have grown into a place where learning meets creativity, discipline meets freedom, and success is shaped every single day. Our students don’t just learn subjects—they learn life.</p>
          <p>Thanks to our dedicated teachers, supportive parents, and passionate learners, we have built a community that inspires excellence. Today, we stand proud, not just as a school, but as a family of achievers and dreamers.</p>
          <p>
            At Regal Heights School, we did everything with love, patience, and dedication—
            and together, we are successful.
          </p>
          <motion.div

            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ display:0.4, delay:0.4, duration: 1 }}
            

            className='staffSection flex flex-col gap-6 w-full mt-14'>
            <div className='proff flex gap-1.5'>
              {ProfessorsList.map((prof, index) => {
                return (
                  <div key={index} className='mt-3'>
                    <div>
                      <div className='w-30 h-30 rounded-full overflow-hidden'>
                        <Image src={prof.img} alt={`Image of ${prof.name}`} className='object-cover w-full h-full' />
                      </div>
                      <div className='flex flex-col justify-center items-center'>
                        <p className='font-lexend text-[14px] text-center '> {prof.title} {prof.name}</p>
                        <span className='font-lexend text-md text-center italic text-[11px]'>{`(${prof.specialTitle})`}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div>
              {teachers.map((teacher, i) => {
                return <span key={i}>{`${teacher.name}, `}</span>
              })}
            </div>

          </motion.div>
        </div>
        <motion.div 

        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x:0}}
        transition={{ display:0.4, delay:0.4, duration: 1 }}

        className='w-1/3 border-l-[1px] border-gray-200 p-15 shadow-2xl rounded-4xl'>
          <div className='w-[150px] h-[150px]'>
            <Image src={principalImage} alt='Principal Image' className='object-cover w-full h-full rounded-full' />
          </div>
          <div className=''>
            <h1 className='font-poppins text-2xl my-8'>Message From The Head of School</h1>
            <p className='font-poppins text-md tracking-wider text-sm'>Welcome to Regal Heights School , a vibrant International Baccalaureate World School offering four programmes from PreK to Grade 12 – the Primary Years Programme (PYP), the Middle Years Programme (MYP), the Diploma Programme (DP) and the Career-related Programme. As a school we are committed to providing high quality holistic education in a supportive, caring and collaborative learning environment.</p>
            <p className='py-5'>Our school is rooted in a long history of innovation in education dating back to the founding of Dwight School (New York) in 1872. With campuses in New York, Seoul, Shanghai, London, Hanoi and Dubai, as well as our Dwight Global Online School, each Dwight School shares the same commitment to igniting the spark of genius in every child.</p>
            <p className='py-5'>I invite you to explore our website for more information and to visit our wonderful school in person.</p>
            <p className='py-2'>We look forward to meeting you!With best wishes,</p>
            <p className='py-1 text-2xl'>David Hutson</p>
            <p className='uppercase'>Head of School</p>
            <p className='font-bold'>MSc BA (Hons) NPQH</p>
            <Link href={'/about'} className=' block border border-blue-500 px-6 py-3 mt-8 text-blue-600 font-semibold rounded-lg bg-white shadow-md active:scale-95 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-200'>
              Contact Our Management Team
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default page
