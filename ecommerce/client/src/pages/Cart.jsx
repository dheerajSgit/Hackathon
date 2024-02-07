import React from 'react'
import { useUser } from '@/store/user.jsx'

const Cart = () => {
    const { cart } = useUser()
  return (
    <div className='flex flex-col '>
        <div className='flex ml-[10rem] justify-center gap-[20rem] bg-blue-200 w-[80vw]'>
            <div>
                <h1 className='font-bold text-xl'>Product</h1>
            </div>
            <div className='flex items-center justify-center gap-[9.5rem]'>
            <h1 className='font-bold text-xl'>Price</h1>
            <h1 className='font-bold text-xl'>Quantity</h1>
            <h1 className='font-bold text-xl'>SubTotal</h1>
            </div>
            
            
        </div>
        <div className='flex flex-col gap-10'>
            {
                cart.map((item,i) => {
                    return(
                        <>
                        
                    <div className=' flex ml-[5rem] justify-center  gap-[16rem] w-[80vw]'>
                    <div className='flex items-center justify-center gap-[5rem]'>
                        <div>
                            <img src={cart[i].product?.thumbnail} alt="" className='w-[10rem] h-[10rem]'/>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <h1 >{cart[i].product.title}</h1>
                            <p>{cart[i].product.brand}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[13rem]'>
                        <p>{cart[i].product.price*90}</p>
                        <div>{cart[i].quantity}</div>
                        <p>{cart[i].product.price*90*(cart[0].quantity)}</p>
                    </div>
                </div>
                <div className=' mx-auto w-[80vw] h-[.1rem] bg-black'></div>
                </> 
                    )
                })

            }
        </div>
       
    </div>
  )
}

export default Cart