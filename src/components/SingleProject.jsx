import { useParams } from 'react-router-dom'
import projectData from '../../Projects.json'
import {BsArrowRight} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';

// Import Swiper style
import "swiper/css";

const extractImages = (imgObj) => {
    return Object.values(imgObj)
}

const SingleProject = () => {
    const {id} = useParams()

    const currentImages =  extractImages(projectData[id].image)
    const featuresArray = projectData[id].features
    
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
      <h2>{projectData[id].title}</h2>
      <div className='page-images'>
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
