import React from 'react'
import DashboardPage from '../components/DashBoardSection/DashBord'
import SideMenu from '../components/SideBar/SideBar'

function page() {
  return (
    <div className='flex'>
      <div className='h-screen bg-red-950 w-fit sticky top-0'>
        <SideMenu/>
      </div>
      <div className='w-full'>
        <section id='dashboard' className='w-full bg-gray-200 text-black h-screen mx-auto mb-3.5'>
          <h2 className="text-2xl font-bold p-15 w-full">Add to Timetable</h2>
          <p className="text-xl font-light p-15 w-full">Please select "Date", "Teacher", "Subject" and Enter time. Press  "Add  to time table" button </p>
          <div className="p-6 w-full">
            <DashboardPage/>
          </div>
        </section>
        <section id='attendance' className='w-10/12 bg-gray-200 text-black h-screen mx-auto mb-3.5'>
          <h2 className="text-2xl font-bold p-6">Attendance</h2>
          <div className="p-6">
            Content for Attendance section
          </div>
        </section>
        <section id='lesson-plans' className='w-10/12 bg-gray-200 text-black h-screen mx-auto mb-3.5'>
          <h2 className="text-2xl font-bold p-6">Lesson Plans</h2>
          <div className="p-6">
            Content for Lesson Plans section
          </div>
        </section>
      </div>
    </div>
  )
}

export default page