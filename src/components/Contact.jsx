import React from 'react'

const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
         
            <div className="contact-title">Get In Touch</div>
            <div className="contact-items">
                <div className="info">
                <div className="address">
                    <div className="icon-container">
                        <span className="material-symbols-outlined">
                            location_on
                        </span> 
                    </div>
                    
                    <h3>Address</h3>
                    <h4>246 Syd Circle</h4>
                </div>
                <div className="phone">
                     <div className="icon-container">
                        <span class="material-symbols-outlined">
                            call
                            </span>
                    </div>
                    <h3>Phone</h3>
                    <h4>30+6909817598</h4>
                </div>
                <div className="phone">
                    <div className="icon-container">
                        <span class="material-symbols-outlined">
                            mail
                            </span>
                    </div>
                    <h3>Email</h3>
                    <h4>petrosvez@gmail.com</h4>
                </div>
                </div>
                <div className="buttons-links">
                    <div className="title-button-links">
                        <div>Book Your Stay Now</div><span class="material-symbols-outlined">
                            south
                            </span>
                    </div>
                    
                    <a href='' className='airbnb-button'>AirBnb</a>
                    <a href=''className='booking-button'>Bokking</a>
                </div>
               
            </div>
            
    </div>
  )
}

export default Contact
