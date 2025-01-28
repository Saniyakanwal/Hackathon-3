'use client'

import { useEffect, useState } from 'react';
import {getFoodData} from '@/sanity/sanitydata.js'
import Image from 'next/image';
import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '@/components/Footer';

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchFoodData() {
      const data = await getFoodData(); // Fetch data from Sanity
      setFoods(data);
    }
    fetchFoodData();
  }, []);

  return (
    <div className="menu">
      <Header/>
      <h1 className='font-bold text-4xl md:ml-[600px] ml-28 mt-6'>Menu</h1>
      <ul className='grid  grid-cols-1 md:grid-cols-3  ml-8 md:ml-16 mt-8 gap-8 mr-10'>
        {foods.map((food:any) => (
          <li key={food}
          className='rounded-lg shadow-2xl md:p-6 p-3  border border-black'
          > 
            {food.imageurl? (
            <Image src={food.imageurl} alt='food img'
            width={400} height={200}
            className='rounded-lg'
            />
            ):(
              <p>no image</p>
            )}
            <h2 className='font-semibold mt-3 md:ml-20 ml-5 text-2xl'>{food.name}</h2>
            <p className='md:text-lg ml-4 md:font-medium '>{food.description}</p>
            <Link
              href={`/Menu/${encodeURIComponent(food.name)}`}
              className="bg-orange-500 md:px-28 px-14 py-2 rounded-lg "
            > View Product
            </Link>
          </li>
        ))}
      </ul>
      <br /><br />
      <Footer/>
    </div>
  );
};

export default FoodList;
