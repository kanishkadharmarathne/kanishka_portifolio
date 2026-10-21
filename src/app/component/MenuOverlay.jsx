import React from 'react'
import Navlink from './Navlink'

const MenuOverlay = ({links, isActive, onNavigate}) => {
  return (
    <ul className="flex flex-col gap-1 border-t border-line px-3 py-3">
        {links.map((link, index) => (
            <li key={index}>
                <Navlink href={link.path} title={link.title} active={isActive(link.path)} onClick={onNavigate}/>
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay
