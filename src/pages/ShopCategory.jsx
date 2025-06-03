import { useContext } from 'react'
import React from 'react'
import './css/ShopCategory.css'
import {ShopContext}   from '../context/ShopContext'
import dropdown_icon from '../components/assets/arrow-down.svg'
import Item from '../components/Item/Item'
export const ShopCategory = (props) => {

 const {all_product} = useContext(ShopContext);

  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} alt=''/>
      <div className='shopcategory-indexSort'>
          <p>
             <span>showing 1-12 </span> out of 36 products
          </p>  
          <div className="shopcategory-sort">
             <p>Sort by</p><img src ={dropdown_icon} alt='' />
          </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item , i)=>{
          if(props.category===item.category){
            return <Item key = {i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
          }
          else{
            return null ; 
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        <a  className='freshma'   href='https://www.freshma.in/'>Explore More</a>
      </div>
      </div>
  )
}

export default ShopCategory 
