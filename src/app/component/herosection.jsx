"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { SiAngular, SiDotnet } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const ease = [0.22, 1, 0.36, 1];

const floatingChips = [
    { label: "Angular", icon: SiAngular, className: "-left-3 top-[28%] sm:-left-10" },
    { label: "ASP .NET Core", icon: SiDotnet, className: "-right-3 top-[48%] sm:-right-14" },
    { label: "Azure", icon: VscAzure, className: "-left-3 bottom-[14%] sm:-left-8" },
];

const herosection = () => {
  return (
    <section id="home" className='relative grid items-center gap-16 pt-32 pb-20 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-8'>
        <motion.div initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.7, ease}}
                    className="lg:col-span-7 text-center lg:text-left">
            <h1 className="mt-6 font-bold tracking-tight">
                <span className="block text-2xl sm:text-3xl font-medium text-muted mb-3">
                    Hello, I&apos;m
                </span>
                <span className="block min-h-[2.4em] text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15]">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Kanishka Dharmarathne',
                            1500,
                            'an Associate Software Engineer',
                            1500
                        ]}
                        wrapper="span"
                        speed={50}
                        className="text-gradient"
                        repeat={Infinity}
                    />
                </span>
            </h1>

            <p className="mx-auto lg:mx-0 mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
                Passionate about transforming ideas into scalable digital solutions through clean code, innovative approaches, and continuous improvement.
            </p>

            <div className='mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3'>
                <a
                    href="/KanishkaDharmarathne7_23_26.pdf"
                    download
                    className="btn btn-primary"
                >
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    Download CV
                </a>
                <Link href="/#contact" className="btn btn-ghost group">
                    Contact Me
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 font-mono text-xs text-muted">
                <span><span className="text-accent">@</span> Faculty Of Science, University Of Perdeniya, Sri Lanka.</span>
                <span><span className="text-accent-2">#</span> B.Sc.(Hons) Applied Science(Computer Science, Statistics, Mathematics)</span>
            </div>
        </motion.div>

        <motion.div initial={{opacity:0, scale:0.92}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:0.8, delay:0.15, ease}}
                    className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
                {/* Soft blue glow matching the sweater tone */}
                <div className="absolute inset-x-0 bottom-0 aspect-square rounded-full bg-linear-to-tr from-blue-600/40 via-accent/20 to-accent-2/30 blur-3xl" />

                {/* Circular stage with rotating ring */}
                <div className="ring-frame absolute inset-x-0 bottom-0 aspect-square rounded-full p-[2px]">
                    <div className="portrait-stage h-full w-full rounded-full" />
                </div>

                {/* Cut-out portrait: head pops out above the ring, bottom follows the circle */}
                <div className="portrait-mask absolute inset-0">
                    <Image
                        src="/images/hero-real.png"
                        alt="Kanishka Dharmarathne"
                        fill
                        sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
                        className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.55)]"
                        priority
                    />
                </div>

                {floatingChips.map((chip) => (
                    <div
                        key={chip.label}
                        className={`glass absolute z-10 ${chip.className} flex items-center gap-2 rounded-xl px-3 py-2 font-mono text-xs text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]`}
                    >
                        <chip.icon className="h-4 w-4 text-accent" />
                        {chip.label}
                    </div>
                ))}
            </div>
        </motion.div>
    </section>
  )
}

export default herosection;
