import React from 'react'
import './Hero.css' ;
import { motion } from 'framer-motion'
import arrow_icon from '../assets/arrow.png' ;

import hero_image from '../assets/hero.png.png' ; 
const hero = () => {
  return (
    <div className='hero'>
<div className="hero-left">
<h2>New arrivals only</h2>
<div>
    <div className="hero-hand-icon">
        <p>COLORFUL😇</p>
    </div>
    <p>FISHES</p>
    <p>DAY BY DAY ...</p>
</div>


<motion.div
   initial = {{x : 100  , opacity : 0}} 
   whileInView={ {x : 0  , opacity : 1}}
   transition={{ duration : 0.6 }}
  
   >

<div className="hero-latest-btn">
   
    <div>Latest collection</div>

    <img src={arrow_icon} alt=''/>
</div>

   </motion.div>

</div>
<motion.div
  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.9 }}
>
 <div className="hero-right">
<img src={hero_image} alt=''/>
</div>
</motion.div>

    </div>
  )
}
export default hero
