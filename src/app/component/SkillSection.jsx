import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiDotnet,
  SiPython,
  SiOpenjdk,
  SiC,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiSupabase,
  SiFirebase,
  SiClickup,
  SiFigma,
  SiPostman,
  SiJira,
  
} from "react-icons/si";
import { VscAzureDevops,VscAzure,VscGraph  } from "react-icons/vsc";
import { FaNode } from "react-icons/fa";
import { PiMicrosoftPowerpointLogoBold } from "react-icons/pi";

const frontend = [
    { name: "Angular", icon: SiAngular },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss }
];

const backend = [
    { name: "ASP .NET", icon: SiDotnet },
    { name: "Node.js", icon: FaNode },
    { name: "FastAPI", icon: SiPython },
    { name: "Typescript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Supabase", icon: SiSupabase },
    { name: "Postman", icon: SiPostman },
];

const database = [
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
];

const languages = [
    { name: "C", icon: SiC },
    { name: "Java", icon: SiOpenjdk },
    { name: "Python", icon: SiPython },
];

const designTools = [
    { name: "Figma", icon: SiFigma },
];

const projectManagementTools = [
    { name: "Jira", icon: SiJira },
    { name: "ClickUp", icon: SiClickup },
];

const versionControl = [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Azure DevOps", icon: VscAzureDevops }
];

const cloudPlatforms = [
    { name: "Azure", icon: VscAzure },
    { name: "Supabase", icon: SiSupabase },
];

const powerapps = [
    { name: "PowerAutomate", icon: PiMicrosoftPowerpointLogoBold },
    { name: "PowerBI", icon: VscGraph },
];


const SkillSection = () => {
  return (
    <section id="skills" className='SkillSection px-4 py-1.58 mt-12 text-justify text-white mb-10'>
        <div className='text-center sm:text-3xl md:text-4xl text-5xl mb-8 font-bold text-blue-400'>
            <h2>Technical Skills</h2>
        </div>
        <div className='sm:columns-1 md:columns-1 lg:columns-1 gap-x-12 gap-y-12'>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4 bg-black text-xl'>
            <span className='text-3xl font-bold text-blue-400'>
                <h1>Frontend</h1>
            </span>
            <div className='flex flex-wrap gap-2 mt-2'>
                {frontend.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center p-4 rounded-xl border hover:shadow-lg transition">
                        <skill.icon className="text-5xl text-blue-500 mb-2" />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4 bg-black text-xl'>
                <span className='text-3xl font-bold text-blue-400'>
                    <h1>Backend</h1>
                </span>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {backend.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center p-4 rounded-xl border hover:shadow-lg transition">
                            <skill.icon className="text-5xl text-blue-500 mb-2" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4 bg-black text-xl'>
                <span className='text-3xl font-bold text-blue-400'>
                    <h1>Database Management</h1>
                </span>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {database.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center p-4 rounded-xl border hover:shadow-lg transition">
                            <skill.icon className="text-5xl text-blue-500 mb-2" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4 bg-black text-xl'>
                <span className='text-3xl font-bold text-blue-400'>
                    <h1>Programming Languages</h1>
                </span>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {languages.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center p-4 rounded-xl border hover:shadow-lg transition">
                            <skill.icon className="text-5xl text-blue-500 mb-2" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4 bg-black text-xl'>
                <span className='text-3xl font-bold text-blue-400'>
                    <h1>User Interface Designing</h1>
                </span>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {designTools.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center p-4 rounded-xl border hover:shadow-lg transition">
                            <skill.icon className="text-5xl text-blue-500 mb-2" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4 bg-black text-xl'>
                <span className='text-3xl font-bold text-blue-400'>
                    <h1>Project Management tools</h1>
                </span>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {projectManagementTools.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center p-4 rounded-xl border hover:shadow-lg transition">
                            <skill.icon className="text-5xl text-blue-500 mb-2" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4 bg-black text-xl'>
                <span className='text-3xl font-bold text-blue-400'>
                    <h1>Version Control</h1>
                </span>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {versionControl.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center p-4 rounded-xl border hover:shadow-lg transition">
                            <skill.icon className="text-5xl text-blue-500 mb-2" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4 bg-black text-xl'>
                <span className='text-3xl font-bold text-blue-400'>
                    <h1>Cloud Platforms </h1>
                </span>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {cloudPlatforms.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center p-4 rounded-xl border hover:shadow-lg transition">
                            <skill.icon className="text-5xl text-blue-500 mb-2" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-2 py-2 border-2 rounded-2xl border-blue-400 mb-4 bg-black text-xl'>
                <span className='text-3xl font-bold text-blue-400'>
                    <h1>Power Apps</h1>
                </span>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {powerapps.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center p-4 rounded-xl border hover:shadow-lg transition">
                            <skill.icon className="text-5xl text-blue-500 mb-2" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        

    </section>
  )
}

export default SkillSection;