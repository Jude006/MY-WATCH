import React from 'react'
import image from '../Asset/sec4.png'
import Scroll from '../components/Scroll.json'

function Section4() {
  return (
    <div className='font-mont py-16'>
      <div>
        <h1 className='text-4xl font-bold  text-center'>Limited Edition Collection</h1>
      </div>
      <div>
        <h3 className='text-center mt-4 max-w-[80%] mx-auto'>Our watches are made for your wrists, Crafted with Love & Care. We strive to provide all kinds of watches, from classic to the latest designs. We sell authentic
        products with warranties.</h3>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:h-[80vh] h-fit  p-2 gap-8 mt-10 md:px-10 lg:px-24 px-4'>
        <div className='border border-slate-200 shadow rounded-md flex justify-center'>
            <img src={image} alt=""  className='object-cover'/>
        </div>
        <div className='p-7 bg-black rounded-md shadow overflow-y-scroll scrollbar grid grid-cols-1 gap-4'>
            {Scroll.map((item,key)=>(
                <div key={key} className='flex bg-white  gap-3 items-center  rounded-md'>
                        <div >
                        <img src={item.image} alt="" className='h-44 w-44 object-cover'/>
                    </div>
                    <div>
                       
                        <div className='flex items-center gap-3'>
                            <p>{item.price}</p>
                            <p>{item.rating}</p>
                        </div>
                        <p>{item.title}</p>
                        <button className='py-3 px-6 bg-black rounded-md text-white'>Buy Now</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Section4
