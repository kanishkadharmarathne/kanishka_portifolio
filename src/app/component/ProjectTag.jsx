import React from 'react';

const ProjectTag = ({name, onClick,isSelected }) => {
    const buttonStyles = isSelected
    ? "bg-linear-to-r from-accent to-accent-2 text-night shadow-[0_8px_24px_-10px_rgba(34,211,238,0.8)]"
    : "text-muted hover:text-ink";
  return (
    <button className={`${buttonStyles} rounded-lg px-4 py-2 text-sm font-semibold transition-all cursor-pointer`}
            onClick={() => onClick(name)}
            >
        {name}
    </button>
  )
}

export default ProjectTag;
