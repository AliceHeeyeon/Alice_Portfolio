import { useState } from "react"
import { Link } from "react-router-dom"
import {BsArrowRight} from 'react-icons/bs'
import {BsXLg} from 'react-icons/bs'
import EmailForm from "./EmailForm"

const NavMenu = ({closeMethod}) => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = async() => {
    setShowModal(true)
  }

  return (
    <>
      <div className="background-filter"></div>
      <div className="nav-menu">
        <div className="nav-close" onClick={closeMethod}>
          <BsXLg/>
        </div>

        <div className="page-menu">
          <ul>
            <li>
              <Link to='/' onClick={closeMethod}>HOME</Link> 
            </li>
            <li>
              <Link to='/aboutme' onClick={closeMethod}>ABOUT ME</Link>
            </li>
            <li>
              <Link to='/projects' onClick={closeMethod}>PROJECTS</Link>
            </li>
            <li>
              <Link to='/contactme' onClick={closeMethod}>CONTACT ME</Link>
            </li>
          </ul>
        </div>

        <div className="social-menu">
          <ul>
            <li>
              <Link to='http://www.linkedin.com/in/alice-heeyeon-kim'>LINKEDIN</Link> 
            </li>
            <li>
              <Link to='https://github.com/AliceHeeyeon'>GITHUB</Link> 
            </li>
            <li>
              <Link to='https://medium.com/@lovelyalice.kim'>MEDIUM</Link> 
            </li>
          </ul>
        </div>

        <div className="nav-email">
          <button onClick={handleShowModal}>
              EMAIL<BsArrowRight/>
          </button>
        </div>

        {showModal && <EmailForm closeModal={() => {setShowModal(false), closeMethod()}}/>}

      </div>
    </>
    
  )
}

export default NavMenu
