import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import projectData from '../../Projects.json'
import {BsArrowRight} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap/gsap-core';

// Import Swiper style
import "swiper/css";

const extractImages = (imgObj) => {
    return Object.values(imgObj)
}

const SingleProject = () => {
    const {id} = useParams()
    const currentImages =  extractImages(projectData[id].image)
    const featuresArray = projectData[id].features
  
    useEffect(() => {
      const cursor = document.querySelector('.swipe-indicator');
      const imageSection = document.querySelector('.page-images');

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
             
  return (
    <div className='single-page page-container'>
      <div className='swipe-indicator'></div>
      <h2>{projectData[id].title}</h2>
      <div className='page-images project-mockup-slides'>
        <Swiper className="mySwiper">
            {images}
        </Swiper>
      </div>
      <div className='page-description'>
        <h4>ABOUT THE PROJECT</h4>
        <p>{projectData[id].description}</p>
      </div>
      <div className='page-feature'>
        <h4>KEY FEATURES</h4>
        <div>{features}</div>
      </div>
      <div className='tryapp'>
        <span></span>
        <Link to={projectData[id].url}>
          <button>
            TRY THE APP
            <BsArrowRight/>
          </button>
        </Link>
      </div>
      
    </div>
  )
}

export default SingleProject
