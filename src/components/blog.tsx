import Image from 'next/image'
import React from 'react'
import { FaThumbsUp, FaCommentDots, FaShareAlt } from 'react-icons/fa'

const Blog = () => {
  return (
    <div className='w-[1350px] h-[950px] bg-[#0D0D0DF2] overflow-hidden'>
        <div>
            <h3 className='text-[#FF9F0D] font-vibe text-[32px] pt-14 ml-[650px]'>Blog Post</h3>
            <h1 className='text-[#FF9F0D] font-bold text-5xl ml-[500px]'>La<span className='text-white'>test News & Blog</span></h1>
        </div>
        <div className='flex gap-4 ml-8 mt-10'>
            <div className='w-[424px] h-[569px] border'>
                <Image src="/Images/blog1.jpg" alt='blog1'
                width={423} height={349}/>
                <div>
                    <h5 className='font-inter text-[#FF9F0D] text-sm ml-7 mt-3'>10 February 2022 </h5>
                    <h1 className='text-white font-bold w-[338px] text-2xl ml-7 mt-7'>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h1>
                    <p className='text-white font-inter text-sm ml-7 mt-7'>Learn More</p>
                    <div className='flex gap-4 ml-72 -mt-4'>
                    <FaThumbsUp size={20}
                    className='text-white'/>
                    <FaCommentDots size={20}
                    className='text-[#FF9F0D]'/>
                    <FaShareAlt size={20}
                    className='text-white'/>
                </div>
                </div>
            </div>

            {/* blog2 */}
            <div className='w-[424px] h-[569px] border'>
                <Image src="/Images/blog2.jpg" alt='blog2'
                width={423} height={349}/>
                <div>
                    <h5 className='font-inter text-[#FF9F0D] text-sm ml-7 mt-3'>10 February 2022 </h5>
                    <h1 className='text-white font-bold w-[338px] text-2xl mt-7 ml-7'>Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</h1>
                    <p className='text-white font-inter text-sm mt-7 ml-7'>Learn More</p>
                    <div className='flex gap-4 ml-72 -mt-4'>
                    <FaThumbsUp size={20}
                    className='text-white'/>
                    <FaCommentDots size={20}
                    className='text-[#FF9F0D]'/>
                    <FaShareAlt size={20}
                    className='text-white'/>
                </div>
                </div>
            </div>

            {/* blog3 */}
            <div className='w-[424px] h-[569px] border'>
                <Image src="/Images/blog3.jpg" alt='blog3'
                width={423} height={349}/>
                <div>
                    <h5 className='font-inter text-[#FF9F0D] text-sm ml-7 mt-3'>10 February 2022 </h5>
                    <h1 className='text-white font-bold w-[338px] text-2xl mt-7 ml-7'>Curabitur rutrum velit ac congue malesuada</h1>
                    <p className='text-white font-inter text-sm mt-7 ml-7'>Learn More</p>
                    <div className='flex gap-4 ml-72 -mt-4'>
                    <FaThumbsUp size={20}
                    className='text-white'/>
                    <FaCommentDots size={20}
                    className='text-[#FF9F0D]'/>
                    <FaShareAlt size={20}
                    className='text-white'/>
                </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Blog
