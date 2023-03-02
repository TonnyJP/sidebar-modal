import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useAppContext } from './context'

const Home = () => {
  const { isSidebarShown, showModal, showSidebar} = useAppContext()
  return (
    <main>
      {!isSidebarShown && <button onClick={showSidebar} className={`${!isSidebarShown && "sidebar-toggle"}`}> < FaBars/></button>}
      <button className='btn' onClick={showModal}> show modal</button>
    </main>
  )
}

export default Home
