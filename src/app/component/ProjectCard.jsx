import React from 'react';
import Link from 'next/link';
import { CodeBracketIcon,EyeIcon } from '@heroicons/react/24/solid';

const ProjectCard = ({ imgUrl, title, description, tags, gitUrl, previewUrl }) => {
  return (
  <div className='border-4 border-blue-400 rounded-xl shadow-lg flex flex-col w-full max-w-[370px] mx-auto'>
    <div className='h-52 md:h-72 relative group flex-shrink-0' 
       style={{backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='overlay items-center justify-center top-0 absolute left-0 w-full h-full bg-blue-300 bg-opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500'>
         <Link href={gitUrl} className='h-14 w-14 mr-2 relative rounded-full border-white hover:border-amber-200 group/link'>
          <CodeBracketIcon className='w-10 h-10 text-blue-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
         </Link>
         <Link href={previewUrl} className='h-14 w-14 relative rounded-full border-white hover:border-amber-200 group/link'>
          <EyeIcon className='w-10 h-10 text-blue-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
         </Link>
      </div>
    </div>
    <div className='flex-1 flex flex-col justify-between text-white bg-black py-6 px-4'>
      <div>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <div className='max-h-24 md:max-h-32 overflow-y-auto pr-1'>
          <p className=''>{description}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard;