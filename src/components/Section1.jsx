import React from 'react'
import man from '../Asset/home1.png'
import woman from '../Asset/woman.png'
import leather from '../Asset/leather.png'
import metal from '../Asset/metal.png'
import couple from '../Asset/couple.png'
import child from '../Asset/child.png'
import smart from '../Asset/smart.png'
import minimal from '../Asset/minimal.png'
import top from '../Asset/top-1.png'

function Section1() {
  return (
    <div className='bg-[#f0f0f0] py-16  font-outfit lg:px-24 md:px-8 px-4 grid-cols-12 grid gap-6 '>
     <div className=' md:col-span-4 col-span-12 bg-black text-white py-8 px-8 rounded-md shadow'>
    <div className='flex gap-1 text-lg'>
    <p className='font-bold text-white'>20% To 30% off</p>
    <p className='border-b border-white w-6'></p>
    </div>
    <div>
      <p className='my-4 text-3xl font-bold'>Super Smart Watch
      Live</p>
    </div>

    <img src={top} alt=""  className='object-cover object-center'/>

     </div>
     <div className=' md:col-span-8 col-span-12 justify-center items-center bg-white py-10 rounded-md px-10'>
     <div className='md:grid-cols-4 h-[100%] justify-center items-center gap-6 grid grid-cols-2'>
     <div className='border-slate-300 border rounded py-6 px-2'>
      <img src={man} alt="" />
     </div>
     <div className='border-slate-300 border rounded py-6 px-2'>
      <img src={woman} alt="" />
     </div>
     <div className='border-slate-300 border rounded py-6 px-2'>
      <img src={leather} alt="" />
     </div>
     <div className='border-slate-300 border rounded py-6 px-2'>
      <img src={metal} alt="" />
     </div>
     <div className='border-slate-300 border rounded py-6 px-2'>
      <img src={couple} alt="" />
     </div>
     <div className='border-slate-300 border rounded py-6 px-2'>
      <img src={child} alt="" />
     </div>
     <div className='border-slate-300 border rounded py-6 px-2'>
      <img src={smart} alt="" />
     </div>
     <div className='border-slate-300 border rounded py-6 px-2'>
      <img src={minimal} alt="" />
     </div>
     </div>
     </div>
    </div>
  )
}

export default Section1
