import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function Accordion() {
    const[accord,setAccord] = useState(null)
    const dion = (index)=>{
        setAccord(accord === index ? null : index)
    }
    const accordionData = [
        {
            question: 'Are prices shown in local currency?',
            answer: 'All products on Watches.com are priced in US Dollars ($ USD). Customers located outside of the United States will see a total amount charged on their bank statement in the default currency their bank deals in. The difference between USD order total and the amount charged on your bank statement is due to currency conversion from your financial institution.'
        },
        {
            question: 'Are the watch 100% Authentic ?',
            answer: 'Yes, Watches.com is an Authorized Dealer of ALL the brands/watches we carry and they all come with full manufacturer warranties that are honored internationally. All of our watches sold are 100% Authentic Guaranteed, brand new, unworn and come in the original manufacturer packaging.'
        },
        {
            question: 'Where is my order',
            answer: 'All orders are processed and shipped out by 5pm (PST) Monday through Friday. Orders received after 12pm (PST) will be processed the next business day. All shipping times are estimates provided to us by our shipping partners. Weather or missed delivery attempts can often be a factor in delayed shipments. Also international shipments can often be delayed due to high variance with each country’s customs processing. To track your package, just find your shipping confirmation email from us and click Track Package.'
        }
    ]
  return (
    <div className='font-mont py-10'>
      <div>
        <h1 className='text-4xl text-center font-bold text-primary'>Support</h1>
      </div>
      <div className='grid grid-cols-1 gap-6 px-8 mt-6  bg-[#f0f0f0] lg:w-[60%] md:w-[80%] mx-auto py-10 shadow'>
            {accordionData.map((item,key)=>(
                <div key={key}>
                    <button onClick={()=>dion(key)} className='flex items-center justify-between w-full py-4 border-b border-primary'>
                        <span className='font-bold capitalize'>{item.question}</span>
                        <span className={`transform transition-transform duration-500 ${accord === key ? 'rotate-180' : ''}`}><FaArrowUp /></span>
                    </button>
                    <div>
                        <div className={`text-sm transform overflow-hidden duration-300 ${accord === key ? 'max-h-screen' : 'max-h-0'}`}>{item.answer}</div>
                    </div>
                </div>
            ))}
      </div>
    </div>
  )
}

export default Accordion
