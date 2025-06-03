import React from 'react'
import '../pages/css/loginSignup.css'


export const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      
      <div className="loginsignup-container">
        <div className='styled'>
 <h1>SIGN UP</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name' required/>
          <input type='email' placeholder='Your Email' required/>
          <input type='password' placeholder='Password' required/>
         </div> 
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account ? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' required/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>


        </div>
         </div>
         </div>
       
    </div>
  )
}
export default Loginsignup ;
