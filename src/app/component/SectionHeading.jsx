import React from 'react';

const SectionHeading = ({ index, label, title }) => {
  return (
    <div className='mb-12 md:mb-16'>
      <div className='flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]'>
        <span className='text-accent'>{index}</span>
        <span className='h-px w-10 bg-linear-to-r from-accent to-transparent' />
        <span className='text-muted'>{label}</span>
      </div>
      <h2 className='mt-4 text-4xl md:text-5xl font-bold tracking-tight text-ink'>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
