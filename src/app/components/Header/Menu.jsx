// components/Menu.js
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Icon from '../ico'; // Make sure this path is correct

function Menu() {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  
  const menuItems = [
      {name:'Home', href: '/', icon:'home'},
      {name:'About', href: '/about' , icon:'about'},
      {name:'Admissions', href: '/admissions' , icon:'admissions', sections: ['Apply Online','Admission Process','Fees & Scholarships',]},
      {name:'Academics', href: '/academics', icon:'campus' , sections: ['Curriculum','Subjects / Programs','Faculty',]},
      {name:'Students', href: '/students', icon:'stedent', sections: ['Timetable','Assignments','Exams & Results','ELibrary']},
      {name:'Parents', href: '/parents', icon:'parent', sections: ['Notices','Events & Calendar','Fees Payment']},
      {name:'Teachers', href: '/teachers', icon:'teacher', sections: ['Dashboard','Attendance','Lesson Plans']},
      {name:'Announcements', href: '/announcements', icon:'academics'},
      {name:'Gallery', href: '/gallery', icon:'menu'},    
      {name:'Contact', href: '/contact', icon:'contact'},    
  ];
  const IconColors = [
    "text-red-400",
    "text-blue-400",
    "text-green-400",
    "text-yellow-400",
    "text-pink-400",
    "text-purple-400",
    "text-indigo-400",
    "text-orange-400",
    "text-teal-400",
    "text-cyan-400",
    "text-emerald-400",
    "text-lime-400",
    "text-rose-400",
    "text-slate-400"
  ];

  const createSectionId = (sectionName) => {
    return sectionName.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and');
  };

  const handleMainMenuClick = (index, hasSubMenu, href) => {
    if (hasSubMenu) {
      // Toggle submenu open/close
      setOpenMenuIndex(openMenuIndex === index ? null : index);
    } else {
      // For items without submenu, navigate directly
      router.push(href);
    }
  };

  const handleSubmenuClick = (href, sectionId) => {
    setOpenMenuIndex(null); // Close menu after clicking submenu
    
    // Check if we're already on the target page
    if (pathname === href) {
      // If we're on the same page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we're on a different page, navigate and then scroll
      router.push(`${href}#${sectionId}`);
    }
  };

  return (
    <nav className='flex gap-3 font-poppins tracking-normal text-gray-700 justify-center'>
      {menuItems.map((item, i) => (
        <div key={i} className="relative">
          {/* Main menu item */}
          <div
            onClick={() => handleMainMenuClick(i, !!item.sections, item.href)}
            className="px-3 py-2 rounded-md hover:bg-gray-100 flex items-center gap-1 cursor-pointer"
          >
            <Icon name={item.icon} className={`w-8 h-8 mr-1.5 ${IconColors[i % IconColors.length]}`}/>
            {item.name}
            {item.sections && <Icon name="dropDown" className="h-4 w-4" />}
          </div>
          
          {/* Conditionally rendered dropdown menu */}
          {item.sections && openMenuIndex === i && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-10">
              <ul className="py-2">
                {item.sections.map((section, sectionIndex) => {
                  const sectionId = createSectionId(section);
                  return (
                    <li key={sectionIndex}>
                      <button
                        onClick={() => handleSubmenuClick(item.href, sectionId)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {section}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Menu;