import React from 'react'
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa'
import { FaArrowRight, FaLocationDot, FaTwitter } from 'react-icons/fa6'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='grid font-mont text-white justify-between md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 bg-black md:px-8 lg:px-24 px-8 py-10'>
      <div>
        <h1 className='text-xl font-bold'>Alberto</h1>
        <div className='text-sm font-normal mt-4'>
            <p className='leading-snug'>Our watches are made for your wrists, Crafted with Love & Care. We strive to provide all kinds of watches, from classic to the latest designs. We sell authentic products with warranties.

Follow Us_____</p>
        </div>
        <div className='flex items-center gap-4 text-lg mt-6'>
            <p><FaFacebook /></p>
            <p><FaLinkedin /></p>
            <p><FaInstagram /></p>
            <p><FaTwitter /></p>
        </div>
      </div>
      <div className='flex flex-col lg:items-center lg:justify-center'>
        <h2 className='text-xl font-bold'>Products</h2>
       <div className='flex flex-col gap-2 mt-4'>
       <p>Smart watch</p>
        <p>Luxury watch</p>
        <p>Vintage watch</p>
        <p>Digital watch</p>
        <p>Dress watch</p>
       </div>
      </div>
      <div className='flex flex-col lg:items-center lg:justify-center'>
        <h1 className='text-xl font-bold'>Quick Links</h1>
        <div className='mt-4 flex flex-col gap-2'>
          <Link to='/'>
          <p className='flex items-center gap-2'>
                <span><FaArrowRight /></span>
                <span>Home</span>
            </p>
          </Link>
          <Link to='/About'>
          <p className='flex items-center gap-2'>
                <span><FaArrowRight /></span>
                <span>About</span>
            </p>
          </Link>
          <Link to='/Product'>
          <p className='flex items-center gap-2'>
                <span><FaArrowRight /></span>
                <span>Product</span>
            </p>
          </Link>
          <Link to='/Gallery'>
          <p className='flex items-center gap-2'>
                <span><FaArrowRight /></span>
                <span>Gallery</span>
            </p>
          </Link>
           <Link to='/Contact'>
           <p className='flex items-center gap-2'>
                <span><FaArrowRight /></span>
                <span>Contact</span>
            </p>
           </Link>
        </div>
      </div>
      <div>
        <h2 className='text-xl font-bold'>Contact Us</h2>
        <div className='flex flex-col gap-2 mt-4'>
            <p className='flex items-center gap-3'>
                <span><FaLocationDot /></span>
                <span>No 1, Idowu Crescent Adalemo</span>
            </p>
            <p className='flex items-center gap-3'>
                <span><FaEnvelope /></span>
                <span>judeorifa28@gmail.com</span>
            </p>
            <p className='flex items-center gap-3'>
                <span><FaPhone /></span>
                <span>08068078495</span>
            </p>
            <p className='flex items-center gap-3'>
                <span><FaClock /></span>
                <span>Mon - sat 7:00am - 7:00pm</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
