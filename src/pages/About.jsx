import {useEffect} from 'react'

const About = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  },[])


  return (
    <div className='single-page page-container'>
      <h2>ABOUT ALICE</h2>
      <div id='about-image' className='page-images'>
        <img src='../image/about-alice.jpg' alt='about-alice'/>
      </div>
      <div className='page-description'>
        <h4>WHO AM I</h4>
        <p>
            I am a sociable person who loves to connect with people and can ease tension with humor when moments become intense.<br/>
            But I am serious about work and always try to exceed expectations. I truly believe that I can achieve anything I set my mind to, and my confidence stems from my ability to tackle challenges.
        </p>
      </div>
      <div className='page-feature'>
        <h4>TECHNICAL SKILLS</h4>
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS (+SASS)</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>NODE JS</li>
                <li>WORDPRESS</li>
                <li>FIGMA</li>
                <li>UX DESIGN</li>
            </ul>
        </div>
      </div>
      
    </div>
  )
}

export default About
