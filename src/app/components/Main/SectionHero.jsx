import React from 'react'
import Image from 'next/image'

import studentImage1 from '../../../../public/images/student1.jpg'
import studentImage2 from '../../../../public/images/student2.jpg'
import studentImage3 from '../../../../public/images/student3.jpg'
import principalImage from '../../../../public/images/principal.jpg'
import Link from 'next/link'

function SectionHero() {
    return (
        <div>

            <section className='relative grid grid-cols-2 w-full'>
                <div className='relative h-[600px] '><Image src={studentImage1} alt='Students engaged in a classroom activity' fill className='object-cover rounded-tl-[200px]' /></div>
                <div className='h-[600px] bg-[#C29B74] rounded-tr-[200px]'></div>
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/4 w-11/12 max-w-2xl bg-white p-8 rounded-xl shadow-2xl'>
                    <h1 className='font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Nurturing the Leaders and Innovators of Tomorrow.</h1>
                    <p className='font-sans text-lg text-gray-700 mb-6'>Welcome to Regal: A Community Where Potential Meets Purpose.</p>
                    <p className='font-poppins text-base text-gray-600 leading-relaxed'>
                        We believe true education is about more than academic achievement. It’s about fostering curiosity, resilience, and a passion for lifelong learning. In our dynamic and supportive community, dedicated educators empower students to think critically, collaborate effectively, and solve the complex challenges of tomorrow with confidence and integrity.
                    </p>
                    <button className='border border-blue-500 px-6 py-3 mt-8 text-blue-600 font-semibold rounded-lg bg-white shadow-md active:scale-95 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-200'>Explore Our Approach</button>
                </div>
            </section>
            <section className='relative grid grid-cols-2 w-full'>
                
                <div className='h-[600px] bg-[#C29B74]'></div>
                    <div className='z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-3/4 w-11/12 max-w-2xl bg-white p-8 rounded-xl shadow-2xl'>
                        <h1 className='font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                        Empowering Minds Through Knowledge and Creativity.
                        </h1>
                        <p className='font-sans text-lg text-gray-700 mb-6'>
                        At Regal, learning goes beyond the classroom—it’s about unlocking imagination and potential.
                        </p>
                        <p className='font-poppins text-base text-gray-600 leading-relaxed'>
                        We provide an environment where curiosity is encouraged and every student is motivated to discover their unique strengths. Our programs focus on blending innovation with practical skills to prepare learners for a rapidly evolving world.
                        </p>
                        <button className='border border-blue-500 px-6 py-3 mt-8 text-blue-600 font-semibold rounded-lg bg-white shadow-md active:scale-95 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-200'>
                        Discover Our Programs
                        </button>
                </div>
                <div className='relative h-[600px]'>
                    <Image src={studentImage2} alt='Students engaged in a classroom activity' fill className='object-cover' />
                </div>
            </section>
            <section className='relative grid grid-cols-2 w-full'>
                <div className='relative h-[600px]'><Image src={studentImage3} alt='Students engaged in a classroom activity' fill className='object-cover' /></div>
                <div className='h-[600px] bg-[#C29B74]'></div>
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/4 w-11/12 max-w-2xl bg-white p-8 rounded-xl shadow-2xl'>
                    <h1 className='font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                        Building Character, Confidence, and Community.
                    </h1>
                    <p className='font-sans text-lg text-gray-700 mb-6'>
                        Regal is more than a place of learning—it’s a family where values and friendships grow.
                    </p>
                    <p className='font-poppins text-base text-gray-600 leading-relaxed'>
                        Through mentorship, teamwork, and leadership opportunities, students develop essential life skills. We nurture integrity, empathy, and respect to ensure that every learner contributes positively to society.
                    </p>
                    <button className='border border-blue-500 px-6 py-3 mt-8 text-blue-600 font-semibold rounded-lg bg-white shadow-md active:scale-95 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-200'>
                        Join Our Community
                    </button>


                </div>
            </section>

            <div className='flex my-30 items-center-safe gap-5 justify-center'>
                <div className='w-[500px] h-[500px] rounded-full overflow-hidden'>
                    <Image src={principalImage} alt='principalImage' className='w-full h-full object-cover rounded-full'/>
                </div>
                <div className='w-[800px]'>
                    <h1 className='font-poppins text-5xl my-8'>Message From The Head of School</h1>
                    <p className='font-poppins text-md'>Welcome to Regal School , a vibrant International Baccalaureate World School offering three programmes from PreK to Grade 12 – the Primary Years Programme (PYP), the Middle Years Programme (MYP), the Diploma Programme (DP) and the Career-related Programme (CP). As a school we are committed to providing high quality holistic education in a supportive, caring and collaborative learning environment.</p>
                    <Link href={'/about'} className=' block border border-blue-500 px-6 py-3 mt-8 text-blue-600 font-semibold rounded-lg bg-white shadow-md active:scale-95 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-200'>
                        Find out More
                    </Link>
                </div>
                
            </div>

        </div>
    )
}

export default SectionHero
