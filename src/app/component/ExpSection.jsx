import React from 'react';
import ExpCard from './ExpCard';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const experiencesData = [
    {
        id: 1,
        type: "Probationary Internship",
        title: "Associate Software Engineer",
        company: "Emerald Clothing pvt Ltd",
        timePeriod: "April 2026 – Present",
        responsibilities: [
            "Front-end development using Angular, including UI implementation and system integration.",
            "Back-end development with ASP .NET Core for building scalable and secure services.",
            "API testing and validation to ensure reliable communication between services.",
            "Developed workflow automation solutions using Power Apps and Power Automate.",
            "Worked with Microsoft Azure for cloud-based deployments and services.",
            "AI integration for enhancing application functionalities and business processes."
        ],
        techStack: "Angular,ASP .NET Core, Power Apps, Power Automate, Microsoft Azure, LLMs, AI Integration, Power BI"
    },
    {
        id: 2,
        type: "Internship",
        title: "Software Engineer Intern",
        company: "Hela Apparel Holdings PLC",
        timePeriod: "September 2025 – March 2026",
        responsibilities: [
            "Front-end development using Angular, including UI implementation and system integration.",
            "Back-end development with ASP .NET Core for building scalable and secure services.",
            "API testing and validation to ensure reliable communication between services.",
            "Proposed and initiated the introduction of an enterprise social network (ESN) to improve internal communication.",
            "Developed workflow automation solutions using Power Apps and Power Automate.",
            "Worked with Microsoft Azure for cloud-based deployments and services."
        ],
        techStack: "Angular,ASP .NET Core, Power Apps, Power Automate, Microsoft Azure"
    },
];

const ExpSection = () => {
    return (
        <section id="experience" className='py-20 md:py-24'>
            <Reveal>
                <SectionHeading index="01" label="experience" title="My Experience" />
            </Reveal>

            <ol className='relative'>
                {/* Timeline rail */}
                <span className='absolute left-[11px] top-3 bottom-3 w-px bg-linear-to-b from-accent via-accent-2/50 to-transparent' />

                {experiencesData.map((experience, index) => (
                    <li key={experience.id} className='relative pl-10 sm:pl-14 pb-10 last:pb-0'>
                        <span className='absolute left-0 top-8 grid h-6 w-6 place-items-center rounded-full border border-accent/50 bg-night'>
                            {index === 0 && (
                                <span className='absolute inset-0 animate-ping rounded-full bg-accent/30' />
                            )}
                            <span className='h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(34,211,238,0.9)]' />
                        </span>
                        <Reveal delay={index * 0.1}>
                            <ExpCard
                                type={experience.type}
                                title={experience.title}
                                company={experience.company}
                                timePeriod={experience.timePeriod}
                                responsibilities={experience.responsibilities}
                                techStack={experience.techStack}
                            />
                        </Reveal>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default ExpSection;
