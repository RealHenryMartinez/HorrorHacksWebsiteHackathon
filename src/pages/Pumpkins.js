import React from 'react'
import PumpkinCard from '../Cards/PumpkinCard'
import { useState } from 'react'
import { useTheme } from 'styled-components';

const Pumpkins = (props) => {
  // image
    let Image1 = require('../assets/Pumpkin.png');

    const [names, setNames] = useState([
      {
        image: Image1,
        name: "BoB",
      },
      {
        image: Image1,
        name: "Phillip",
      },
      {
        image: Image1,
        name: "Tod",
      },
      {
        image: Image1,
        name: "Pump",
      },
      {
        image: Image1,
        name: "Boo",
      },
      {
        image: Image1,
        name: "LoL",
      },

    ]);

    // const listItems = names.map((n) => <h1 key={n.names} >{n.names}</h1>)

  return (
    <div className='py-10 bg-[#3d2c3c]'>
      <h1 className='text-center text-[#fff] text-7xl' >Hall of Pumpkins</h1>
      <p className='text-center mt-3 text-[#fff]'>"secret"</p>
      <div className='columns-3 gap-10 mx-28 mt-10 '>
        
        {names.map((user, index) => {
          return <PumpkinCard key={index}
            name={user.name} image={user.image}/>
        })}
      </div>
    </div>
    
    
    
    
  )
}

export default Pumpkins