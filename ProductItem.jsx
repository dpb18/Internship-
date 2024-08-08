import React from 'react'
import './ProductItem.css'
import stars from '../../assets/star.png'
import stars_null from '../../assets/star null.png'

const ProductItem = ({id,name,price,image}) => {
  return (
    <div className='product-item'>
        <div className="product-item-image-container">
            <img className='product-item-image' src={image} alt=''/>
        </div>
        <div className='product-item-info'>
        <div className="product-item-name-rating">
            <p>{name}</p>
            <img src={stars} alt=''/>
            <img src={stars} alt=''/>
            <img src={stars} alt=''/>
            <img src={stars} alt=''/>
            <img src={stars_null} alt=''/>
            <p className='product-item-price'>${price}</p>
            <button onClick={() =>{addToCart()}}>Add to Cart</button>
        </div>
        </div>
    </div>
  )
}

export default ProductItem