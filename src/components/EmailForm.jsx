import emailjs from '@emailjs/browser'
import {BsArrowRight, BsXLg} from 'react-icons/bs'
import { useState } from 'react';

const EmailForm = ({closeModal}) => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    function sendEmail(e) {
        e.preventDefault();

        //validation
        const name = e.target.name.value
        const email = e.target.email.value
        const subject = e.target.subject.value
        const message = e.target.message.value

        if (!name || !email || !subject || !message) {
            setErrorMessage('Please fill out all the fields')
            return
        } else {
            setSuccessMessage('Your Message has been sent successfully. I will get back to you as quickly as possible !')
        }
    
        emailjs.sendForm('service_5npzgk5', 'template_qztlof1', e.target, 'f-Rd5y2Wkgam_xZcn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
         
          setErrorMessage(null)
      };
    
      return (
        <div className='email-form-wrapper'>
            <div className='email-me'>

                <div className='email-header'>
                    <h3>EMAIL ME</h3>
                    <div onClick={closeModal} className='close-form'>
                        <BsXLg/>CLOSE
                    </div>
                
                    
                </div>

                <form onSubmit={sendEmail} id='email-form'>
                    <div className='form-section'>
                        <div className='label'>
                            <label>NAME</label>
                        </div>
                        <input type="text" name="name" />
                    </div>

                    <div className='form-section'>
                        <div className='label'>
                            <label>EMAIL</label>
                        </div>
                        <input type="email" name="email" />
                    </div>
                    
                    <div className='form-section'>
                        <div className='label'>
                            <label>SUBJECT</label>
                        </div>
                        <input type="text" name="subject" />
                    </div>
                   
                    <div className='form-section'>
                        <div className='label'>
                            <label>MESSAGE</label>
                        </div>
                        <textarea name="message" />
                    </div>

                    <div className='email-submit'>
                        <button type="submit" >
                            SUBMIT<BsArrowRight/>
                        </button>
                    </div>
                </form>

                {successMessage && 
                <div className='success-message'>
                    <img src='../../image/success-icon.png' alt='warning'/>
                    {successMessage}
                </div>}

                {errorMessage && 
                <div className='error-message'>
                    <img src='../../image/warning-icon.png' alt='warning'/>
                    {errorMessage}
                </div>}

            </div>
        </div>
      );
}

export default EmailForm
