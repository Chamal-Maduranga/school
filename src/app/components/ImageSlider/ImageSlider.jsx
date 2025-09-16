"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

const slides = [
  { src: "/images/1.jpg", text: "Welcome to Our School" },
  { src: "/images/2.jpg", text: "Scienc - 1989" },
  { src: "/images/3.jpg", text: "Inspiring Future Leaders" },
  { src: "/images/4.jpg", text: "Strong Community Spirit" },
  { src: "/images/5.jpg", text: "Where Learning Shines" },
]

export default function ImageSlider() {
  return (
    <div className="overflow-hidden w-full mx-auto h-[calc(100vh-300px)] shadow-lg">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: false }}
        speed={3000}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='w-full '>
            <div className="flex w-full h-screen">
              <Image
                src={slide.src}
                alt={slide.text}
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0  flex items-center justify-center">
                <p className="bg-black/40 text-white text-9xl font-extrabold tracking-wider rounded-lg w-full h-full text-center flex items-center justify-center uppercase shadow-2xl">
                  {slide.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
