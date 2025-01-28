import Footer from "@/components/Footer"
import Header from "@/components/Header"

const Error = () => {
    return (
      <div>
        <Header/>
       <div  className="bg-[url('/Images/faq.png')] w-full md:w-[1500px] h-[410px] overflow-hidden">
        <div className=' w-full md:w-[230px] h-[104px]'>
          <h1 className='text-white font-bold  text-3xl lg:text-5xl  ml-20 lg:ml-[850px] pt-[200px] w-[230px]'>404 Error</h1>
          <div className=' ml-24 lg:ml-[900px] mt-3 w-[129px]'>
              <span className='text-white font-poppin text-sm '>Home {'>'} </span><span className='text-[#FF9F0D] text-sm font-poppin'>404</span>
        </div>
       </div>
       </div>
       <div className=" w-full lg:w-[630px] h-[342px]">
        <h1 className="text-[#FF9F0D] font-bold  text-[64px] lg:text-[96px]  ml-32 lg:ml-[700px] mt-20">404</h1>
        <h2 className="font-bold  text-lg lg:text-[32px]  ml-12 lg:ml-[500px] mt-2  w-full lg:w-[630px]">Oops! Look likes something going wrong</h2>
        <p className="font-inter  text-sm lg:text-lg  ml-10 lg:ml-[550px] mt-2  w-full lg:w-[490px]">Page Cannot be found! we’ll have it figured out in no time. <br />
<span className="ml-0 lg:ml-20">Menwhile, cheek out these fresh ideas: </span></p>
<button className="bg-[#FF9F0D] w-[197px] h-[58px] rounded-md  ml-16 lg:ml-[700px] font-bold mt-6 text-white">Go to home</button>
       </div>
       <br /> <br /> <br /> <br />
       <Footer/>
    </div>
  )
}

export default Error