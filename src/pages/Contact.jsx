import { useEffect } from "react"

const Contact = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  },[])

  return (
    <div className='single-page page-container'>
      <h2>GET IN TOUCH</h2>
      <div id='contact-contents'>
        <div className='contact-image'>
            <img src='../image/contact-alice.jpg' alt='contact-alice'/>
        </div>
        <div id='contact-page' className='contact-info page-section'>
            <div className='contact-title'>
                <h4>CONTACT INFO</h4>
            </div>
            <div className='contact-email section'>
                <p>EMAIL</p>
                <span>lovelyalice.kim@gmail.com</span>
            </div>
            <div className='contact-linkedin section'>
                <p>LINKEDIN</p>
                <span>linkedin.com/in/alice-heeyeon-kim/</span>
            </div>
            <div className='contact-github section'>
                <p>GITHUB</p>
                <span>github.com/AliceHeeyeon</span>
            </div>
            <div className='contact-instagram section'>
                <p>MEDIUM</p>
                <span>medium.com/@lovelyalice.kim</span>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Contact
