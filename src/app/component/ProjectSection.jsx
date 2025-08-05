"use client";
import React,{useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { animate, motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description for project one.',
    image: "/images/Projects/1.jpeg",
    tags: ["All", "Web Development"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description for project two.',
    image: "/images/Projects/2.jpeg",
    tags: ["All", "Web Development"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description for project three.',
    image: "/images/Projects/3.jpeg",
    tags: ["All"],
    gitUrl: "/",
    previewUrl: "/"
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
    <section>
        <h2 className='text-center sm:text-3xl md:text-4xl mb-8 text-5xl font-bold text-blue-400'>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-2'>
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
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
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
              />
            </motion.li>
          ))}
        </ul>
    </section>
  )
}

export default ProjectSection;