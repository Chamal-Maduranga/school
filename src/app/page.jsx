import Icon from '../../src/app/components/ico'

import React from 'react'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'

function page() {
  return (
    <div >
      <Header/>
      <div className='md:hidden'><SideBar/></div>
      <Main/>
      
      {/* <Icon name='home' className='text-2xl text-gray-400'/> */}
      
    </div>
  )
}

export default page
