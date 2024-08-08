import React from 'react'
import './Category.css'
import {Offer_list } from '../../assets/assest'

const Category = ({category,setCategory}) => {
  
  return (
    <div className='category-menu' id='category-menu'> 
    <h1>Shop By Category</h1>
    <p className='category-menu-text'>Get the best offers on selected items</p>
   
    <div className='category-menu-list'>
        {Offer_list.map((item,index) =>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.Category_name?"All":item.Category_name)} key={index} className='category-menu-list-item'>
                    
                    <img className={category===item.Category_name?"active":""} src={item.Category_image} alt=''/>
                    <p>{item.Category_name}</p>
                    

                    </div>
            )
        })}
    </div>
    <hr/>
    </div>
  )
}



export default Category