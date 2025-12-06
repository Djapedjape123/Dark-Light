import React from 'react'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

function NavbarComponent({ activeDark, setActiveDark }) {
  let navItems = [{
    title:'Home',
    path:'/'
  },{
    title:'About',
    path:'/about',
   

  }, {
    title:'Contact',
    path:'/contact'
  }];

  function toggleDarkMood() {
    setActiveDark(!activeDark);
  }
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between items-centers p-[10px]'>
        <h2 className='dark:text-white dark:font-extrabold font-extrabold'>#HEXA</h2>

        <ul className='flex items-center gap-[20px]'>

          {navItems.map((item, index) => (
            <li className='dark:text-white dark:font-bold text-black font-bold' key={index}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
          <div >
            {activeDark ? <FaSun  color='white' size={20} onClick={toggleDarkMood}/> : <FaMoon onClick={toggleDarkMood} />}


          </div>

        </ul>
      </div>



    </div>
  )
}

export default NavbarComponent