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
      <div className='about-mystory page-section'>
        <h4>MY STORY</h4>
        <div className='project-detail'>
          <p className='mystory'>
            My career story is quite unique. I worked at an Korean government's IT research Institute, in a position as an IT Curator delivering their technological achievements to the public. I had more than 15,000 public speaking engagements during my time there, which made me confident in presenting to large audiences. After 6 years of work, I decided to change my environment and lead a more active life.
          </p>
          <p className='mystory'>
            I moved to New Zealand and started a career as a restaurant manager. While I enjoyed my job, the pandemic significantly changed my thoughts about my long-term career path. This prompted me to challenge myself to learn tech skills from the ground up.  
          </p>
          <p className='mystory'>
            At Yoobee College, I met amazing tutors and students who made me comfortable on my learning journey. Thanks to them, I discovered my passion for coding. I fell in love with JavaScript and delved even deeper into managing complex structures. This portfolio website is a testament to my journey.
          </p>
          <p>
            Outside of work, I like to explore the BEST CROISSANT IN THE WORLD, so please let me know if you know where to find them!
          </p>
        </div>
        

      </div>
      <div className='about-education page-section'>
        <h4>EDUCATION</h4>
        <div className='project-detail'>
          <div className='education-section'>
            <p className='degree'>Diploma in Web & UX Design(Level6)</p>
            <p>Yoobee Colleges(New Zealand)</p>
            <p>Feb 2023 - Jan 2024</p>
          </div>
          <div className='education-section'>
            <p className='degree'>Master in Public Policy</p>
            <p>Chung-Nam University(S.Korea)</p>
            <p>Mar 2013 - Feb 2015</p>
          </div>
          <div>
            <p className='degree'>Bachelor in Tourism Management</p>
            <p>Dong-A University(S.Korea)</p>
            <p>Mar 2007 - Feb 2012</p>
          </div>
        </div>
        
      </div>

      <div className='about-certification page-section'>
        <h4>CERTIFICATION</h4>
        <div className='project-detail'>
          <p className='cert-title'>AWS Certified Cloud Practitioner</p>
          <p>Issued on 02 Mar 2024</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
