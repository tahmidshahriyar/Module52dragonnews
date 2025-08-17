import React from 'react'
import logo from './logo.png'
import { format } from 'date-fns';
const Header = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-3'>
        <img className='w-25vw' src={logo} alt="" />
        <p className='text-accent'>Journalism without fear or favour</p>
        <p>{format(new Date(),"EEEE , MMMM MM , yyyy")}</p>
    </div>
  )
}

export default Header

