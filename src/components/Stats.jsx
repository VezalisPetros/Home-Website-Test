import React from 'react'

const Stats = () => {
  return (
    <>
    <div className="location">246 Syd Circle</div>
    
    <div className='stats-page'>
        
      <div className="price">
        <div >Offered At</div>
        <span>$150/day</span>
      </div>
      <div className="rooms">
        <div className="bed">
        <span class="material-symbols-outlined " style={{ fontSize: '60px' }}>
                bed
                </span>
            <span>4 Beds</span>
        </div>
        <div className="bath">
            <span class="material-symbols-outlined" style={{ fontSize: '60px' }}>
            bathtub
            </span>
            <span>6 Baths</span>
        </div>
        <div className="squares">
        <span class="material-symbols-outlined" style={{ fontSize: '60px'}}>
            crop
        </span>
        <span>4,900 sqft</span>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Stats
