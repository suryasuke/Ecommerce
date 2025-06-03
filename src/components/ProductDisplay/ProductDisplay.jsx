import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

  const ProductDisplay = (props) => {
  const product = props.product;
  const [selectedSize, setSelectedSize] = useState(null) ;
  const handleSizeClick = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };  
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-left">
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className='productdisplay-right-stars'>
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_dull_icon} alt='' />
            <p>{`(${props.value})`}</p>
          </div>
          <h1 id='der'>PRICE</h1>
          <div className="productdisplay-right-prices">
            <div className='productdisplay-right-price-old'>₹ {product.old_price}</div>
            <div className='productdisplay-right-price-new'>₹ {product.new_price}</div>
          </div>
          <div className='productdisplay-right-description'>{product.description}</div>
          <div className='productdisplay-right-size'>
            <h1>select size</h1>
            <div className='productdisplay-right-sizes'>
              {['8cm', '9cm', '10cm', '11cm', '12cm'].map((size) => (
                <div  className={`size-item ${selectedSize === size ? 'selected' : ''}`} onClick={() => handleSizeClick(size)}>
                  {size}
                </div>
              ))}
            </div>

          </div>
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          <p className='productdisplay-right-category'><span>Category :  </span>   {product.category}</p>
          <p className='productdisplay-right-category'><span>Tags :  </span>   Modern latest</p>
        </div>
      </div>

    </div>
  );
};

export default ProductDisplay;
