import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import projectData from '../../Projects.json'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap/gsap-core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

// Import Swiper style
import "swiper/css";

const extractImages = (imgObj) => {
    return Object.values(imgObj)
}

const SingleProject = () => {
    const {id} = useParams()
    const currentImages =  extractImages(projectData[id].image)
    const featuresArray = projectData[id].features
    const toolsArray = projectData[id].tools
    const projectUrl = projectData[id].url.project
  
    useEffect(() => {
      const cursor = document.querySelector('.swipe-indicator');
      const imageSection = document.querySelector('.page-images');

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      gsap.set(cursor, {xPercent: -50, yPercent: -50});

      const handleMouseMove = (e) => {
          gsap.to(cursor, 0.2, {x: e.clientX, y: e.clientY});
      };

      const handleMouseEnter = () => {
          cursor.classList.add("active");
      };

      const handleMouseLeave = () => {
          cursor.classList.remove("active");
      };

      window.addEventListener('mousemove', handleMouseMove);
      imageSection.addEventListener("mouseenter", handleMouseEnter);
      imageSection.addEventListener("mouseleave", handleMouseLeave);

      // This function will run when the component is unmounted.
      // It will remove the event listeners to avoid memory leaks.
      return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          imageSection.removeEventListener("mouseenter", handleMouseEnter);
          imageSection.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    
    const images = currentImages.map((image, index) => {
        return (
            <SwiperSlide key={index}>
                <img src={image} alt={`Image ${index + 1} for ${projectData[id].title}`} />
            </SwiperSlide>
        )
    })

    const features = featuresArray.map((feature, index) => {
        return (
            <ul key={index}>
                <li>{feature}</li>
            </ul>
        )
    })

    const tools = toolsArray.map((tool, index) => {
      return (
          <ul key={index}>
              <li>{tool}</li>
          </ul>
      )
    })
             
  return (
    <div className='single-page page-container'>
      <div className='swipe-indicator'></div>
      <div className='page-title-container'>
        <h2>{projectData[id].title}</h2>
        <div className='links'> 
          <div className='link-btn'>
            <Link to={projectData[id].url.github}>
              <GitHubIcon />
              <span className="link-text">GITHUB</span>
            </Link>
          </div>
          {projectUrl ? 
            <>
              <div className='link-btn'>
                <Link to={projectUrl}>
                  <LanguageIcon />
                  <span className="link-text">PROJECT</span>
                </Link>
              </div>  
            </> : null
          }
        </div>
      </div>
      
      <div className='page-images project-mockup-slides'>
        <Swiper className="mySwiper">
            {images}
        </Swiper>
      </div>
      <div className='page-description page-section'>
        <h4>PROJECT OVERVIEW</h4>
        <div className='project-detail'>{projectData[id].description}</div>
      </div>
      <div className='page-tools page-section'>
        <h4>TOOLS</h4>
        <div className='project-detail'>{tools}</div>
      </div>
      <div className='page-feature page-section'>
        <h4>KEY FEATURES</h4>
        <div className='project-detail'>{features}</div>
      </div>
      <div className='page-challenges page-section'>
        <h4>CHALLENGES</h4>
        <div className='project-detail'>{projectData[id].challenges}</div>
      </div>
      <div className='page-troubleshooting page-section'>
        <h4>TROUBLESHOOTING</h4>
        <div className='project-detail'>{projectData[id].troubleshooting}</div>
      </div>
      <div className='page-outcome page-section'>
        <h4>OUTCOME</h4>
        <div className='project-detail'>{projectData[id].outcome}</div>
      </div>
      
    </div>
  )
}

export default SingleProject
