import React from 'react'
import { FaTag } from 'react-icons/fa'
import image from '../Asset/sect2 img.png'
import { FaShield } from 'react-icons/fa6'

function Section2() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 lg:py-24 md:py-16 py-10 gap-6 font-outfit md:px-10 lg:px-28 px-4 bg-white mt-4'>
     <div className='flex flex-col gap-8      p-4'>
        <div className='md:w-[80%] bg-white flex gap-4 justify-between items-center shadow-md py-3 px-8 rounded-md'>
            <span className='bg-tertiary w-16 bg-opacity-30 h-10 flex justify-center items-center rounded-md'>
                <FaShield className='text-3xl text-tertiary '/>
            </span>
            <p className='font-bold text-lg'>A quality watch is at least made of
            Stainless Steel</p>
        </div>
        <div className='md:w-[80%] bg-white flex gap-4 justify-between md:ml-8 items-center shadow-md py-3 px-8 rounded-md'>
            <span className='bg-tertiary w-16 bg-opacity-30 h-10 flex justify-center items-center rounded-md'>
                <FaShield className='text-3xl text-tertiary '/>
            </span>
            <p className='font-bold text-lg'>A quality watch always has sapphire glass</p>
        </div>
        <div className='md:w-[80%] bg-white flex gap-4 justify-between items-center shadow-md py-3 px-8 rounded-md'>
            <span className='bg-tertiary w-16 bg-opacity-30 h-10 flex justify-center items-center rounded-md'>
                <FaTag className='text-3xl text-tertiary '/>
            </span>
            <p className='font-bold text-lg'>A good, affordable watch has a quartz
            movement</p>
        </div>
        <div className='md:w-[80%] bg-white flex gap-4 justify-between md:ml-8 items-center shadow-md py-3 px-8 rounded-md'>
            <span className='bg-tertiary w-16 bg-opacity-30 h-10 flex justify-center items-center rounded-md'>
                <FaShield className='text-3xl text-tertiary '/>
            </span>
            <p className='font-bold text-lg'>A quality watch always has sapphire glass</p>
        </div>
     </div>


     <div className='p-6 flex flex-col gap-4'>
        <div>
            <p className='font-bold text-lg text-red-600'>Feautured Product</p>
        </div>
        <div>
            <p className='text-4xl font-bold text-black max-w-[80%] '>Neo Splash Blue Dial
            Watch</p>
        </div>
        <div>
            <p className='text-black font-semibold'>This 44mm Minimalist features a black sunray dial with Roman numeral and
            stick indices, three-hand movement and a brown leather strap.</p>
        </div>
        <div className='flex  w-full '>
            <img src={image} alt="" className='h-64 w-64 object-cover object-center'/>
        </div>
     </div>
    </div>
  )
}

export default Section2
