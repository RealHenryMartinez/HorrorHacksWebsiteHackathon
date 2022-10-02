import React from 'react'
import AboutUs from '../HomeLayout.js/AboutUs'
import Description from '../HomeLayout.js/Description'
import GameGallery from '../HomeLayout.js/GameGallery'

import { NavLink } from '../NavbarElements'

const Home = () => {
  
  return (
    <>
      <div className='flex max-w-none bg-[#3d2c3c] py-10'>
          <Description />
          <GameGallery />
          
      </div>
      <div className='bg-[#3d2c3c]  py-10 justify-center'>
        
            <NavLink 
              to="/game" 
              activeStyle={{ color: 'black' }}
              className='navbutton justify-center'

            >
              <a href="https://replit.com/@HenryMartinez8/python?v=1" className='p-5 px-10 rounded-full bg-[#ffc77d] text-[#f5764f] font-semibold text-xl hover:bg-[#fcb04c] hover:text-[#fa6d42]'>Play Now</a>

            </NavLink>
          
        </div>
      
      <div className='flex max-w-none bg-[#fff4f4] py-10'>
        <AboutUs />
      </div>
    </>
    
    
  )
}

export default Home