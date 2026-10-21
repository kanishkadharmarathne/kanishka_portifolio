"use client";
import React,{useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Cafe Management System',
    description: 'This website is a modern café platform that allows customers to explore the menu, learn about the cafe story, place orders, and get in touch with the team. It also includes an admin area for managing menu items, orders, and customer messages',
    image: "/images/Projects/5.png",
    tags: ["All", "Web Development"],
    gitUrl: "https://github.com/kanishkadharmarathne/Cafe",
    previewUrl: "https://cafe-app-kane-lab.vercel.app/",
    technologies: ["ReactJS", "Supabase"]

  },
  {
    id: 2,
    title: 'ClassMaster – Smart Tuition Class Management Platform',
    description: 'A full-stack web app using React, Tailwind CSS, Express.js, JavaScript, and MySQL for managing tuition classes in Sri Lanka. Developed the Institute Admin Dashboard with navigation, routes, database integration, and core management functions. Conducted manual testing and contributed to full project documentation.',
    image: "/images/Projects/1.png",
    tags: ["All", "Web Development"],
    gitUrl: "https://github.com/RasanjanaHerath/Class_Management",
    previewUrl: "https://github.com/RasanjanaHerath/Class_Management",
    technologies: ["ReactJS", "TailwindCSS", "ExpressJS", "JavaScript", "MySQL"]

  },
  {
    id: 3,
    title: 'SK Electrical - E-Commerce platform',
    description: 'SK Electrical is built using modern web technologies to ensure a fast, secure, and seamless shopping experience. The platform uses Next.js for a responsive frontend, Tailwind CSS for sleek UI design, and Node.js with Express for backend operations. Payment processing and email services are integrated for a smooth user experience, while MongoDB (or your database) handles reliable data storage.',
    image: "/images/Projects/2.png",
    tags: ["All", "Web Development"],
    gitUrl: "https://github.com/ByteSprintG/SK-CCTV",
    previewUrl: "https://github.com/ByteSprintG/SK-CCTV",
    technologies: ["NextJS", "TailwindCSS", "NodeJS", "ThreeJS", "Brevo Email"]
  },
  {
    id: 4,
    title: 'Smart Traffic Management System',
    description: 'Developed an image processing based system that detects vehicle density at junctions and dynamically adjusts traffic signal timers to reduce congestion and improve traffic flow.',
    image: "/images/Projects/3.png",
    tags: ["All"],
    gitUrl: "https://github.com/kanishkadharmarathne/Smart-Traffic-Management-System",
    previewUrl: "https://github.com/kanishkadharmarathne/Smart-Traffic-Management-System",
    technologies: ["Python", "OpenCV"]
  },
  {
    id: 5,
    title: 'AI Astrology Assistant',
    description: 'Developed an AI-powered astrology assistant using Langchain, Python, and Streamlit to provide personalized astrological insights and predictions.',
    image: "/images/Projects/4.png",
    tags: ["AI","All"],
    gitUrl: "https://github.com/kanishkadharmarathne/AI-powerd-Astrology-Assistant",
    previewUrl: "https://github.com/kanishkadharmarathne/AI-powerd-Astrology-Assistant",
    technologies: ["Langchain", "Python","Streamlit"]
  }
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.tags.includes(tag)
  );

  return (
    <section id="projects" className='py-20 md:py-24'>
        <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12 md:mb-16'>
            <div className='[&>div]:mb-0'>
                <SectionHeading index="03" label="projects" title="My Projects" />
            </div>
            <div className='glass inline-flex self-start md:self-auto rounded-xl p-1 gap-1'>
               <ProjectTag
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
                />
                <ProjectTag
                onClick={handleTagChange}
                name="Web Development"
                isSelected={tag === "Web Development"}
                />
                <ProjectTag
                onClick={handleTagChange}
                name="AI"
                isSelected={tag === "AI"}
                />
            </div>
        </div>
        <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects.map((project,index) => (
            <motion.li key={project.id}
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}>
              <ProjectCard
                  index={projects.indexOf(project)}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  tags={project.tags}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  technologies={project.technologies}
              />
            </motion.li>
          ))}
        </ul>
    </section>
  )
}

export default ProjectSection;
