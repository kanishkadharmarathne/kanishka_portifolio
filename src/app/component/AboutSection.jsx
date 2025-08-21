import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className='AboutSection px-4 py-8 border-4 rounded-2xl border-blue-400 mt-12'>
        <div className='text-center sm:text-3xl md:text-4xl mb-8 text-5xl font-bold text-blue-400'>
            <h2>About Me</h2>
            
        </div>
        <p className='items-center sm:text-xl md:text-3xl lg:text-lg justify-center text-justify py-1 text-white'>I am a dedicated undergraduate student with a B.Sc. in Computer Science, Statistics & Mathematics in Faculty of Science, University of Peradeniya. I am actively seeking a career opportunity to achieve my career goals and utilize my extensive knowledge. With a focus on providing valuable experience, I aim to contribute effectively to a team, deliver high-quality results, and continuously develop my professional skills. I am eager to take on new challenges, grow in my role, and make a significant impact in the field of Computer Science.</p>
        <div className='px-2 py-2 '>
            <span className='text-3xl font-bold text-blue-400'>
                <h1>Degree</h1>
            </span>
            <p>B.Sc.(Hons) Applied Science</p>
        </div>
        <div className='px-2 py-2'>
            <span className='text-3xl font-bold text-blue-400'>
                <h1>University</h1>
            </span>
            <p>Faculty of science, University of Peradeniya</p>
        </div>
        <div>
            <div className='px-2 py-2 text-white'>
                <div className='mb-10 border-l-4 border-blue-400 pl-4'>
                    <span className='text-1xl font-bold text-blue-400 '>
                        <h3>Passion for Scalable & Innovative Solutions</h3>
                    </span>          
                    <p>Driven by a passion for creating scalable, impactful digital experiences, I specialize in blending software development with quality assurance to build reliable and high-performing systems.</p>
                </div>
                <div className='mb-10 border-l-4 border-blue-400 pl-4'>
                    <span className='text-1xl font-bold text-blue-400 '>
                        <h3>Versatile Tech Stack & Development Skills</h3>
                    </span>
                    <p>Proficient in a wide range of technologies including React.js, Next.js, C, Python, Java, HTML, CSS, JavaScript, and MySQL.I bring both frontend finesse and backend strength to every project.</p>
                </div>
                <div className='mb-10 border-l-4 border-blue-400 pl-4'>
                    <span className='text-1xl font-bold text-blue-400 '>
                    <h3>Strong Foundations in Software Engineering & QA</h3>
                    </span>
                    <p>With solid expertise in software engineering, automation testing, and quality assurance, I focus on delivering clean code, seamless functionality, and efficient problem-solving all while managing time and challenges with precision.</p>
                </div>
                
                
            </div>
        </div>
    </section>
  )
}

export default AboutSection;