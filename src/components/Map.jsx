import React from 'react'

const Map = () => {
  return (
    <div className="map-section">

        <div className="map-title">Location Overview</div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378.5473880567809!2d22.963096069089467!3d40.62152072562004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838face737169%3A0xa9291839ea2749e0!2zzpPPgS4gzpvOsc68z4DPgc6szrrOtyAzMiwgzpjOtc-Dz4POsc67zr_Ovc6vzrrOtyA1NDYgMzg!5e0!3m2!1sel!2sgr!4v1699551617971!5m2!1sel!2sgr" 
            className='map'
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
         </iframe>
    </div>
  )
}

export default Map
