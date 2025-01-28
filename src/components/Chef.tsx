import Image from 'next/image'
import React from 'react'

const Chef = () => {
  return (
    <div className='w-full md:w-[1350px] h-[750px] bg-[#0D0D0DF2] text-white relative overflow-x-hidden'>
        <div>
            <h3 className='text-[#FF9F0D] font-vibe text-[32px] ml-[700px]'>Chefs</h3>
            <h1 className='text-[#FF9F0D] font-bold text-5xl ml-[580px]'>Me<span className='text-white'>et Our Chef</span></h1>
        </div>
        <div className='md:flex grid md:ml-10 gap-3 mt-6'>
            <Image src="/Images/Chef1.png" alt='1'
            width={312} height={391}/>

            <Image src="/Images/Chef2.png" alt='2'
            width={312} height={391}/>

            <Image src="/Images/Chef3.png" alt='3'
            width={312} height={391}/>

            <Image src="/Images/Chef4.png" alt='4'
            width={312} height={391}/>
        </div>
      <div>
        <Image src="/Images/leaf2.png" alt='leaf'
        width={409.74} height={531}
        className='-mt-96 '/>
      </div>
      <button className='border border-[#FF9F0D] w-[155px] h-[50px] rounded-[25px] ml-[700px] text-white  absolute bottom-[85px]'>See More</button>
    </div>
  )
}

export default Chef
