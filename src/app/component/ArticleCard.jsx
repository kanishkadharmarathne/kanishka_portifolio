import React from 'react';
import { ArrowDownTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const ArticleCard = ({title, description,source}) => {
  const fileType = source.split('.').pop().toUpperCase();

  return (
    <article className='card glass flex h-full flex-col rounded-2xl p-6'>
        <div className='flex items-center justify-between'>
            <div className='grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent'>
                <DocumentTextIcon className='h-5 w-5' />
            </div>
            <span className='chip'>.{fileType.toLowerCase()}</span>
        </div>
        <h3 className='mt-5 text-lg font-semibold leading-snug text-ink'>{title}</h3>
        <p className='mt-3 flex-1 text-sm leading-relaxed text-muted'>{description}</p>
        <a
            href={source}
            download
            className="btn btn-ghost group mt-6 w-full"
        >
            <ArrowDownTrayIcon className='h-4 w-4 transition-transform group-hover:translate-y-0.5' />
            Download
        </a>
    </article>
  )
}

export default ArticleCard;
