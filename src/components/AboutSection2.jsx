import React from 'react'

function AboutSection2() {
  return (
    <div className='mt-10 font-mont overflow-hidden'>
      <div>
        <h2 className='text-4xl font-bold text-center'>We Are The Best In The
        Industry</h2>
      </div>
      <div className='md:px-10 lg:px-24 px-4 gap-10 grid grid-cols-12 py-10'>
        <div className='md:col-span-4 col-span-12  p-4 hidden md:flex flex-col gap-6 '>
            <div className='py-6 px-4 shadow relative'>
                <p className='font-semibold'>Authorized Retailer</p>
                <p className='mt-2 '>We an authorized retailer with over 40 plus luxury watch brands.</p>
                <img src="/images/icon1.png" alt=""  className='h-14 md:flex hidden w-14 object-cover absolute top-6 -right-8'/>
            </div>
            <div className='py-6 px-4 shadow relative'>
                <p className='font-semibold'>Largest selection</p>
                <p className='mt-2 '>Employing over 350 people in India, atethics integral part.</p>
                <img src="/images/icon2.png" alt=""  className='h-14 md:flex hidden w-14 object-cover absolute top-6 -right-8'/>
            </div>
            <div className='py-6 px-4 shadow relative'>
                <p className='font-semibold'>Customer Trust</p>
                <p className='mt-2 '>we have the largest selection in every brand.</p>
                <img src="/images/icon1.png" alt=""  className='h-14 md:flex hidden w-14 object-cover absolute top-6 -right-8'/>
            </div>
        </div>
        <div className='md:col-span-4 col-span-12  flex justify-center items-center object-cover'>
            <img src="/images/abtsec2.png" alt="" className='object-cover object-top'/>
        </div>
        <div className='md:col-span-4 col-span-12 flex flex-col gap-6 p-4 '>
        <div className='py-6 px-4 shadow relative'>
                <p className='font-semibold'>Knowledgeable Staff</p>
                <p className='mt-2 '>Well trained staff and great looking boutiques ensure that.</p>
                <img src="/images/icon4.png" alt=""  className='h-14 md:flex hidden w-14 object-cover absolute top-6 -right-8'/>
            </div>
            <div className='py-6 px-4 shadow relative'>
                <p className='font-semibold'>After-Sales Support</p>
                <p className='mt-2 '>We value your watch as much as you do.</p>
                <img src="/images/icon5.png" alt=""  className='h-14 w-14 md:flex hidden object-cover absolute top-6 -right-8'/>
            </div>
            <div className='py-6 px-4 shadow relative'>
                <p className='font-semibold'>Loyalty Programme</p>
                <p className='mt-2 '>you can collect and redeem regularly, get gifts, rewards.</p>
                <img src="/images/icon6.png" alt=""  className='h-14 w-14 md:flex hidden object-cover absolute top-6 -right-8'/>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default AboutSection2
