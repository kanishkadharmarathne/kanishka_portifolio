"use client";
import React,{useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { animate, motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'ClassMaster – Smart Tuition Class Management Platform',
    description: 'A full-stack web app using React, Tailwind CSS, Express.js, JavaScript, and MySQL for managing tuition classes in Sri Lanka. Developed the Institute Admin Dashboard with navigation, routes, database integration, and core management functions. Conducted manual testing and contributed to full project documentation.',
    image: "/images/Projects/1.png",
    tags: ["All", "Web Development"],
    gitUrl: "https://github.com/RasanjanaHerath/Class_Management",
    previewUrl: "https://github.com/RasanjanaHerath/Class_Management",
    technologies: ["ReactJS", "TailwindCSS", "ExpressJS", "JavaScript", "MySQL"]

  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description for project two.',
    image: "/images/Projects/2.jpeg",
    tags: ["All", "Web Development"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["Python", "OpenCV"]
  },
  {
    id: 3,
    title: 'Smart Traffic Management System',
    description: 'Developed an image processing based system that detects vehicle density at junctions and dynamically adjusts traffic signal timers to reduce congestion and improve traffic flow.',
    image: "/images/Projects/3.png",
    tags: ["All"],
    gitUrl: "https://github.com/kanishkadharmarathne/Smart-Traffic-Management-System",
    previewUrl: "https://github.com/kanishkadharmarathne/Smart-Traffic-Management-System",
    technologies: ["Python", "OpenCV"]
  }
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1}
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) => 
    project.tags.includes(tag)
  );

  return (
    <section id="projects" className='mb-12'>
        <h2 className='text-center sm:text-3xl md:text-4xl mb-8 text-5xl font-bold text-blue-400'>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-4 py-2 mb-4'>
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
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-12 md:gap-12'>
          {filteredProjects.map((project,index) => (
            <motion.li key = {index}
                      variants={cardVariants} 
                      initial="initial" 
                      animate={isInView ? "animate" : "initial"}
                      transition={{duration: 0.3, delay: index * 0.4}}>
              <ProjectCard 
                  key={project.id}
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