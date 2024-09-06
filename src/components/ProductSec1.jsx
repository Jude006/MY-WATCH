import React, { useState,useContext } from 'react'
import Watch from '../components/Watch.json'
import { cartContext } from '../CartManaget/CartProvider'

function ProductSec1() {
    const[selectedProduct,setSelectedProduct] = useState(null)
    const {addToCart} = useContext(cartContext)
    const openPopup = (product)=>{
        setSelectedProduct(product)
    }

    const closePopup = ()=>{
        setSelectedProduct(null)
    }
  return (
    <div className='grid grid-cols-12 gap-8 mt-10 py-10  lg:px-20 md:px-10 font-mont h-screen px-4 bg-slate-50 '>
      <div className='md:col-span-4 shadow col-span-12 bg-slate-100'>box1</div>
      <div className='md:col-span-8 col-span-12  overflow-y-scroll'>
        <div className='md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-6 '>
            {Watch.map((item,key)=>(
                <div key={key} className='bg-white shadow py-6 px-4 flex justify-center items-center flex-col rounded relative overflow-hidden group'>
                    <div>
                        <img src={item.image} alt="" className='h-44 object-cover object-top'/>
                    </div>
                    <div className='text-center flex flex-col gap-2 py-3'>
                        <p>{item.rating}</p>
                        <p className='font-semibold'>{item.name}</p>
                        <p className='font-semibold'>${item.price}</p>
                    </div>
                    <div className='py-1  px-2 bottom-0 w-full left-0 flex justify-center items-center absolute translate-y-full group-hover:translate-y-0 duration-500 transform ease-in transition-transform'>
                    <button className='py-3 px-8 rounded bg-tertiary text-white' onClick={() => openPopup(item)}>View Details</button>
                    </div>
                </div>
            ))}
        </div>
            {/* POPUP  */}
           {selectedProduct &&(
                   <div className='bg-tertiary bg-opacity-25 backdrop-blur-sm fixed inset-0 w-full h-screen flex justify-center items-center z-50'>
                   <div className='bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full'>
                  
                     <button onClick={closePopup} className='absolute top-3 right-3 text-black'>
                       ✖️
                     </button>
       
                     {/* Product Details */}
                     <div className='text-center'>
                       <img src={selectedProduct.image} alt={selectedProduct.name} className='h-56 object-cover mx-auto'/>
                       <h2 className='text-2xl font-bold py-4'>{selectedProduct.name}</h2>
                       <p className='text-lg'>Rating: {selectedProduct.rating}</p>
                       <p className='text-lg'>Price: ${selectedProduct.price}</p>
                       <p className='py-4'>{selectedProduct.description}</p>
                       <div className='flex gap-4 justify-center items-center text-white'>
                        <button className='py-3 px-8 rounded-md bg-tertiary ' onClick={()=>addToCart(selectedProduct)}>Add To Cart</button>
                        <button className='py-3 px-8 rounded-md bg-tertiary '>Buy Now!!</button>
                       </div>
                     </div>
                   </div>
                 </div>
           )}
      </div>
    </div>
  )
}

export default ProductSec1
