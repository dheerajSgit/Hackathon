import React from 'react'
import { Button } from "client/src/components/ui/button"
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
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
      <div className='flex gap-[1rem] items-center'>
        <Link to='/signin'>
        <Button>Sign In</Button>
        </Link>
        <Link to='/signup'>
        <Button>Sign up</Button>
        </Link>
        {/* <FaCartArrowDown  className='text-2xl'/> */}

      </div>
    </div>
  )
}

export default Navbar