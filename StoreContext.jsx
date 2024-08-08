import { createContext } from "react";
import { Item_list } from "../assets/assest";
import { useState } from "react";

export const StoreContext = createContext(null)
const getDefaultCart= () =>{
    let cart ={};
    for(let index = 1; index<Item_list.length+1;index++){
        cart[index] = 0;
    }
    return cart;
}

const StoreContextProvider = (props) =>{
    
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
   
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        let itemInfo = all_product.find((product)=>product.id === Number(item));
                        totalAmount += itemInfo.price*cartItems[item];
                    }
                    
            }
            return totalAmount 
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems)
            {
                if (cartItems[item] > 0)
                    {
                        totalItem += cartItems[item];
                    }
            }
            return totalItem
    }
  
    const contextValue = {getTotalCartItems,getTotalCartAmount,Item_list,cartItems,addToCart,removeFromCart};
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider