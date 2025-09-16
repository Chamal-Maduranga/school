import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Loging from './Loging'
import SchoolName from './SchoolName'

function Header() {
  return (
    <div className='sticky top-0 z-20 bg-white border-1 border-gray-200 flex justify-between items-center pt-3.5 px-10 h-[140px] shadow-2xl'>
      <Logo/>
      <div>
        <div className='mb-2'><SchoolName/></div>
        <div><Menu/></div>
      </div>
      <Loging/>
    </div>
  )
}

export default Header
