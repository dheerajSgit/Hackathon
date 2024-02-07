import React, { useEffect ,useState} from 'react'
import { Button } from "@/components/ui/button"
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from '@/store/user.jsx';
import Profile from './profile';


const Navbar = () => {
  const { userData ,isLoggedIn,cart} = useUser();
  const [length , setLength] = useState(0)
  useEffect(() => {
    let len = 0
    for(let i=0;i<cart.length;i++){
      len = len + cart[i].quantity
      setLength(len)
    }
  })
  return (
    <div className='flex justify-between px-[1rem] py-[1.2rem] items-center'>
      <div className='flex gap-[10rem]'>
        <Link to='/' className='font-bold text-4xl font-mono'>Ecomm</Link>
        <div>
          <ul className='flex gap-[3rem]'>
            <li className='text-xl hover:border-b-4 hover:border-black hover:cursor'>Fashion</li>
            <li className='text-xl hover:border-b-4 hover:border-black hover:cursor'>Electronics</li>
            <li className='text-xl hover:border-b-4 hover:border-black hover:cursor'>Grocery</li>
          </ul>
        </div>
      </div>
      <div>
        {isLoggedIn ? (
          <div className='flex gap-8 items-center justify-center mr-[30px]'>
        <Link to='/cart'>
        <Avatar>
        <AvatarFallback className='relative rounded-full w-[50px] h-[50px]' >
        <FaCartArrowDown className='text-2xl ' />
        </AvatarFallback>
        </Avatar>
        </Link>
        <div  className='text-sm absolute top-3 right-[7rem] bg-red-400 text-white rounded-full px-1'>{length}</div>
         <Profile/>
        </div>
        )
        : 
        (
        <div className='flex gap-8'>
        <Link to='/signin'>
        <Button>Sign In</Button>
        </Link>
        <Link to='/signup'>
        <Button>Sign up</Button>
        </Link>
        </div>
  )
    }
        {/* <FaCartArrowDown  className='text-2xl'/> */}

      </div>
    </div>
  )
}

export default Navbar