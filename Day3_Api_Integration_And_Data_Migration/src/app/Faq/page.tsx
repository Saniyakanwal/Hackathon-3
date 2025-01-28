import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import {FaPlus} from "react-icons/fa"

const Faq = () => {
  return (
    <div>
      <Header/>
     <div  className="bg-[url('/Images/faq.png')] w-[1500px] h-[410px] overflow-hidden">
      <div className='w-[230px] h-[104px]'>
        <h1 className='text-white font-bold text-5xl ml-[850px] pt-[200px] w-[230px]'>FAQ Page</h1>
        <div className='ml-[900px] mt-3 w-[129px]'>
            <span className='text-white font-poppin text-sm '>Home {'>'} </span><span className='text-[#FF9F0D] text-sm font-poppin'>Faq</span>
      </div>
     </div>
     </div>
      <div className='w-[1500px] h-[300px] '>
        <h1 className='font-bold text-5xl ml-[500px] pt-32'>Questions Looks Here</h1>
        <p className='font-inter text-sm ml-[400px] mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
      </div>
      
      <div className='w-[1320px] h-[558px] space-y-4 ml-20'>
        {/* 1 & 2 */}
        <div className='flex gap-4 '>
          <div className='w-[648px] h-[170px] bg-[#FAF7F2]'>
            <div className='w-[600px] h-[100px]'>
              <h1 className='font-bold text-lg text-[#333333] m-4 '>How we serve food?</h1>
              <FaPlus size={24}
              className='ml-[600px] -mt-10'/>
              <p className='font-inter text-[16px] text-[#4F4F4F] m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
          </div>
          <div className='w-[648px] h-[170px] bg-[#FAF7F2]'>
          <div className='w-[600px] h-[100px]'>
          <h1 className='font-bold text-lg text-[#333333] m-4'>How can we get in touch with you?</h1>
          <FaPlus size={24}
              className='ml-[600px] -mt-10'/>
          <p className='font-inter text-[16px] text-[#4F4F4F] m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
          </div>
          </div>
        </div>

        {/* 3 & 4 */}
        <div className='flex gap-4'>
        <div className='w-[648px] h-[170px] bg-[#FAF7F2]'>
        <div className='w-[600px] h-[100px]'>
        <h1 className='font-bold text-lg text-[#333333] m-4'>How is our food quality?</h1>
        <FaPlus size={24}
              className='ml-[600px] -mt-10'/>
        <p className='font-inter text-[16px] text-[#4F4F4F] m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        </div>
        <div className='w-[648px] h-[170px] bg-[#FAF7F2]'>
        <div className='w-[600px] h-[100px]'>
        <h1 className='font-bold text-lg text-[#333333] m-4'>What will be delivered? And When?</h1>
        <FaPlus size={24}
              className='ml-[600px] -mt-10'/>
        <p className='font-inter text-[16px] text-[#4F4F4F] m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        </div>
        </div>

        {/* 5 & 6 */}
        <div className='flex gap-4'>
        <div className='w-[648px] h-[170px] bg-[#FAF7F2]'>
        <div className='w-[600px] h-[100px]'>
        <h1 className='font-bold text-lg text-[#333333] m-4'>How do we give home delivery?</h1>
        <FaPlus size={24}
              className='ml-[600px] -mt-10'/>
        <p className='font-inter text-[16px] text-[#4F4F4F] m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        </div>
        <div className='w-[648px] h-[170px] bg-[#FAF7F2]'>
        <div className='w-[600px] h-[100px]'>
        <h1 className='font-bold text-lg text-[#333333] m-4'>Is this restaurant 24 hours open?</h1>
        <FaPlus size={24}
              className='ml-[600px] -mt-10'/>
        <p className='font-inter text-[16px] text-[#4F4F4F] m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        </div>
        </div>
      </div>
      <br />
      <br /> <br />
      <Footer/>
    </div>
  )
}

export default Faq
