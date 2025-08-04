"use client";
import React,{useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

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
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {filteredProjects.map((project) => (
            <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project.tags}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
          ))}
        </div>
    </section>
  )
}

export default ProjectSection;