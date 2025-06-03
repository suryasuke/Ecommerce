import React from 'react'
import './NewCollections.css'
import new_collections from '../assets/new_collections'
import Item from '../Item/Item'
 const NewCollections = () => {
  return (
    <div className='newcollections'>
        <h1>New collections</h1>
        <hr/>
        <div className='new-collection-items'>
            {
          new_collections.map((item,i)=>{
            return <Item   key = {i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
          })
          }
          </div>
          </div>
          )
        }
export default NewCollections 
