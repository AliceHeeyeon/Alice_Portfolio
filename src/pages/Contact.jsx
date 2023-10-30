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
        <div className='contact-info'>
            <div className='contact-title section'>
                <h4>CONTACT INFO</h4>
            </div>
            <div className='contact-email section'>
                <p>EMAIL</p>
                <span>lovelyalice.kim@gmail.com</span>
            </div>
            <div className='contact-phone section'>
                <p>PHONE</p>
                <span>+64 27-581-7259</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
