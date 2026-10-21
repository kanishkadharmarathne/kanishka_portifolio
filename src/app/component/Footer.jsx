import React from 'react';

const Footer = () => {
  return (
    <footer className='border-t border-line mt-12'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8 font-mono text-xs text-muted'>
        <p>© {new Date().getFullYear()} Kanishka Dharmarathne</p>
      </div>
    </footer>
  );
};

export default Footer;
