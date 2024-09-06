import React, { useState } from 'react'

function AboutSection1() {
    const[show,setShow] = useState(false)
    const[text,setText] = useState('Read More')

    const btn = ()=>{
        setShow(!show)
        setText('Show Less')
       
    }
  return (
    <div className='mt-10 grid md:grid-cols-2  font-mont grid-cols-1 py-10 gap-8 md:px-10 lg:px-24 px-4'>
     <div>
        <div>
            <h1 className='text-4xl font-bold'>Find Your Perfect Match</h1>
        </div>
        <div>
            <h2 className=' mt-4'>Welcome to Alberto Watch, where timeless elegance meets modern innovation. Established in 2008, our passion for precision and style has driven us to create wristwatches that not only tell time but also tell a story.

</h2>
        </div>
        <div>
            <h2 className=' mt-4'>Our journey began with a simple vision: to craft watches that combine the artistry of traditional watchmaking with contemporary design. Over the years, we've grown from a small workshop into a globally recognized brand, celebrated for our dedication to quality, innovation, and aesthetic appeal.</h2>
        </div>
        {/* from here is hidden */}
       {show && <div>
       <div>
            <h2 className='text-4xl font-bold mt-4'>Our Craftsmanship</h2>
            <p className='mt-4 '>At Alberto, we believe that a watch is more than just a timepiece. It’s a reflection of individuality, a symbol of achievement, and a companion for life’s moments. Each of our watches is meticulously designed and crafted with the finest materials, ensuring durability and elegance that stand the test of time. Our team of expert watchmakers and designers work hand in hand to bring you collections that are both stylish and functional. From the intricate mechanics of our movements to the flawless finish of our cases, every detail is a testament to our commitment to excellence.</p>
        </div>
        <div>
            <h2 className='text-4xl font-bold my-4'>Our Values</h2>
            <li><b>Quality:</b> We use only the highest quality materials and cutting-edge technology to ensure that our watches are as reliable as they are beautiful.</li>
            <li><b>Innovation:</b> We strive to blend traditional craftsmanship with modern advancements, creating watches that are both classic and contemporary.</li>
            <li><b>Sustainability:</b> We are committed to sustainable practices, from sourcing eco-friendly materials to supporting ethical labor standards in our manufacturing processes.</li>
        </div>
        <div>
            <h2 className='text-4xl font-bold my-4'>Our Promise</h2>
            <p>We stand by every watch we create, offering a comprehensive warranty and unparalleled customer support. Our promise is simple: to deliver timepieces that you can trust and cherish for years to come.</p>
        </div>
       </div>}
        <div className=''>
            <button className='bg-tertiary py-3 px-8 rounded-md text-white mt-4' onClick={btn}>{text}</button>
        </div>
     </div>


     <div className=''>
        <img src="/images/abt1.webp" alt=""  className='object-cover object-top'/>
     </div>
    </div>
  )
}

export default AboutSection1
