import React,{useContext} from 'react'
import { cartContext } from '../CartManaget/CartProvider'


function Cart() {
    const{cart,updateQuantities,removeProduct} = useContext(cartContext)

    const totalPrice = cart.reduce((acc,item)=> acc + item.quantity * item.price,0)         
  return (
    <div className='font-mont'>
      <h1 className='text-center text-5xl font-bold '>My Watch Cart</h1>
      <div>
        {cart.length === 0 ? (
            <p className='text-red-600 font-bold text-3xl'>Your Cart is empty</p>
        ):(
            <div>
                {cart.map((val,index)=>(
                    <div key={index} className='grid md:grid-cols-2 grid-cols-1 justify-between md:px-10 lg:px-24 px-4 w-full'>
                        <div className='bg-slate-200 py-6 px-6'>
                            <div>
                                <img src={val.image} alt="" />
                            </div>
                            <div>
                                <p>{val.name}</p>
                                <p>{val.description}</p>
                                <p>{val.price}</p>
                            </div>
                        </div>
                        <div className='bg-slate-200 py-6 px-6 flex gap-4 items-center'>
                            <button className='py-3 px-2 rounded bg-tertiary text-white text-3xl ' onClick={()=>updateQuantities(val.quantity - 1, val.id)}>-</button>
                            <h2>{val.quantity}</h2>
                            <button className='py-3 px-2 rounded bg-tertiary text-white text-3xl ' onClick={()=>updateQuantities(val.quantity + 1, val.id)}>+</button>
                            <button className='text-xl text-red-600 font-bold' onClick={()=>removeProduct(val.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>
      <p className='text-red-600 font-bold py-6 text-end text-2xl'>${totalPrice.toFixed(2)}</p>
    </div>
  )
}

export default Cart
