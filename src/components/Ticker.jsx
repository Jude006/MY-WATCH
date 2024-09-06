import React, { useState,useEffect } from 'react'

function Ticker() {

  const[time,setTime] = useState(new Date())
    useEffect(()=>{
      const interval = setInterval (()=>{
        setTime(new Date())
      },1000)

      return (()=> clearInterval (interval))
    },[])


    const formattedTime = `${time.toLocaleTimeString()}`
    const formattedDate = `${time.toLocaleDateString()}`

  return (
    <div className='sticky py-3 bg-secondary font-mont text-white bottom-0 left-0 overflow-hidden'>
    <div className='ticker-content whitespace-nowrap w-full'>
        <p>{`Time: ${formattedTime}   Date: ${formattedDate}`}</p>
    </div>
  </div>

  )
}

export default Ticker
