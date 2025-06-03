import React from 'react'
import './NewsLetter.css'
 const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offer from your email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email Id' required/>
            <button>SUBSCRIBE</button>
        </div>

    </div>
  )
}
export default NewsLetter
