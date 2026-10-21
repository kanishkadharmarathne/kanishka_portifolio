"use client";
import React,{ useState } from 'react';
import Link from 'next/link';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';

const ProjectCard = ({ index, imgUrl, title, description, tags, gitUrl, previewUrl, technologies }) => {
  const [expanded, setExpanded] = useState(false);
  const categories = tags.filter((tag) => tag !== "All");

  return (
    <article className='card group glass flex h-full flex-col overflow-hidden rounded-2xl'>
      <div className='relative aspect-[16/10] overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        <div className='absolute inset-0 bg-linear-to-t from-night via-night/20 to-transparent' />
        <span className='absolute right-4 top-4 font-mono text-xs text-ink/70'>
          {String(index + 1).padStart(2, "0")}
        </span>
        {categories.length > 0 && (
          <div className='absolute left-4 top-4 flex gap-2'>
            {categories.map((category) => (
              <span key={category} className='chip chip-accent bg-night/70 backdrop-blur'>{category}</span>
            ))}
          </div>
        )}
      </div>

      <div className='flex flex-1 flex-col p-6'>
        <h3 className='text-lg font-semibold leading-snug text-ink'>{title}</h3>
        <p className={`mt-3 text-sm leading-relaxed text-muted ${expanded ? '' : 'line-clamp-3'}`}>
          {description}
        </p>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className='mt-2 self-start font-mono text-xs text-accent hover:underline'
        >
          {expanded ? '− Show less' : '+ Read more'}
        </button>

        <div className='mt-5'>
          <p className='font-mono text-[11px] uppercase tracking-[0.2em] text-muted'>Technologies Used</p>
          <div className='mt-2 flex flex-wrap gap-2'>
            {technologies.map((tech) => (
              <span key={tech} className='chip'>{tech}</span>
            ))}
          </div>
        </div>

        <div className='mt-auto flex gap-3 pt-6'>
          <Link href={gitUrl} target="_blank" rel="noopener noreferrer" className='btn btn-ghost flex-1 !py-2.5'>
            <CodeBracketIcon className='h-4 w-4' />
            Code
          </Link>
          <Link href={previewUrl} target="_blank" rel="noopener noreferrer" className='btn btn-primary flex-1 !py-2.5'>
            <EyeIcon className='h-4 w-4' />
            Preview
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard;
