
import React, {createContext} from "react";
import all_product from '../components/assets/all_product'
import { useState } from "react";



export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = [];
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;

        //cart[0] : 0 ; 
        //cart[1] : 0 ;  --> cart[2] : 1  ;
        //...
        //...
        //...
        //...
        //cart[34] : 0 ; 
    }console.log(cart);
    return cart; // Move this line outside of the loop
};

const arr = [];
arr[1] = 0 ; 

arr[2] = 0 ; 
   arr[3] = 0; 
   arr[5] = 0 ; 



  
const ShopContextProvider = (props)=>{

    const [carts , setcarts] = useState(arr);
    const [cartItem , setCartItem] = useState(getDefaultCart()); //2 : 1
    const [count , setCount] = useState(0);
                          //2
    const addToCart = (itemId) => {
       setCartItem((prev) => {
            return {...prev,[itemId]: prev[itemId] + 1 };
             
        });
        countcart();
     
    };

  
 
function addcart(id){
    setcarts((prev)=>{
        console.log({[id] : prev[id]})
return {...prev , [id] : prev[id] +1};
    })

}

console.log(carts);



                             //2  : 0
    const removeFromCart = (itemId) => {
        setCartItem((prev) => {
            return { ...prev, [itemId]: prev[itemId] - 1 };
        });
        countcartdec();
    };
    const getTotalAmount= () =>{
        let Totalamount = 0 ;
       for(const i in cartItem)
        {
            if(cartItem[i] > 0) {
                let infoinfo = all_product.find((product)=> product.id === Number(i) )
                Totalamount += infoinfo.new_price* cartItem[i] ;
            }
        }
            return Totalamount;
    }
    const oldamnt= ()=>{
        let  old = 0 ;
        for(const i in cartItem)
        {
            if(cartItem[i]>0) {
                let infoinfo = all_product.find((product)=> product.id === Number(i) )
                old += infoinfo.old_price*cartItem[i]; 
            }
        }
            return old;
        }
        const countcartdec = () => {
        setCount((prevCount) => {
            console.log('Updating count:', prevCount);
            return prevCount - 1;
        });
    };
    const countcart = () => {
        setCount((prevCount) => {
            console.log('Updating count:', prevCount);
            return prevCount + 1;
        });
    };
   
     const ContextValue = {all_product,addcart,cartItem,addToCart,removeFromCart ,count ,getTotalAmount ,oldamnt};
     
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
        )
    };
export default ShopContextProvider ; 