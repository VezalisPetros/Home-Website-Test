import React from 'react'
import Header from './Header'


const MainPage = () => {
  return (
    <div className='mainPageContainer'>
        <Header/>
        <div className="place-scrollDownBtn">
            <h1>246 Syd Circle</h1>
            <a href="#overview"className='scrollDownBtn'>
            <span class="material-symbols-outlined">
                south
                </span>
            </a>

        </div>
        
      
    </div>
  )
}

export default MainPage
