import Image from 'next/image';
import React from 'react'
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=' w-full md:w-[1350px] h-[750px] bg-[#0D0D0DF2] overflow-hidden'>
        <div className='relative mx-auto px-2 sm:px-8 lg:px-16 flex flex-col lg:flex-row'>
          {/* social icons */}
        <hr  className=' absolute text-white -rotate-[90deg] w-[158px] border  -ml-16 md:-ml-6 '/>
        <div className=' absolute space-y-6 pl-9 pt-[90px] -ml-9 md:ml-0'>
          <FaFacebook size={25.28}
          className='text-white '/>
          <FaTwitter size={25.28}
          className='text-[#FF9F0D]'/>
          <FaPinterest size={25.28}
          className='text-white'/>
          </div>
          <hr  className=' absolute text-white -rotate-[90deg] w-[147px] border  -ml-16 md:-ml-6 mt-[300px]'/>
          <div>
            {/* text content */}
        <p className='text-[#FF9F0D] font-vibe text-[32px] text-center lg:text-left lg:ml-20 pt-20'>Its Quick & Amusing!</p>
        <h1 className='text-[#FF9F0D] font-bold text-4xl lg:text-6xl lg:w-[472px]  ml-16 lg:ml-20'>Th<span className='text-[#ffffff]'>e Art of speed
           food Quality</span></h1>
        <p className='text-[#ffffff] lg:w-[418px] font-inter text-[16px]  ml-16 lg:ml-20 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Varius sed pharetra dictum neque massa congue</p>   
           <button className='bg-[#FF9F0D] w-[190px] h-[60px] rounded-[30px] text-white font-inter text-[16px]  ml-16 lg:ml-20 mt-7'>See Menu</button>
    </div>
    </div>
             {/* hero img */}
    <div className='mt-12 lg:-mt-[420px] ml-2 lg:ml-[600px]'>
        <Image src="/Images/Image.png" alt='hero'
        width={870} height={670}/>
    </div>
    </div>
  )
}

export default Hero
