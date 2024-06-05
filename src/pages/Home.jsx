import { useState, useRef, useEffect } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import projectData from '../../Projects.json'
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";

const Home = () => {
  const overlayRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reversedProjectData = [...projectData].reverse();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  },[])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!overlayRef.current) return;

      const { clientX, clientY } = e
      const x = Math.round((clientX / window.innerWidth) * 100)
      const y = Math.round((clientY / window.innerHeight) * 100)

      gsap.to(overlayRef.current, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
      })
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  // smooth scroll effect
  const lenis = new Lenis();
    lenis.on('scroll', (e) => {
      console.log(e);
  })

  function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const handleNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reversedProjectData.length);
  }

  const handlePreviousProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reversedProjectData.length) % reversedProjectData.length);
  }

  const handleBackToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

  return (
    <div className='page-container home-page'>

      <div className='hero light-mode'>
        <h1>
        Hi, I am Alice
        <span>A passionate coder with creativity</span>
        <button className='hover-btn'>
          <Link to='/projects'>SEE PROJECTS<BsArrowRight/></Link>
        </button>
        </h1>
      </div>

      <div ref={overlayRef} className='hero overlay'>
        <h1>
        안녕하세요 저는
        <span>사용자의 경험을 디자인하는 개발자 김희연 입니다.</span>
        <button className='hover-btn2'>
          <Link to='/projects'>SEE PROJECTS<BsArrowRight/></Link>
        </button>
        </h1>
      </div>

      <div className='home-aboutme'>
        <div className='home-section'>
          <p>ABOUT ME</p>
        </div>
        <div className='home-about-text'>
          <p>
          Since 2023, I have been immersed in web development, finding a particular passion for programming upon learning JavaScript. I enjoy both creating engaging frontend pages and delving into backend architecture, and I continuously seek opportunities to enhance my skills.
          </p>
          <div className='button-container'>
            <button>
              <Link to='/aboutme' onClick={handleBackToTop}>MORE ABOUT ME<BsArrowRight/></Link>
            </button>
          </div>
        </div>
      </div>
      
      <div className='home-skills'>
        <div className='home-section'>
          <p>Skills & Project Demo</p>
        </div>
          <div className='skills-list'>
            <ul>
              <li>
                <p>JavaScript, React</p>
                <div className='project-link'>
                  <a href='https://www.31thoughts.com' target='_blank' rel='noopener noreferrer'>31thoughts,</a>
                  <a href='https://staysavvy.vercel.app/' target='_blank' rel='noopener noreferrer'>Staysavvy</a>
                </div>
              </li>
              <li>
                <p>TypeScript, Next.js</p>
                <div className='project-link'>
                  <a href='https://translang-two.vercel.app/' target='_blank' rel='noopener noreferrer'>Translang</a>
                </div>
              </li>
              <li>
                <p>Node.js, Express</p>
                <div className='project-link'>
                  <a href='https://github.com/AliceHeeyeon/WUX-Project' target='_blank' rel='noopener noreferrer'>
                  WUX Project</a>
                </div>
              </li>
              <li>
                <p>WordPress</p>
                <div className='project-link'>
                  <a href='https://redesign-kiwi-art-house.vercel.app/' target='_blank' rel='noopener noreferrer'>Kiwi Art House</a>
                </div>
              </li>
              <li>
                <p>Tailwind, MUI, GSAP</p>
                <div className='project-link'>
                  <a href='https://smart-power.vercel.app/' target='_blank' rel='noopener noreferrer'>Smart Power,</a>
                  <a href='https://alicekim.co.nz' target='_blank' rel='noopener noreferrer'>Portfolio Website</a>
                </div>
              </li>
              <li>
                <p>MySQL, AWS EC2</p>
                <div className='project-link'>
                  <a href='https://ottgeeks.vercel.app/' target='_blank' rel='noopener noreferrer'>OTTGEEKS</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

      <div className='home-projects'>
        <div className='project-info'>
          
          <div className='button-box'>
            <button onClick={handlePreviousProject} disabled={currentIndex === 0} id='left'><BsArrowLeft /></button>
            <button onClick={handleNextProject} disabled={currentIndex === reversedProjectData.length - 1} id='right'><BsArrowRight /></button>
          </div>

          <div className='info-box'>
            <p>PROJECT</p>
            <h5>{reversedProjectData[currentIndex].title}</h5>
          </div>
          <div className='info-box'>
            <p>TYPE</p>
            <h5>{reversedProjectData[currentIndex].type}</h5>
          </div>
          <div className='info-box'>
            <p>DATE</p>
            <h5>{reversedProjectData[currentIndex].date}</h5>
          </div>

        </div>
        <a href={`#/projects/${reversedProjectData[currentIndex].id}`} onClick={handleBackToTop}>
          <div className='project-image'>
              <img src={reversedProjectData[currentIndex].image['main-image']} alt='main-image'/>
              <img src={reversedProjectData[currentIndex].image['sub-image-1']} alt='sub-image'/>
          </div>
        </a>
      </div>
      
    </div>
  )
}

export default Home
