'use client'
import React, { useState } from 'react'
import { FaSearch, FaShoppingBag } from 'react-icons/fa'


const data = [
    {title:'Menu', slug:'/Menu'},
    {title:'chef', slug:'/Menu'},
    {title:'review', slug:'/Menu'},
    {title:'help center', slug:'/Menu'},
    {title:'FAQ', slug:'/FAQ'},
    {title:'4o4', slug:'/4o4'},
    {title:'cart', slug:'/Menu'},
    {title:'Menu', slug:'/Menu'},
    {title:'Menu', slug:'/Menu'},
]
export default function Searchbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState<{title:string; slug:string}[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleSearch = (e: { target: { value: string; }; }) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
    
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(value)
        );
    
        setFilteredData(filtered);
        setShowSuggestions(true);
      };
      const handleSelect = (slug: string) => {
        setShowSuggestions(false);
        window.location.href = slug; // Navigate to the selected page
      };
  return (
    <div>
       <div className='w-[300px] mt-4 md:mt-0 h-[54px] border border-[#FF9F0D] rounded-[27px] ml-4 md:ml-[900px]'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => setShowSuggestions(true)}
        placeholder="Search..."
        className=" bg-transparent text-white placeholder-white focus:outline-none ml-4 mt-3"
      />
       <FaSearch size={24} 
            className='ml-64 -mt-5'/>
           <FaShoppingBag size={24}
           className='ml-[305px] -mt-6' />
      {showSuggestions && (
        <ul className='max-h-48 mt-6 bg-white overflow-y-auto'>
            {filteredData.map((item) => (
                <li
                key={item.slug}
                onClick={() => handleSelect(item.slug)}
                className='p-2 mt-8 ml-7 border-b border-gray-400  hover:bg-blue-500 text-black cursor-pointer'
                >
                    {item.title}
                </li>
            ))}
        </ul>
      )}
            </div>
    </div>
  )
}
