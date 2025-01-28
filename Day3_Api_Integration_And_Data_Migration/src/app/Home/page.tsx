import React from 'react'
import About from '@/components/about'
import FoodCategory from '@/components/foodCategory'
import Progress from '@/components/Progress'
import Menu from '@/components/menu'
import Chef from '@/components/Chef'
import Testimonials from '@/components/Testimonials'
import Document from '@/components/Document'
import Blog from '@/components/blog'
import Footer from '@/components/Footer'
import Hero from '../../components/hero'
import Header from '@/components/Header'


const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <FoodCategory/>
      <Progress/>
      <Menu/>
      <Chef/>
      <Testimonials/>
      <Document/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home
 