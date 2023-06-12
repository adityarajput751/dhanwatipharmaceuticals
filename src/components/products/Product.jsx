import React from 'react'
import './Product.css'
import { productData } from '../../data/vision'

const Product = () => {
  return (
    <div className='Product'>
      <span>OUR PRODUCTS</span>
        <div className='category-product'>
            {productData.map((item)=>(
                <div>
                    <img className='product-image' src={item.image} alt='' />
                    
                    <div className='product-name'>
                    <span>{item.name}</span>
                    </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Product