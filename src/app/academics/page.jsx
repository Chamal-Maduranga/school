import React from 'react';
import SideMenu from '../components/SideBar/SideBar';

// --- Reusable SVG Icons for this page ---
const BookIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const ScienceIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477zM12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>;
const PaletteIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>;


function AcademicsPage() {
  const facultyMembers = [
    { name: 'Dr. Eleanor Vance', subject: 'Head of Science (Ph.D. in Physics)', bio: 'With over 15 years of experience, Dr. Vance inspires students to explore the universe through hands-on experiments and inquiry-based learning.' },
    { name: 'Mr. David Chen', subject: 'Mathematics Department (M.Ed.)', bio: 'Mr. Chen makes complex mathematical concepts accessible and exciting, fostering a true understanding and appreciation for numbers.' },
    { name: 'Ms. Maria Rodriguez', subject: 'Humanities & Literature (M.A. in History)', bio: 'Ms. Rodriguez brings history to life by connecting past events to present-day issues, encouraging critical thinking and global awareness.' },
    { name: 'Mrs. Sofia Khan', subject: 'Creative Arts Director', bio: 'An accomplished artist herself, Mrs. Khan nurtures creativity and self-expression through various mediums in our vibrant arts program.' }
  ];

  return (
    <div className='flex bg-gray-100'>
      <div className='bg-yellow-400 h-screen fixed top-0'><SideMenu/></div>
      <div className="bg-gray-100 w-full">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">Academics at Regal Heights</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Fostering intellectual curiosity, critical thinking, and a lifelong love of learning.
            </p>
          </div>
          {/* Main content area with vertical spacing between sections */}
          <div className="space-y-16">
            {/* --- 1. CURRICULUM SECTION --- */}
            <section id='curriculum' className='bg-white p-8 rounded-xl shadow-lg'>
              <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-yellow-400 pl-4 mb-6">Our Curriculum</h2>
              <p className="text-gray-700 mb-6">
                Our curriculum is designed to be comprehensive, balanced, and challenging. We provide a robust educational framework that promotes intellectual growth, creativity, and personal development from the junior years through to graduation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Junior School */}
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Junior School (Grades 1-5)</h3>
                  <p className="text-gray-600">Focus on foundational skills in literacy and numeracy, while sparking curiosity through project-based learning in science, arts, and social studies.</p>
                </div>
                {/* Middle School */}
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Middle School (Grades 6-8)</h3>
                  <p className="text-gray-600">Emphasis on developing critical thinking, research skills, and independence. Students explore a wider range of subjects and take on more complex projects.</p>
                </div>
                {/* Senior School */}
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Senior School (Grades 9-12)</h3>
                  <p className="text-gray-600">Preparation for university and beyond with specialized course options, including Advanced Placement (AP) programs and leadership development.</p>
                </div>
              </div>
            </section>
            {/* --- 2. SUBJECTS & PROGRAMS SECTION --- */}
            <section id='subjects-programs' className='bg-white p-8 rounded-xl shadow-lg'>
              <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-yellow-400 pl-4 mb-6">Subjects & Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: STEM */}
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-yellow-400 text-white p-3 rounded-full"><ScienceIcon /></div>
                    <h3 className="text-xl font-semibold text-gray-800">STEM</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Mathematics & Advanced Calculus</li>
                    <li>Physics, Chemistry, Biology</li>
                    <li>Computer Science & Robotics</li>
                    <li>Environmental Science (AP)</li>
                  </ul>
                </div>
                {/* Card 2: Humanities */}
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-yellow-400 text-white p-3 rounded-full"><BookIcon /></div>
                    <h3 className="text-xl font-semibold text-gray-800">Humanities</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>World History & Geography</li>
                    <li>English Literature & Composition</li>
                    <li>Economics & Political Science</li>
                    <li>World Languages (French, Spanish)</li>
                  </ul>
                </div>
                {/* Card 3: The Arts */}
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-yellow-400 text-white p-3 rounded-full"><PaletteIcon /></div>
                    <h3 className="text-xl font-semibold text-gray-800">The Arts & More</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Visual Arts & Digital Media</li>
                    <li>Music (Vocal and Instrumental)</li>
                    <li>Drama & Theatre Production</li>
                    <li>Physical Education & Health</li>
                  </ul>
                </div>
              </div>
            </section>
            {/* --- 3. FACULTY SECTION --- */}
            <section id='faculty' className='bg-white p-8 rounded-xl shadow-lg'>
              <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-yellow-400 pl-4 mb-6">Our Expert Faculty</h2>
              <p className="text-gray-700 mb-8 max-w-3xl">
                Our teachers are the heart of Regal Heights. They are passionate experts in their fields, dedicated to mentoring and inspiring each student to achieve their full potential.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {facultyMembers.map((member, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                    {/* Placeholder for a faculty photo */}
                    <div className="w-24 h-24 rounded-full bg-yellow-200 mx-auto mb-4 flex items-center justify-center">
                       <span className="text-yellow-600 text-4xl font-bold">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-yellow-600 font-semibold text-sm mb-2">{member.subject}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AcademicsPage;