import React,{ useState } from 'react';
import Link from 'next/link';
import { CodeBracketIcon,EyeIcon,CommandLineIcon } from '@heroicons/react/24/solid';

const ProjectCard = ({ imgUrl, title, description, tags, gitUrl, previewUrl,technologies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);




  return (
    <>
      <div className='border-4 border-blue-400 rounded-xl shadow-lg flex flex-col w-full max-w-[370px] mx-auto relative'>
        {isModalOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20 rounded-xl">
            <div className="bg-black rounded-xl shadow-lg w-80 p-6 relative border-2 border-blue-400">
              <h2 className="text-white text-2xl font-bold mb-4">Technologies Used</h2>
              <ul className="list-disc list-inside text-blue-400 text-xl">
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-blue-400 hover:text-white"
              >
                ✖
              </button>
            </div>
          </div>
        )}
        <div className='h-52 md:h-72 relative group flex-shrink-0' 
          style={{backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className='overlay items-center justify-center top-0 absolute left-0 w-full h-full bg-blue-300 bg-opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500'>
            <Link href={gitUrl} className='h-14 w-14 mr-2 relative rounded-full border-white hover:border-amber-200 group/link'>
              <CodeBracketIcon className='w-10 h-10 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
            </Link>
            <Link href={previewUrl} className='h-14 w-14 relative rounded-full border-white hover:border-amber-200 group/link'>
              <EyeIcon className='w-10 h-10 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
            </Link>
            <button type="button" onClick={() => setIsModalOpen(true)} className='h-14 w-14 relative rounded-full border-white hover:border-amber-200 group/link bg-transparent'>
              <CommandLineIcon className='w-10 h-10 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
            </button>
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
    </>
  )
}

export default ProjectCard;