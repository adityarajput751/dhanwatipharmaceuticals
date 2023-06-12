import React from 'react'
import './Vision.css'
import { visionData } from '../../data/vision'
const Vision = () => {
  return (
    <div className='Vision'>
        <div>
            <span>DHANWATI</span>
            <span className='stroke-text'>PHARMACEUTICALS</span>
            <span>VISION</span>
        </div>
        <div className='category'>
            {visionData.map((item)=>(
                <div>
                    <img className='vision-image' src={item.image} alt='' />
                    
                    <div className='vision-view'>
                    <span>{item.title}</span>
                        <span>{item.view}</span>
                    </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Vision