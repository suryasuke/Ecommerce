import React from 'react'
import './Footer.css'

import insta_logo from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
     
            <p>FishZa</p>
        </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offersffices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>

                 <div className='footer-icons-container'>
                    <a href='https://www.instagram.com/iam._.sury_a/'><img src={insta_logo} alt=''/></a>
                    
                 </div>
                 <div className='footer-icons-container'>
                    <img src={pintester_icon} alt=''/>
                    
                 </div>
                 <div className='footer-icons-container'>
                    <img src={whatsapp_icon} alt=''/>
                    
                 </div>
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>copyright @2024 -All Rights Reserved</p>
            </div>
           </div>
  )
}
export default Footer
