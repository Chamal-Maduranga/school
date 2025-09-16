import React from 'react'
import SideMenu from '../components/SideBar/SideBar'
// Assuming these components are in the correct path
import StudentApplicationForm from '../components/Admission/StudentApplicationForm'
import AdmissionProcess from '../components/Admission/AdmissionProcess'
import FeesAndScholarships from '../components/Admission/FeesAndScholarships'

function Page() {
  return (
    <div className="flex bg-gray-50">
      {/* 1. STICKY SIDEBAR */}
      {/* This stays fixed on the left and does not scroll. */}
      <div className="bg-green-400 h-screen sticky top-0">
        <SideMenu />
      </div>

      {/* 2. MAIN SCROLLABLE CONTENT AREA */}
      {/* This container takes the rest of the width, fills the screen height, and handles all scrolling. */}
      <main className="w-full h-screen overflow-y-auto">
        <div className="p-4 sm:p-6 lg:p-8 space-y-12">
          
          {/* Section 1: Apply Online */}
          <section id="apply-online" className="max-w-5xl mx-auto">
            <StudentApplicationForm />
          </section>

          {/* Section 2: Admission Process */}
          <section id="admission-process" className="max-w-5xl mx-auto">
            <AdmissionProcess />
          </section>

          {/* Section 3: Fees & Scholarships */}
          <section id="fees-and-scholarships" className="max-w-5xl mx-auto">
            <FeesAndScholarships />
          </section>

        </div>
      </main>
    </div>
  )
}

export default Page