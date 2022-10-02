import React from 'react'
import Popup from 'reactjs-popup';

import Pumpkins from '../pages/Pumpkins'



const PumpkinCard = (props) => {
    
  return (
    // card
    <div className='-my-0 py-10'>
          {/* Image */}
          
          <div className='  p-10 bg-stone-200 '>
              <img  src={props.image} />
              <h1 className='text-gray-700'>{props.name}</h1>
              
              <Popup trigger={<button className='text-gray-900 bg-neutral-300 p-3 px-5 rounded-lg font-bold hover:animate-pulse ' >Trick or Treat?</button>} 
                position="right center">
                <div>
                  <h1>
                    what's 2 + 2
                  </h1>
                </div>
              </Popup>
          </div>
          {/* Details */}
         
              
              
              
              
         
          {/* Trick or Treat */}
         
        
    </div>
  )
}

export default PumpkinCard