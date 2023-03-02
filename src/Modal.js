import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from './context'

const Modal = () => {
  const {isModalShown, showModal} = useAppContext()
  
  return (
    <>
     <div className={`modal-overlay ${isModalShown && "show-modal"}`}>
      <div className ="modal-container">
        <button className="close-modal-btn" onClick={showModal}> <FaTimes /></button>
        <h2>modal container</h2>
      </div>
     </div>
    </>
    )
}

export default Modal
