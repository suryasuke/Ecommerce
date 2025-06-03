import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png' ; 
import { Link } from 'react-router-dom'

export const Breadcrum = (props) => {
    const {product} = props ; 
  
   return (
    <div className='breadcrum'>
     <Link style={{textDecoration : 'none'}} to={"/"}> HOME </Link>
     <img src={arrow_icon} alt=''/>
     <Link  style={{textDecoration : 'none'}}  to={"/"}> SHOP</Link> <img src={arrow_icon} alt=''/> 
     <Link style={{textDecoration : 'none'}}  to={`/${product.category}`}>{product.category}</Link>  
     <img src={arrow_icon} alt=''/> <Link style={{textDecoration : 'none'}} >{product.name}</Link>
    </div>
  )
}

export default Breadcrum ;
