import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className=' w-full md:w-[1350px]  md:h-[750px] bg-[#0D0D0DF2] text-white relative overflow-hidden'>
      <div>
        <h3 className='font-vibe text-[32px] text-[#FF9F0D]  ml-7 mt-10 md:mt-0 md:ml-40'>Testimonials</h3>
        <h1 className='font-bold text-5xl  ml-7 md:ml-40'>What our client are saying</h1>
      </div>
      <div className=' md:w-[868.47px] h-[450.89px] relative shadow-lg bg-white md:ml-80 mt-28'>
        <Image src="/Images/man.png" alt='man'
        width={132.92} height={133.97}
        className='ml-7 absolute -top-16 left-[calc(50%-66.46px)] z-10'/>

        <Image src="/Images/Quotes.png" alt='quote'
        width={48} height={48}
        className='ml-[430px] pt-24'/>

        <p className='text-black text-lg   ml-7 md:ml-24 -mt-10  md:mt-5 md:w-[696.57px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

        <Image src="/Images/star.png" alt='star'
        width={152} height={24}
        className='md:ml-[350px] mt-12'/>

        <h1 className='font-bold text-2xl ml-[350px] mt-5 text-black'>Alamin Hasan</h1>
        <p className='text-sm text-black ml-[370px] mt-2'>Food Specialist</p>
      </div>
      <Image src="/Images/side.png" alt='side'
      width={397.75} height={500.56}
      className='ml-[1000px] -mt-[300px]'/>

      <Image src = "/Images/Dot.png" alt ='dot'
      width={86} height={16}
      className='-mt-[130px] ml-[700px]'/>
    </div>
  )
}

export default Testimonials
