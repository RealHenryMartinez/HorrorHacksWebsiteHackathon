import React from 'react'
import { useState } from 'react';

// component
import Creators from './Creators'

const AboutUs = () => {
    let Image1 = require('../assets/personIcon.png');

    const [names, setNames] = useState([
      {
        image: Image1,
        name: "Henry",
      },
      {
        image: Image1,
        name: "Ansh",
      },
      {
        image: Image1,
        name: "Rishikeshh",
      },
      
    ]);
    
  return (
    <div>
        <div>
            <h1 className='text-center text-6xl font-extrabold text-[#ffc77d] '>
                About Us
            </h1>
        </div>
        <div className='columns-3 gap-10 mx-10 mt-10 '>
        
            {names.map((user, index) => {
          return <Creators key={index}
            name={user.name} image={user.image}/>
            })}
        </div>
        
    </div>
  )
}

export default AboutUs