import React from 'react'
import {FaPlay} from "react-icons/fa"

const Document = () => {
  return (
    <div className=" w-full md:w-[1350px] h-[550px] bg-[url('/Images/bg.png')] bg-no-repeat overflow-hidden">
      <div>
        <h3 className='text-[#FF9F0D] font-vibe text-[32px]  ml-4 md:ml-[850px] pt-16'>Restaurant Active Process</h3>
        <h1 className='text-[#FF9F0D] font-bold text-5xl w-[705px]  -ml-6 md:ml-[600px] text-right'>We <span className='text-white'> Document Every Food
Bean Process untile it is saved</span></h1>
       <p className='font-inter text-[16px] text-white w-[651px] ml-[630px] text-right mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </p>
      </div>
      <div className='w-[369px] h-[60px]'>
        <button className='border border-[#FF9F0D] w-[190px] h-[60px] rounded-[30px] ml-[800px] mt-8 text-black font-inter'>Read More</button>
        <FaPlay size={60}
        className='text-[#FF9F0D] ml-[1020px] -mt-14'/>
        <p className='text-white font-bold font-inter ml-[1080px] -mt-11 w-[83px]'>Play Video</p>
      </div>
    </div>
  )
}

export default Document
