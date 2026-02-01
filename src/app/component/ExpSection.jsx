import React from 'react';
import ExpCard from './ExpCard';

const experiencesData = [
    {
        id: 1,
        type: "Internship",
        title: "Software Engineer Intern",
        company: "Hela Apparel Holdings PLC",
        timePeriod: "September 2025 – Present",
        responsibilities: [
            "Front-end development using Angular, including UI implementation and system integration.",
            "Back-end development with .NET for building scalable and secure services.",
            "API testing and validation to ensure reliable communication between services.",
            "Proposed and initiated the introduction of an enterprise social network (ESN) to improve internal communication.",
            "Developed workflow automation solutions using Power Apps and Power Automate.",
            "Worked with Microsoft Azure for cloud-based deployments and services."
        ],
        techStack: "Angular, .NET, Power Apps, Power Automate, Microsoft Azure"
    }
];

const ExpSection = () => {
    return (
        <section
            id="experience"
            className='ExpSection px-4 py-16 mt-12 text-justify text-white mb-10 relative'
        >
            <div className='mx-auto max-w-5xl'>
                <div className='text-center sm:text-3xl md:text-4xl text-5xl mb-10 font-bold text-blue-400'>
                    <h2>My Experience</h2>
                </div>

                <div className='flex flex-col gap-8'>
                    {experiencesData.map((experience) => (
                        <ExpCard
                            key={experience.id}
                            type={experience.type}
                            title={experience.title}
                            company={experience.company}
                            timePeriod={experience.timePeriod}
                            responsibilities={experience.responsibilities}
                            techStack={experience.techStack}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default ExpSection;