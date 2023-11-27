import { useState, useRef, useEffect } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import projectData from '../../Projects.json'
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";


const Home = () => {
  const overlayRef = useRef(null);

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

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextProject = () => {
    const nextIndex = (currentIndex + 1) 
    setCurrentIndex(nextIndex)
  }

  const handlePreviousProject = () => {
    const nextIndex = (currentIndex - 1) 
    setCurrentIndex(nextIndex)
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
        <span>코딩과 디자인 모두 열정있는 개발자 김희연입니다</span>
        <button className='hover-btn2'>
          <Link to='/projects'>SEE PROJECTS<BsArrowRight/></Link>
        </button>
        </h1>
      </div>

      <div className='home-aboutme'>
        <img src='../image/home-alice.jpg' alt='home-alice'/>
        <div className='home-about-text'>
          <p>
            I have a particular interest in back-end development.<br/> I enjoy solving complex problems and am always eager to exceed expectations.
          </p>
          <div className='button-container'>
            <button>
              <Link to='/aboutme' onClick={handleBackToTop}>KNOW MORE ABOUT ME<BsArrowRight/></Link>
            </button>
          </div>
        </div>
      </div>

      <div className='home-projects'>
        <div className='project-info'>
          
          <div className='button-box'>
            <button onClick={handlePreviousProject} disabled={currentIndex === 0} id='left'><BsArrowLeft/></button>
            <button onClick={handleNextProject} disabled={currentIndex === projectData.length - 1} id='right'><BsArrowRight/></button>
          </div>

          <div className='info-box'>
            <p>PROJECT</p>
            <h5>{projectData[currentIndex].title}</h5>
          </div>
          <div className='info-box'>
            <p>TYPE</p>
            <h5>{projectData[currentIndex].type}</h5>
          </div>
          <div className='info-box'>
            <p>DATE</p>
            <h5>{projectData[currentIndex].date}</h5>
          </div>

        </div>
        <a href={`#/projects/${currentIndex}`} onClick={handleBackToTop}>
          <div className='project-image'>
              <img src={projectData[currentIndex].image['main-image']} alt='main-image'/>
              <img src={projectData[currentIndex].image['sub-image-1']} alt='sub-image'/>
          </div>
        </a>
      </div>
      
    </div>
  )
}

export default Home
