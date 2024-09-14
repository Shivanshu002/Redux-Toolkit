import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../assests/logo/logo-no-background.png';


const Navbar = () => {


    const items = useSelector((state) => state.cart);


    return (

        <>
            <div className='flex justify-between items-center bg-[#7c0060]/85 md:p-5 p-2 cursor-pointer pl-3 pr-3'>

                <span className='logo'>
                    <img src={logo} alt='logo' className='md:w-[200px] w-[100px]' />
                </span>

                <div className='flex md:gap-10 gap-4 items-center text-white font-medium md:text-[20px] text-[15px]'>
                    <Link className='navLink' to={'/'}>Home</Link>
                    <Link className='navLink' to={'/cart'}>Cart</Link>
                </div>

                <span className='text-white font-medium md:text-[20px] text-[15px]'>Cart items : {items.length}</span>

            </div>
        </>

    )
}

export default Navbar
