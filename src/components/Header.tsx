import Link from 'next/link'
import React from 'react'
import { FaSearch, FaShoppingBag } from 'react-icons/fa'
import Searchbar from './searchbar'

const Header = () => {
  return (
    <div className=' w-full md:w-[1350px] h-[250px] bg-[#0D0D0DF2] overflow-hidden'>
    <div className='max-w-[1320px] mx-auto h-[87px]'>
        <h1 className='font-bold text-2xl  text-center md:ml-[100px] pt-7 text-[#FF9F0D]'>Food <span className='text-[#ffffff]'>tuck </span></h1>
            {/* navbar */}
        <nav className=' text-white'>
            <ul className='flex font-inter text-[16px]  gap-3 md:gap-7 ml-4 md:ml-2 mt-6'>
                <Link href="/" className='text-[#FF9F0D]'>Home</Link> 
                <Link href="/Menu">Menu</Link>
                <Link href="/Faq">FAQ</Link>
                <Link href="/4O4">4O4</Link>
                <li>About </li>
                <li>Shop </li>
                <li>Contact </li>
            </ul>
            <Searchbar/>
        </nav>
        </div>
        </div>
  )
}

export default Header
