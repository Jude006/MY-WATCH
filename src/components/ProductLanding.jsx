import React from 'react'
import image from '../Asset/productLanding.png'
import { Link } from 'react-router-dom'
import { FaGreaterThan } from 'react-icons/fa6'

function ProductLanding() {

  return (
    <div className=' object-top object-cover text-white font-mont flex items-center '
     style={{
        backgroundImage: `url(${image})`,
        height:'60vh',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'top', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        
      
     }}>
        <div className='flex flex-col items-start lg:ml-28 md:ml-24 ml-16'>
            <h1 className='text-3xl font-bold '>Our Product</h1>
            <div className='flex items-center gap-4 mt-4 text-lg'>
               <Link to='/'><p>Home</p></Link>
                <p><FaGreaterThan /></p>
                <p>Product</p>
            </div>
        </div>
      
    </div>
  )
}

export default ProductLanding
