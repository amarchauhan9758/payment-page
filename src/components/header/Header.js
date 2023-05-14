import React from 'react'
import logo from "../../images/EDYODA.png"
import {AiOutlineSearch , AiOutlineDown } from "react-icons/ai";

function Header() {
  return (
    <div>
    <header className='' >
<nav className='flex md:flex-row flex-wrap items-center bg-white  py-2 justify-between flex-row container mx-auto' >
    <ul className=' gap-12 flex  flex-row ' >
      <img src={logo} alt="logo"  width="150px"   />

        <li className='flex items-center justify-center cursor-pointer gap-1 ' >Courses <span> <AiOutlineDown/> </span> </li>
        <li className='flex items-center justify-center cursor-pointer gap-1 ' >Program <span> <AiOutlineDown/> </span> </li>


    </ul>
    <ul className='flex md:flex-row flex-wrap gap-12 items-center' >
        <span><AiOutlineSearch/></span>
        <button>Log in</button>
        <button className=' bg-gradient-to-r from-cyan-500 to-blue-500  text-white  px-5 py-2 rounded-3xl uppercase ' >JOIN Now</button>
    </ul>
</nav>
    </header>

    </div>
  )
}

export default Header;