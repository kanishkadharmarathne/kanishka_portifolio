import React from 'react';

const ExpCard = ({ type, title, company, timePeriod, responsibilities, techStack }) => {
    return (
        <div className='relative px-6 py-10 sm:px-10 border-2 rounded-2xl border-blue-400 bg-black/95 shadow-[0_0_25px_rgba(59,130,246,0.2)]'>
            <div className='absolute -top-3 left-8 px-4 py-1 text-xs uppercase tracking-widest text-blue-200 bg-black border border-blue-400 rounded-full'>
                {type}
            </div>

            <div className='flex flex-col gap-6'>
                <div>
                    <h3 className='text-2xl sm:text-3xl font-bold text-blue-400'>
                        {title}
                    </h3>
                    <p className='text-blue-200/90 font-medium'>{company}</p>
                    <div className='mt-2 flex flex-wrap items-center gap-3 text-blue-200/90'>
                        <span className='inline-flex items-center gap-2 rounded-full border border-blue-400 px-3 py-1 text-xs sm:text-sm uppercase tracking-widest'>
                            Time Period
                        </span>
                        <span className='text-sm sm:text-base font-semibold'>{timePeriod}</span>
                    </div>
                </div>

                <ul className='space-y-3 text-base leading-relaxed text-white/90'>
                    {responsibilities.map((responsibility, index) => (
                        <li key={index} className='flex gap-3'>
                            <span className='mt-2 h-2 w-2 rounded-full bg-blue-400' />
                            <span>{responsibility}</span>
                        </li>
                    ))}
                </ul>

                <div className='pt-4 border-t border-blue-400/30'>
                    <p className='text-sm uppercase tracking-widest text-blue-300'>Tech Stack</p>
                    <p className='text-base font-semibold text-blue-200'>
                        {techStack}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExpCard;
