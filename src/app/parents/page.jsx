import React from 'react'

function page() {
  return (
    <div>
      <p>Parents Page</p>
      <section id='notices' className='w-10/12 bg-gray-200 text-black h-screen mx-auto mb-3.5'>
        <h2 className="text-2xl font-bold p-6">Notices</h2>
        <div className="p-6">
          Content for Notices section
        </div>
      </section>
      <section id='events-and-calendar' className='w-10/12 bg-gray-200 text-black h-screen mx-auto mb-3.5'>
        <h2 className="text-2xl font-bold p-6">Events & Calendar</h2>
        <div className="p-6">
          Content for Events & Calendar section
        </div>
      </section>
      <section id='fees-payment' className='w-10/12 bg-gray-200 text-black h-screen mx-auto mb-3.5'>
        <h2 className="text-2xl font-bold p-6">Fees Payment</h2>
        <div className="p-6">
          Content for Fees Payment section
        </div>
      </section>
    </div>
  )
}

export default page