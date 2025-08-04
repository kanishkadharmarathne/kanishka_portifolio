import React from 'react'

const ProjectTag = ({name, onClick,isSelected }) => {
    const buttonStyles = isSelected
    ? "text-blue-400 border-blue-400"
    : "text-white border-white hover:border-white";
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}
            >
        {name}
    </button>
  )
}

export default ProjectTag;