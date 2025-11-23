import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'; 


const CartItems = () => {
                            //2 : 1  
    const {all_product , cartItem ,removeFromCart ,getTotalAmount ,oldamnt} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{

                //  cartItem[2] > 0 -->  true
            if(cartItem[e.id]> 0){ // 2-> 0
          
                return  <div>
                   
                
                <div className='cartitems-format cartitems-format-main'>
            
                  
                <img  src={e.image} alt='' className='carticon-product-icon' />
                <p className='name-item' >{e.name}</p>
                <p className='actual-amnt'>{Math.floor(e.new_price)}</p>
                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                <p className='total-amnt' >{Math.floor(e.new_price*cartItem[e.id])}</p>
                <div className='removejanda'><img className='removeitems' onClick={()=>{removeFromCart(e.id)}}src={remove_icon} alt=' ' /></div>
                  
                  
                 
            </div>
            <hr/>
    
    
           </div> 
            }
            return null; 
        })}
        
          
          <div className="cartitems-total">
            <h1 className='header'>Cart Totals</h1>
            
            <div>
              <div className='cartitems-total-item'>
                <p>Subtotal</p>
                <p className='totally'><span>₹ {Math.floor(oldamnt())} </span> ₹ {Math.floor(getTotalAmount())} </p>
              </div>
              <hr/>
              <div className='cartitems-total-item'>
                <p>Shipping Fee</p>
                <p>FREE</p>
              </div>
              <hr/>
              <div className='cartitems-total-item'>
                <h3>Total</h3>
                <h3 className='total'>₹ {Math.floor(getTotalAmount())}</h3>
              </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>



      
      
</div>

      


  )}
  

export default CartItems
 