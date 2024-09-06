import React from 'react'
import { FaClock, FaEnvelope,  FaPhone } from 'react-icons/fa'
import {  FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function ContactSec1() {
  return (
    <div className='font-mont mt-14'>
      <div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 justify-between w-full gap-6 mt-4 md:px-10 lg:px-24 px-4 my-10'>
            <p className='flex flex-col items-center justify-center text-center gap-3'>
                <span className='bg-tertiary py-3 px-4 bg-opacity-35 text-3xl rounded'><FaLocationDot /></span>
                <span><b>Address:</b> No 1, Idowu Crescent Adalemo</span>
            </p>
            <p className='flex flex-col items-center gap-3 justify-center text-center'>
                <span className='bg-tertiary py-3 px-4 bg-opacity-35 text-3xl rounded'><FaEnvelope /></span>
                <span><b>Email:</b> judeorifa28@gmail.com</span>
            </p>
            <p className='flex flex-col items-center gap-3 justify-center text-center'>
                <span className='bg-tertiary py-3 px-4 bg-opacity-35 text-3xl rounded'><FaPhone /></span>
                <span><b>Phone no:</b> 08068078495</span>
            </p>
            <p className='flex flex-col items-center gap-3 justify-center text-center'>
                <span className='bg-tertiary py-3 px-4 bg-opacity-35 text-3xl rounded '><FaClock /></span>
                <span><b>Time:</b> Mon - sat 7:00am - 7:00pm</span>
            </p>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-14 md:px-10 lg:px-24 mt-14 py-10 overflow-hidden'>
        <div className='md:col-span-7 col-span-12 shadow px-10 py-4'>
            <div>
                <div>
                    <h1 className='text-3xl font-bold'>Get In Touch</h1>
                </div>
                <form className='mt-10 flex flex-col gap-10'>
                    <div className='flex md:flex-row flex-col gap-4 justify-between '>
                    <div className='flex flex-col '>
                            <label className='font-bold text-lg ' htmlFor="name">Name</label>
                            <input type="text" id='name'  className='focus:outline-none border-b '/>
                        </div>
                        <div className='flex flex-col '>
                            <label className='font-bold text-lg ' htmlFor="number">Number</label>
                            <input type="number" id='number'  className='focus:outline-none border-b '/>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                            <label className='font-bold text-lg ' htmlFor="Email">Email</label>
                            <input type="email" id='Email'  className='focus:outline-none border-b '/>
                        </div>
                    <div className='flex flex-col  gap-8 '>
                            <label className='font-bold text-lg ' htmlFor="Message">Message</label>
                            <input type="text" id='Message'  className='focus:outline-none border-b '/>
                        </div>
                        <div>
                            <button className='py-3 px-8 bg-tertiary text-white'>Send Message</button>
                        </div>
                        <div>
                           <Link to='/Contact'><h3 className='text-tertiary font-bold cursor-pointer '>Do You have a query?</h3></Link>
                        </div>
                </form>
            </div>
        </div>
        <div className='md:col-span-5 col-span-12 shadow py-4 '>
            <img src="/images/contact2.avif" alt="" className='object-contain object-top    ' />
        </div>
      </div>
    </div>
  )
}

export default ContactSec1
