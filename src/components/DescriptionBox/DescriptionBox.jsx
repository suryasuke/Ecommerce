import React from 'react'

import './DescriptionBox.css'

const DescriptionBox = (props) => 
{
  
    

  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews ({props.value})</div>
        </div>
        <div className='descriptionbox-description'>
         <p>fish, any of approximately 34,000 species of vertebrate 
            found in the fresh and salt waters of the world. Living 
            species range from the  primitive jawless  lampreys and 
            hagfishes through the cartilaginous sharks, skates, and 
            rays to the abundant and diverse bony fishes.</p>
            <p>
            fish, any of approximately 34,000 species of vertebrate animals found in the fresh and salt 
            waters of the world. Living species range from the primitive jawless 
            lampreys and hagfishes through the cartilaginous sharks, skates, and 
            rays to the abundant and diverse bony fishes.
            </p>

        </div>
      
    </div>
  )
}

export default DescriptionBox
