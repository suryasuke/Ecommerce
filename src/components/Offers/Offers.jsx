import React from 'react'
import './Offers.css'
import exclusive_img from '../assets/fish_exclusive.png'
import { motion } from 'framer-motion' 
export const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers for you...</h1>
            <p>Only on best seller products</p>
            <motion.div
            
            initial = {{ x : 100 , opacity : 0 }}
            whileInView={{ x : 0 , opacity : 1 }}
            transition={{ duration : 0.6 }}
            >
                <button>Check now</button>
            </motion.div>
          
        </div>
   <motion.div
            
            initial = {{ x : 100 , opacity : 0 }}
            whileInView={{ x : 0 , opacity : 1 }}
            transition={{ duration : 1.5 }}
            >
                <div className='offers-right'>
            <img src ={exclusive_img} alt=''/>

        </div>
            </motion.div>
       

    </div>
  )
}
export default Offers
