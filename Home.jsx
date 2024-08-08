import React, { useState } from 'react'
import './Home.css'
import Category from '../../Components/Category/Category'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'




const Home = () => {
    const [category,setCategory] = useState("All");
  return (
    <div>
        <Category category={category} setCategory={setCategory}/>
        <ProductDisplay category={category}/>

    </div>
  )
}

export default Home