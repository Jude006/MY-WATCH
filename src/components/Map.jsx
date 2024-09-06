import React from 'react'

function Map() {
  return (
    <div className='lg:px-20 md:px-10 px-6 my-10 py-10 shadow' >
      <div className='bg-slate-200 shadow md:h-[60vh]'>
      <div style={{ width: "100%", height: "450px" }}>
      <iframe
        title="Sango-Ota Garage Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.53205853761!2d3.2432576743604704!3d6.704724121032197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b98305b946fa7%3A0xeeaf203c5ae49b21!2sSango-Ota%20Garage!5e0!3m2!1sen!2sng!4v1725235812162!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
      </div>
    </div>
  )
}

export default Map
