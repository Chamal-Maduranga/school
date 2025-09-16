'use client'
import React from 'react'
import TimetablePage from '../components/StudentTimeTable/StudentTimeTable'
import { schooldays, schoolSubjectTimeTable } from '@/data/appData'
import SideMenu from '../components/SideBar/SideBar'


function page() {
  return (
    <div className="flex">
      {/* 1. The Sidebar */}
      {/* This div is now sticky. It needs a defined width (e.g., w-64) */}
      {/* and h-screen to take up the full height. */}
      <div className='sticky top-0 h-screen bg-green-600'>
        <SideMenu />
      </div>

      {/* 2. The Main Content Area that Scrolls */}
      {/* This div takes up the remaining space (w-full) and will scroll */}
      {/* normally if its content is too long. */}
      <div className='w-full'>
        {/* Place all your scrolling sections inside this main content div */}
        <section id='timetable'>
          <TimetablePage />
        </section>

        <section id='assignments' className='w-11/12 text-black mx-auto my-8 p-6 bg-white rounded-lg shadow-md'>
          <h2 className="text-2xl font-bold mb-4">Assignments</h2>
          <div>
            Content for Assignments section
          </div>
        </section>

        <section id='exams-and-results' className='w-11/12 text-black mx-auto my-8 p-6 bg-white rounded-lg shadow-md'>
          <h2 className="text-2xl font-bold mb-4">Exams & Results</h2>
          <div>
            Content for Exams & Results section
          </div>
        </section>

        <section id='elibrary' className='w-11/12 text-black mx-auto my-8 p-6 bg-white rounded-lg shadow-md'>
          <h2 className="text-2xl font-bold mb-4">ELibrary</h2>
          <div>
            Content for ELibrary section
          </div>
        </section>
      </div>
    </div>
  );
}

console.log(schooldays)
console.log(schoolSubjectTimeTable)

export default page