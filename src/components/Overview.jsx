import React from 'react'

const Overview = () => {
  return (
    <div className='overview-page' id='overview'>
      <div className="left-grid">
            <h2>246 Syd Circle</h2>
            <div className="text-property">Introducing 246 Syd Circle, a stunning property located in the desirable city of Newport Beach, CA.
                    This exquisite home boasts an impressive 4 bedrooms and 6 bathrooms, providing ample space for comfortable living.
                    With its generous size of 4,900 square feet and situated on a sizable 12,500 square foot lot,
                    this residence offers both luxury and room to roam.As you step inside this remarkable abode, 
                    you'll immediately notice the attention to detail and high-quality finishes throughout.
                    The gleaming hardwood floors create an elegant ambiance that flows seamlessly from room to room. 
                    Oversized windows flood the interior with natural light, illuminating every corner of this beautiful home.
                    The large ...
                </div>
                <div className="img1-container">
                    
                    <img src='/public/R.jpg'
                        className='overview-image1'/>
                    <div className="background-div-1" />
                    
                </div>
                
                
      </div>
    

      <div className="right-grid">
        
        <img src='/public/neat-organised-workspace-with-guitar.jpg'
        className='overview-image2'/>
        <div className="background-div-2" />

      </div>
    </div>
  )
}

export default Overview
