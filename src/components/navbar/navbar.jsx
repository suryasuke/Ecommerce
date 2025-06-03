import React from 'react'
import './navbar.css'
import logo from '../assets/fish-logo.png.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import  {useState} from 'react';
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
 const Navbar = () => {
  const {count} = useContext(ShopContext);
 
    const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>FishZa</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration : 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("betta")}}><Link style={{textDecoration : 'none'}} to='/betta'>Betta</Link>{menu==="betta"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("lucky-fish")}}><Link  style={{textDecoration : 'none'}} to='/lucky-fish'>Lucky Fish</Link>{menu==="lucky-fish"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("sea-fish")}}><Link  style={{textDecoration : 'none'}} to='/sea-fish'>Sea Fish</Link>{menu==="sea-fish"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
        <Link to='/login'><button>login</button></Link>
       <Link to='/cart'><img src={cart_icon} alt='' /></Link>
            <div className='nav-cart-count'>{count}</div>
           
        </div>

    </div>
  )
}
 export default Navbar