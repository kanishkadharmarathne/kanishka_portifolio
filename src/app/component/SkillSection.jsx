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
  SiSupabase,
  SiClickup,
  SiFigma,
  SiPostman,
  SiJira,
} from "react-icons/si";
import { VscAzureDevops,VscAzure,VscGraph  } from "react-icons/vsc";
import { FaNode } from "react-icons/fa";
import { PiMicrosoftPowerpointLogoBold } from "react-icons/pi";
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

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

const categories = [
    { title: "Frontend", skills: frontend },
    { title: "Backend", skills: backend },
    { title: "Database Management", skills: database },
    { title: "Programming Languages", skills: languages },
    { title: "User Interface Designing", skills: designTools },
    { title: "Project Management tools", skills: projectManagementTools },
    { title: "Version Control", skills: versionControl },
    { title: "Cloud Platforms", skills: cloudPlatforms },
    { title: "Power Apps", skills: powerapps },
];

const SkillSection = () => {
  return (
    <section id="skills" className='py-20 md:py-24'>
        <Reveal>
            <SectionHeading index="02" label="skills" title="Technical Skills" />
        </Reveal>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {categories.map((category, index) => (
                <Reveal key={category.title} delay={(index % 3) * 0.08} className='h-full'>
                    <div className='card glass h-full rounded-2xl p-6'>
                        <div className='flex items-start justify-between gap-4'>
                            <div>
                                <p className='font-mono text-[11px] text-accent/80'>
                                    {`// ${String(index + 1).padStart(2, "0")}`}
                                </p>
                                <h3 className='mt-1 text-lg font-semibold text-ink'>{category.title}</h3>
                            </div>
                            <span className='rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted'>
                                {category.skills.length}
                            </span>
                        </div>
                        <div className='mt-5 flex flex-wrap gap-2'>
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group/skill flex items-center gap-2 rounded-lg border border-line bg-white/[0.02] px-3 py-2 text-sm text-ink/85 transition-colors hover:border-accent/40 hover:bg-accent/5 hover:text-ink"
                                >
                                    <skill.icon className="h-4 w-4 text-muted transition-colors group-hover/skill:text-accent" />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
    </section>
  )
}

export default SkillSection;
