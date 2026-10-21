import React from 'react';

const ExpCard = ({ type, title, company, timePeriod, responsibilities, techStack }) => {
    return (
        <article className='card glass rounded-2xl p-6 sm:p-8'>
            <div className='flex flex-col-reverse gap-4 sm:flex-row sm:items-start sm:justify-between'>
                <div>
                    <span className='chip chip-accent uppercase tracking-widest'>{type}</span>
                    <h3 className='mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-ink'>
                        {title}
                    </h3>
                    <p className='mt-1 font-medium text-accent'>{company}</p>
                </div>
                <div className='self-start shrink-0 rounded-xl border border-line bg-white/[0.02] px-4 py-2 font-mono'>
                    <span className='block text-[10px] uppercase tracking-[0.2em] text-muted'>Time Period</span>
                    <span className='text-sm text-ink'>{timePeriod}</span>
                </div>
            </div>

            <ul className='mt-6 grid gap-3 text-[15px] leading-relaxed text-ink/80'>
                {responsibilities.map((responsibility, index) => (
                    <li key={index} className='flex gap-3'>
                        <span className='mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-accent' />
                        <span>{responsibility}</span>
                    </li>
                ))}
            </ul>

            <div className='mt-6 border-t border-line pt-5'>
                <p className='font-mono text-[11px] uppercase tracking-[0.2em] text-muted'>Tech Stack</p>
                <div className='mt-3 flex flex-wrap gap-2'>
                    {techStack.split(',').map((tech) => (
                        <span key={tech} className='chip'>{tech.trim()}</span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default ExpCard;
