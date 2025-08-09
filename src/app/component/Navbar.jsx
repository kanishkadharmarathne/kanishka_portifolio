"use client"
import React,{ useState} from 'react'
import Link from 'next/link'
import Navlink from './Navlink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';

const navlinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Skills",
        path: "/#skills"
    },
    {
        title: "Projects",
        path: "/#projects",
    },
    {
        title: "Articles",
        path: "/#articles",
    },
    {
        title: "About",
        path: "/#about",
    },
    {
        title: "Contact",
        path: "/#contact"
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-100 ">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-8 ">
            <Link href={"/"} className="text-10xl md:text-3xl text-blue-400 font-semibold">
                Kanishka Dharmarthne 
            </Link>
            <div className="mobile-menu md:hidden block">
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="fles items-center text-slate-100 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white">
                            <Bars3Icon className='w-5 h-5' />
                        </button>
                    ):(
                        <button onClick={() => setNavbarOpen(false)} className="fles items-center text-slate-100 px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white">
                            <XMarkIcon className='w-5 h-5' />
                        </button>
                    )
                }

            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                   {
                    navlinks.map((link, index) => (
                        <li key={index}>
                            <Navlink href={link.path} title={link.title} />
                        </li>
                    ))
                   } 
                </ul>
            </div>

        </div>
        {navbarOpen ? <MenuOverlay links={navlinks}/>:null }
    </nav>
  )
}

export default Navbar