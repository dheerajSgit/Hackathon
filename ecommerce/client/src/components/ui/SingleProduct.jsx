import React, { useEffect ,useState} from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useParams } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { Button } from '@/components/ui/button';
import{Input}  from '@/components/ui/input';
import {useUser} from '@/store/user.jsx'
import { useToast } from "@/components/ui/use-toast"

const SingleProduct = () => {
  const { toast } = useToast()
  const {id} = useParams()
  const {userData,addToCart,cart} = useUser()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)

  const  toastMessage =({message,variant}) =>{
    toast({
      description: `${message}`,
      variant: `${variant}`,
    })
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`)
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchData()
  },[])

  const handleaddToCart = async() => {
    try {
      const res = await fetch(`http://ec2-13-48-30-49.eu-north-1.compute.amazonaws.com:3000/api/users/${userData?.email}/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({quantity})
    })

    const data = await res.json()
    if (data.success===true) {
      console.log('Item added to cart');
      addToCart(data.cart);
      toastMessage({message: 'Item added to cart',variant:'outline'})
      console.log(cart)
    }
    else{
      console.log('Item not added to cart');
      console.log(data.error);
    }
      
    } catch (error) {
      console.log(error);
    }
    
    

  }
  return (
    <div >
      {
        product.images ?
        (
      <div className='flex justify-center  gap-[5rem] mt-[4rem] '>
        <div>
          <Carousel className="w-full max-w-[30vw]">
        <CarouselContent>
          {product.images.map((image,index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src={image} alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
      <div className='w-[.5px] bg-black h-[65vh]'></div>
      <div className='flex gap-[3rem] flex-col'>
        <div className='flex flex-col gap-3'>
        <h1 className='text-2xl font-bold text-blue-800'>{product.title}</h1>
        <p className='text-xl text-gray-600'>{ `₹  ${ product.price*90}`}</p>
        <div><Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly /></div>
        <p>{product.description}</p>
        <hr />
        </div>
        <div className='flex gap-2 items-center'>
          <p>Quantity:</p>
          <Button onClick={()=>{
            if(quantity>1){
              setQuantity(quantity-1)
            }
          }}>-</Button>
          <Input type='number' value={quantity} className='w-[5rem]' readOnly />
          <Button onClick={()=>{
            setQuantity(quantity+1)
          }}>+</Button>
        </div>
        <div className='flex items-center gap-4 mt-4'>
          <Button onClick={handleaddToCart}>Add to Cart</Button>
          <Button>Buy Now</Button>
        </div>

      </div>
     </div>
        
    
      
      
      )

      : null
      }


    
    </div>
  )
}

export default SingleProduct