"use client"
import React,{ useEffect, useState } from 'react'
import Link from 'next/link'
import Navlink from './Navlink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';

const navlinks = [
    {
        title: "Home",
        path: "/",
    },{
        title: "Experience",
        path: "/#experience"
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

const sectionId = (path) => (path === "/" ? "home" : path.split("#")[1]);

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        // Highlight the link of the section currently in view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        navlinks
            .map((link) => document.getElementById(sectionId(link.path)))
            .filter(Boolean)
            .forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <div className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${scrolled || navbarOpen ? 'glass shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]' : 'border border-transparent'}`}>
            <div className="flex items-center justify-between px-4 py-3">
                <Link href={"/"} className="group flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-accent to-accent-2 font-mono text-sm font-bold text-night shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                        KD
                    </span>
                    <span className="leading-tight">
                        <span className="block text-sm sm:text-base font-semibold text-ink">Kanishka Dharmarathne</span>
                    </span>
                </Link>

                <div className="menu hidden lg:block" id="navbar">
                    <ul className="flex items-center gap-1">
                       {
                        navlinks.map((link, index) => (
                            <li key={index}>
                                <Navlink href={link.path} title={link.title} active={active === sectionId(link.path)} />
                            </li>
                        ))
                       }
                    </ul>
                </div>

                <Link href="/#contact" className="btn btn-primary hidden lg:inline-flex !py-2 !px-4 text-sm">
                    Let&apos;s Talk
                </Link>

                <div className="mobile-menu lg:hidden block">
                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        aria-label={navbarOpen ? "Close menu" : "Open menu"}
                        className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.03] text-ink hover:border-accent/50 hover:text-accent transition-colors"
                    >
                        {navbarOpen ? <XMarkIcon className='w-5 h-5' /> : <Bars3Icon className='w-5 h-5' />}
                    </button>
                </div>
            </div>
            {navbarOpen ? (
                <MenuOverlay
                    links={navlinks}
                    isActive={(path) => active === sectionId(path)}
                    onNavigate={() => setNavbarOpen(false)}
                />
            ) : null}
        </div>
    </nav>
  )
}

export default Navbar;
