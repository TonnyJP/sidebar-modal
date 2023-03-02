import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useAppContext } from './context'
console.log()

const Sidebar = () => {
  const { isSidebarShown, showSidebar } = useAppContext()
  return (
  <section className={`sidebar ${isSidebarShown && "show-sidebar"}`}>
    <div className='sidebar-header'>
      <img src={logo} alt="coding addict" className='logo' />
      <button className='close-btn ' onClick={showSidebar}> <FaTimes /> </button>
    </div>
      <ul className='links'>
        {links.map((link) => {
          const {id, url, text, icon} = link
          return <li key={id}>
            <a href={url}>{icon} { text}</a>
          </li>
        })}
      </ul>
 
    <ul className='social-icons'>
      {social.map((socialIcon) => {
        const {id, url, icon } = socialIcon;
        return <li key={id}>
          <a href={url}> {icon}</a>
        </li>
      })}
    </ul>
  </section>)
}

export default Sidebar
