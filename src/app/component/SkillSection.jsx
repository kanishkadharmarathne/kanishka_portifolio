import React from 'react';

const SkillSection = () => {
  return (
    <section className='SkillSection px-4 py-1.58 mt-10 text-justify text-white mb-10'>
        <div className='text-center sm:text-3xl md:text-4xl text-5xl mb-8 font-bold text-blue-400'>
            <h2>Technical Skills</h2>
        </div>
        <div className='sm:columns-1 md:columns-2 lg:columns-2 gap-4'>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4'>
            <span className='text-2xl font-bold text-blue-400'>
                <h1>Frontend</h1>
            </span>
            <p>ReactJS, NextJS, Tailwind CSS, HTML, CSS, TypeScript</p>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4'>
                <span className='text-2xl font-bold text-blue-400'>
                    <h1>Backend</h1>
                </span>
                <p>ExpressJS, NodeJS, JavaScipt</p>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4'>
                <span className='text-2xl font-bold text-blue-400'>
                    <h1>Database Management</h1>
                </span>
                <p>MySQL, PostgreSQL, MongoDB</p>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4'>
                <span className='text-2xl font-bold text-blue-400'>
                    <h1>Programming Languages</h1>
                </span>
                <p>C, Java, Python</p>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4'>
                <span className='text-2xl font-bold text-blue-400'>
                    <h1>Automation and Testing tools</h1>
                </span>
                <p>Postman, Selenium</p>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4'>
                <span className='text-2xl font-bold text-blue-400'>
                    <h1>User Interface Designing</h1>
                </span>
                <p>Figma</p>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4'>
                <span className='text-2xl font-bold text-blue-400'>
                    <h1>Project Management tools</h1>   
                </span>
                <p>Jira, ClickUP</p>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4'>
                <span className='text-2xl font-bold text-blue-400'>
                    <h1>Version Control</h1>
                </span>
                <p>Git, GitHub</p>
            </div>
        </div>
        

    </section>
  )
}

export default SkillSection;