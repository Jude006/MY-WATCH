import React from 'react';
import backgroundImage from '../Asset/LandingPage.png';
import { FaLock } from 'react-icons/fa';
import {Link} from 'react-router-dom'

function LandingPage() {
  return (
    <div className='font-outfit flex justify-center'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        object: 'center'
      }}
    >
        <div className='text-white flex justify-center md:gap-6 gap-3 lg:gap-3 md:ml-4 ml-6   flex-col'>
            <div>
                <h1 className='md:text-6xl text-5xl leading-tight font-bold lg:max-w-[50%]'>Time Keeps Ticking, Make Every Moment Count
                </h1>
            </div>
            <div>
                <p className='text-lg md:max-w-[50%]'>We strive to provide all kinds of watches, from classic to the latest designs. We sell authentic products with warranties.</p>
            </div>
            <div>
               <Link to='/Product'>
               <button className='py-3 px-4 bg-black text-white flex items-center gap-2'>Shop Now
                    <FaLock />
                </button>
               </Link>
            </div>
        </div>
    
    </div>
  );
}

export default LandingPage;
