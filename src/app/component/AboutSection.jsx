import React from 'react'
import { AcademicCapIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const highlights = [
    {
        title: "Passion for Scalable & Innovative Solutions",
        text: "Driven by a passion for creating scalable, impactful digital experiences, I specialize in blending software development with quality assurance to build reliable and high-performing systems."
    },
    {
        title: "Versatile Tech Stack & Development Skills",
        text: "Proficient in a wide range of technologies including React.js, Next.js, C, Python, Java, HTML, CSS, JavaScript, and MySQL. I bring both frontend finesse and backend strength to every project."
    },
    {
        title: "Strong Foundations in Software Engineering & QA",
        text: "With solid expertise in software engineering, automation testing, and quality assurance, I focus on delivering clean code, seamless functionality, and efficient problem-solving all while managing time and challenges with precision."
    },
];

const AboutSection = () => {
  return (
    <section id="about" className='py-20 md:py-24'>
        <Reveal>
            <SectionHeading index="05" label="about" title="About Me" />
        </Reveal>

        <div className='grid gap-6 lg:grid-cols-5'>
            <Reveal className='lg:col-span-3'>
                <div className='card glass h-full rounded-2xl p-6 sm:p-8'>
                    <p className='text-base sm:text-lg leading-relaxed text-ink/85'>
                        Motivated graduate with a B.Sc. (Hons) in Applied Science from the University of Peradeniya, specializing in computer science related disciplines. Currently gaining hands-on industry experience as an
                        Associate Software Engineer at Emerald Clothing pvt Ltd, working with Angular, ASP.NET, cloud
                        services, and workflow automation. Possesses a strong foundation in full-stack development, API testing,
                        and modern web technologies, with a passion for building scalable, user-centric solutions. Eager to contribute to a dynamic team, continuously enhance technical expertise, and grow as a professional software
                        engineer.
                    </p>

                    <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                        <div className='rounded-xl border border-line bg-white/[0.02] p-5'>
                            <AcademicCapIcon className='h-6 w-6 text-accent' />
                            <h3 className='mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted'>Degree</h3>
                            <p className='mt-1 font-medium text-ink'>B.Sc.(Hons) Applied Science</p>
                        </div>
                        <div className='rounded-xl border border-line bg-white/[0.02] p-5'>
                            <BuildingLibraryIcon className='h-6 w-6 text-accent-2' />
                            <h3 className='mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted'>University</h3>
                            <p className='mt-1 font-medium text-ink'>Faculty of science, University of Peradeniya</p>
                        </div>
                    </div>
                </div>
            </Reveal>

            <div className='grid gap-4 lg:col-span-2'>
                {highlights.map((item, index) => (
                    <Reveal key={item.title} delay={index * 0.1}>
                        <div className='card glass h-full rounded-2xl p-5'>
                            <div className='flex gap-4'>
                                <span className='font-mono text-sm text-gradient font-bold'>
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className='font-semibold text-ink'>{item.title}</h3>
                                    <p className='mt-2 text-sm leading-relaxed text-muted'>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
  )
}

export default AboutSection;
