import { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import EmailForm from './EmailForm'

const Footer = ({closeMethod}) => {
  const [showModal, setShowModal] = useState(false)

  const handleBackToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

  return (
    <footer>

      <div className='footer-menu'>
        <div className='footer-sitemap'>
          <ul>
            <li>
                <Link to='/'>HOME</Link> 
              </li>
              <li>
                <Link to='/aboutme'>ABOUT ME</Link>
              </li>
              <li>
                <Link to='/projects'>PROJECTS</Link>
              </li>
              <li>
                <Link to='/contactme'>CONTACT ME</Link>
              </li>
          </ul>
        </div>
        <div className='footer-socialmedia'>
          <ul>
            <li>
              <Link to='https://www.instagram.com/hinneeee/'>INSTAGRAM</Link> 
            </li>
            <li>
              <Link to='http://www.linkedin.com/in/alice-heeyeon-kim'>LINKEDIN</Link> 
            </li>
            <li>
              <Link to='https://github.com/AliceHeeyeon'>GITHUB</Link> 
            </li>
          </ul>
        </div>
     
        <p
        onClick={handleBackToTop} 
        className='back-to-top'
        >
          BACK TO TOP
        </p>
      
       
      </div>

      <div className='footer-email'>
        <p>TALK TO ME</p>
        <div>
          <button id='email-cta' onClick={() => setShowModal(true)}>
            EMAIL<BsArrowRight/>
          </button>
        </div>
      </div>
       {showModal && <EmailForm closeModal={() => {setShowModal(false), closeMethod()}}/>}      

      <small className='copyright'>© 2023 ALICE HEEYEON KIM. ALL RIGHTS RESERVED</small>

    </footer>
  )
}

export default Footer
