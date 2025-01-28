import Image from 'next/image'
import React from 'react'
import { FaYoutube, FaTwitter, FaFacebook, FaPinterest, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className=' w-full md:w-[1350px] h-[900px] bg-[#0D0D0DF2] text-white overflow-hidden'>
      <div className=' md:max-w-[1170px]'>
        <h1 className='text-[#FF9F0D] font-bold text-[32px] md:ml-32 ml-9 pt-8'>St<span className='text-white'>ill You Need Our Support ?</span></h1>
        <p className='font-inter text-sm md:ml-32 ml-9'>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
       <div className='md:w-[459px] md:h-14 bg-[#FF9F0D] md:ml-[800px] md:-mt-16 mt-6 relative flex'>
        <p className='p-4'> Enter Your Email</p>
        <button className='bg-white w-[163px] h-14 absolute md:ml-80 ml-40 text-[#FF9F0D]'>Subscribe Now</button>
       </div>
      </div>
      <hr  className='md:w-[1170px] border border-[#FF9F0D] mt-16 md:ml-32'/>
      <div>
        <h1 className='font-bold text-2xl ml-28 mt-10'>About Us.</h1>
        <p className='w-[312px] font-inter ml-28 mt-4'>orporate clients and leisure travelers has
been relying on Groundlink for dependab
safe, and professional chauffeured car
service in major cities across World.</p>
      </div>
      <div className='flex items-center space-x-4'>
      <Image src="/Images/watch.png" alt='watch'
        height={72} width={78}
        className='ml-36  '/>
      <div className='w-[149px] ml-56 mt-6'>
        <h5 className='font-inter text-lg'>Opening Houres</h5>
        <p className='font-inter text-sm w-[148.75px]'>Mon - Sat(8.00 - 6.00)</p>
        <p>Sunday - Closed</p>
      </div>
      </div>
      <div className='flex flex-col ml-[550px] -mt-64'>
      <h3 className="font-bold text-lg mb-4">Useful Links</h3>
  <p className="flex flex-col space-y-8">
    <span>About</span>
    <span>News</span>
    <span>Partners</span>
    <span>Team</span>
    <span>Menu</span>
    <span>Contacts</span>
  </p>
      </div>

      <div className='flex flex-col ml-[850px] -mt-[340px]'>
      <h3 className="font-bold text-lg mb-4">Help?</h3>
  <p className="flex flex-col space-y-8">
    <span>FAQ</span>
    <span>Term & conditions</span>
    <span>Reporting</span>
    <span>Documentation</span>
    <span>Support Policy</span>
    <span>Privacy</span>
  </p>
      </div>
      <div className='flex flex-col ml-[1100px] -mt-[350px]'>
        <h1 className='font-bold text-lg mb-4'>Recent Post</h1>
        <div className='w-[244px] h-[53px]'>
          <Image src="/Images/fpic1.png" alt='fpic1'
          width={55.07} height={47.02}/>
          <p className='font-inter text-sm opacity-[49%] ml-16 -mt-11'>20 Feb 2022</p>
          <p className='font-inter ml-16 text-sm '>Keep Your Business </p>
        </div>
        <div className='w-[244px] h-[53px]'>
        <Image src="/Images/fpic2.png" alt='fpic2'
          width={55.07} height={47.02}/>
        <p className='font-inter text-sm opacity-[49%] ml-16 -mt-11'>20 Feb 2022</p>
        <p className='font-inter ml-16 text-sm '>Keep Your Business </p>
        </div>
        <div className='w-[244px] h-[53px]'>
        <Image src="/Images/fpic3.png" alt='fpic3'
          width={55.07} height={47.02}/>
        <p className='font-inter text-sm opacity-[49%] ml-16 -mt-11'>20 Feb 2022</p>
        <p className='font-inter ml-16 text-sm '>Keep Your Business </p>
        </div>
      </div>

     
      
      <div className='bg-[#4F4F4F] h-[100px] mt-[390px]'>
      <div className=" flex flex-col md:flex-row justify-between items-center">
    <p className="text-sm mb-4 md:mb-0 ml-28 pt-10">&copy; 2024 Your Company. All rights reserved.</p>
    <div className="flex space-x-4 mt-8 mr-10">
      {/* Social Media Icons */}
      <span className="text-lg">
        <FaFacebook size={36}
        className='bg-white text-black' />
      </span>
      <span className="text-lg">
       <FaTwitter size={36}
       className='bg-white text-black'/>
      </span>
      <span className="text-lg">
       <FaInstagram size={36}
       className='bg-white text-black'/>
      </span>
      <span className="text-lg">
       <FaYoutube size={36}
       className='bg-white text-[#FF9F0D]'/>
      </span>
      <span className="text-lg">
        <FaPinterest size={36}
        className='bg-white text-black'/>
      </span>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Footer
