import React, { useContext } from 'react'
import './ProductDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'
import { Item_list } from '../../assets/assest'

const ProductDisplay = ({category}) => {
    const {Item_list} = useContext(StoreContext)
    
  return (
    <div className='product-display' id='product-display'>
    <h2>The best of the products</h2>
    <div className="product-display-list">
      {Item_list.map((item,index)=>{
        if(category==="All" || category===item.category){
        return <ProductItem key={index} name={item.name} image={item.image} price={item.price}/>
        }
      })}
    </div>
    </div>
  )
}

export default ProductDisplay