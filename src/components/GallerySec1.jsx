import React from 'react'

function GallerySec1() {
  return (
    <div className='mt-10 font-mont'>
      <div>
        <h1 className='text-4xl text-center font-bold'>Explore Our Collection</h1>
        <h3 className='text-center mt-2 md:px-2 px-4'>Discover the elegance and craftsmanship of our wristwatches.</h3>
      </div>
      <div className='md:grid md:grid-cols-2 grid-cols-1 md:px-10 lg:px-20 px-4 gap-8 my-10 hidden'>
        <div className='py-6 shadow  px-4 grid grid-cols-1 gap-2'>
            <div className=' py-4  md:h-60 '>
                <img src="/images/gall1.jpg" alt="" className=' object-cover h-[100%] w-full '/>
            </div>
            <div className=' py-4 px-2 grid grid-cols-1 gap-2 '>
                <div className='py-6 shadow  px-4 grid grid-cols-2 gap-6'>
                    <div className=''>
                    <img src="/images/gall2.jpg" alt="" className='h-36 object-cover w-full'/>
                    </div>
                    <div className=''>
                    <img src="/images/gall3.jpg" alt="" className='h-36 object-cover w-full'/>
                    </div>
                </div>
                <div className='py-6 shadow  px-4 grid grid-cols-2 gap-6'>
                    <div className=''>
                    <img src="/images/gall4.jpg" alt="" className='h-36 object-cover w-full'/>
                    </div>
                    <div className=''>
                    <img src="/images/gall5.jpg" alt="" className='h-36 object-cover w-full'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-6 shadow  px-4'>
        <div className=' py-4 px-2  grid grid-cols-1 gap-2 '>
                <div className='py-6 shadow  px-4 grid grid-cols-2 gap-6'>
                    <div className=''>
                    <img src="/images/gall6.jpg" alt="" className='h-36 object-cover w-full'/>
                    </div>
                    <div className=''>
                    <img src="/images/gall7.jpg" alt="" className='h-36 object-cover w-full'/>
                    </div>
                </div>
                <div className='py-6 shadow  px-4 grid grid-cols-2 gap-6'>
                    <div className=''>
                    <img src="/images/gall8.avif" alt="" className='h-36 object-cover w-full'/>
                    </div>
                    <div className=''>
                    <img src="/images/gall5.jpg" alt="" className='h-36 object-cover w-full'/>
                    </div>
                </div>
            </div>
            <div className=' py-4  h-60'>
                <img src="/images/gall9.jpg" alt="" className=' object-cover h-[100%] w-full '/>
             
            </div>
        </div>
      
      </div>
      <div className='md:hidden flex flex-col gap-4 mt-12 md:px-10 lg:px-20 px-6 my-10 py-10'>
              <img src="/images/gall3.jpg" alt="" className=' object-cover h-[100%] w-full rounded '/>
                <img src="/images/gall4.jpg" alt="" className=' object-cover h-[100%] w-full rounded '/>
                <img src="/images/gall5.jpg" alt="" className=' object-cover h-[100%] w-full rounded '/>
                <img src="/images/gall6.jpg" alt="" className=' object-cover h-[100%] w-full rounded '/>
                <img src="/images/gall8.avif" alt="" className=' object-cover h-[100%] w-full rounded '/>
              </div>
    </div>
  )
}

export default GallerySec1
