import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
  const [ToggleMenu, setToggleMenu] = useState(false)

  return (
    <header className='flex w-full justify-between px-5 h-10 bg-slate-900 text-white'>
       <h1 className='pt-2'><a href="mailto:ajithkannan.ag@gmail.com">ajithkannan.ag@gmail.com</a></h1> 
        <nav className='pt-2'>
            <ul className='hidden gap-6 md:flex'>
                <li><a href="/">Home</a></li>
                <li className='scroll-smooth'><a href="/#about">About</a></li>
                <li><a href="/#project">Project</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
       {ToggleMenu && <nav className=' md:hidden '>
            <ul onClick={()=>setToggleMenu(!ToggleMenu)} className='flex flex-col mobile-nav'>
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#project">Project</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
        }
        <button onClick={()=>setToggleMenu(!ToggleMenu)} className='block md:hidden '><Bars3Icon className='h-5 text-white cursor-pointer'/> </button>
    </header>
  )
}

export default Header
