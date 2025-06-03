import React, { useContext} from 'react'
import {ShopContext} from '../context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../components/RelatedProduct/RelatedProduct'



 const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productID} = useParams();

  console.log(Number(productID));
  const product = all_product.find((e)=> e.id === Number(productID));
  const x = Math.floor(Math.random()*678) ; 


  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product} value={x}/>
      <DescriptionBox value = {x}/>
      <RelatedProduct/>
    </div>
  )
}
export default Product
