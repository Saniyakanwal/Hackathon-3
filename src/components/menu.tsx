import Image from 'next/image'
import React from 'react'

const Menu = () => {
  return (
    <div  className='w-[1350px] h-[750px] bg-[#0D0D0DF2] text-white hidden sm:block'>
      <div className='md:w-[1320px] h-[656px] '>
        <p className='font-vibe text-[#FF9F0D] text-[32px] ml-[600px] '>Choose & pick</p>
        <h1 className='text-[#FF9F0D] font-bold text-5xl  ml-[480px]'>Fr<span className='text-white'>om Our Menu</span></h1>
        <nav className=' text-white'>
            <ul className='flex font-inter text-[16px]  gap-24  ml-40 mt-14'>
                <li className='text-[#FF9F0D]'>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
                <li>Dessert</li>
                <li>Drink</li>
                <li>Snack</li>
                <li>Suops </li>
            </ul>
            </nav>
            <div>
                <Image src="/Images/frame.png" alt='frame'
                width={515} height={406}
                className='md:mt-11 md:ml-20 '/>

                <Image src="/Images/plate.png" alt='frame'
                 width={366} height={362}
                className='  mt-20 md:-mt-[400px] md:ml-40'/>
            </div>
             
             {/* img1 & 2 */}
             <div className='md:flex grid  ml-5 md:ml-[600px] md:-mt-[340px] space-x-28'>
            <div className='md:w-[250px] h-[79px]'> 
                <Image src="/Images/pic1.png" alt='pic1'
                width={80} height={79}/>
                <h1 className='font-bold text-[20px]  ml-24 -mt-20'>Lettuce Leaf</h1>
                <p className='font-inter text-[12px] whitespace-nowrap ml-24'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='font-inter  font-bold text-[#FF9F0D] text-[18px] ml-24'>12.5$</p>
            </div>
            <div className='w-[370px] h-[79px]'>
            <Image src="/Images/pic2.png" alt='pic2'
                width={80} height={79}/>
                <h1 className='font-bold text-[20px] ml-24 -mt-20'>Glow Cheese</h1>
                <p className='font-inter text-[12px] whitespace-nowrap ml-24'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='font-inter  font-bold text-[#FF9F0D] text-[18px] ml-24'>12.5$</p>
            </div>
            </div>
            
            {/* img3 & 4 */}
            <div className='md:flex grid ml-5 md:ml-[600px] mt-6 space-x-28'>
            <div className='w-[250px] h-[79px]'>
            <Image src="/Images/pic3.png" alt='pic3'
                width={80} height={79}/>
                <h1 className='font-bold text-[20px]  ml-24 -mt-20'>Fresh Breakfast</h1>
                <p className='font-inter text-[12px] whitespace-nowrap ml-24'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='font-inter  font-bold text-[#FF9F0D] text-[18px] ml-24'>14.5$</p>
            </div>
            <div className='w-[370px] h-[79px]'>
            <Image src="/Images/pic4.png" alt='pic4'
                width={80} height={79}/>
                <h1 className='font-bold text-[20px] ml-24 -mt-20'>Italian Pizza</h1>
                <p className='font-inter text-[12px] whitespace-nowrap ml-24'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='font-inter  font-bold text-[#FF9F0D] text-[18px] ml-24'>14.5$</p>
            </div>
            </div>
             
             {/* img5 & 6 */}
            <div className='flex ml-[600px] mt-6 space-x-28'>
            <div className='w-[250px] h-[79px]'>
            <Image src="/Images/pic5.png" alt='pic5'
                width={80} height={79}/>
                <h1 className='font-bold text-[20px] ml-24 -mt-20'>Mild Butter</h1>
                <p className='font-inter text-[12px] whitespace-nowrap ml-24'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='font-inter  font-bold text-[#FF9F0D] text-[18px] ml-24'>12.5$</p>
            </div>
            <div className='w-[370px] h-[79px]'>
            <Image src="/Images/pic6.png" alt='pic6'
                width={80} height={79}/>
                <h1 className='font-bold text-[20px]  ml-24 -mt-20'>Sllice Beef</h1>
                <p className='font-inter text-[12px] whitespace-nowrap ml-24'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='font-inter  font-bold text-[#FF9F0D] text-[18px] ml-24'>12.5$</p>
            </div>
            </div>

            {/* img7 & 8 */}
            <div className='flex ml-[600px] mt-6 space-x-28'>
            <div className='w-[250px] h-[79px]'>
            <Image src="/Images/pic7.png" alt='pic7'
                width={80} height={79}/>
                <h1 className='font-bold text-[20px] ml-24 -mt-20'>Fresh Bread</h1>
                <p className='font-inter text-[12px] whitespace-nowrap ml-24'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='font-inter  font-bold text-[#FF9F0D] text-[18px] ml-24'>12.5$</p>
            </div>
            <div className='w-[370px] h-[79px]'>
            <Image src="/Images/pic8.png" alt='pic8'
                width={80} height={79}/>
                <h1 className='font-bold text-[20px] ml-24 -mt-20'>Mushaom Pizza</h1>
                <p className='font-inter text-[12px] whitespace-nowrap ml-24'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='font-inter  font-bold text-[#FF9F0D] text-[18px] ml-24'>12.5$</p>
            </div>
            </div>
            </div>
      </div>
  )
}

export default Menu
