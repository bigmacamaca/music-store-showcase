import React, { useEffect, useRef, useState } from 'react'
import { data } from '../data/product_data'
import { Categories } from './Categories'
import {AiOutlineSearch} from 'react-icons/ai'

export const Product = () => {
    const [products, setProducts] = useState(data)
    const productStartRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filterName = (searchTerm) => {
        console.log("searchTerm is", searchTerm);
        setProducts(
            data.filter((item) => {
                const lowerCaseSearch = searchTerm.toLowerCase();
                return item.name.toLowerCase().includes(lowerCaseSearch)
            })
        )
    }

    const filterType = (categories) => {
        setProducts(
            data.filter((item) => {
                return item.categories === categories;
            })
        )
    }

    const scrollToResult = () => {
        productStartRef.current?.scrollIntoView({behavior: "smooth"})
    }




    const filterPrice = (price) => {
        console.log('Filtering by price:', price);
      
        let sortedProducts = [];
      
        if (price === 'Expensive') {
            sortedProducts = [...products].sort((a, b) => parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, '')));
          } else if (price === 'Cheapest') {
            sortedProducts = [...products].sort((a, b) => parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, '')));
          }
      
        setProducts(sortedProducts);
      };
    
      useEffect(() => {
        scrollToResult()
      });

  return (
    <div className='max-w[1640px] m-auto px-4 py-12'>
         <Categories filterType={filterType} />
         <div ref={productStartRef} />
        <h1 className='text-primary font-bold text-4xl text-center'>Instruments for You</h1>
        {/* Search Input */}
        <div className='flex items-center justify-center p-5'>
            <div className='bg-secondary rounded-md border-primary border-[2px] flex items-center px-2 w-[300px] sm:w-[400px] lg:w-[800px] justify-center'>
                <button>
                    <AiOutlineSearch size={25} button onClick={()=> filterName(searchTerm)}/>
                </button>
                <input
                id='textSearch'
                className='bg-transparent p-2 w-full focus:outline-none'
                type='text'
                value={searchTerm}
                placeholder='Search Products'
                onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
        <div>
            <div className='flex flex-col lg:flex-row justify-between pt-[50px]'>
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px} w-full'>
                    <button onClick={()=> filterPrice('Expensive')} className='m-1 border-orange-600 text-accent hover:text-primary p-2 rounded-md focus:bg-secondary'>Expensive</button>
                    <button onClick={()=> filterPrice('Cheapest')} className='m-1 border-orange-600 text-accent hover:text-primary p-2 rounded-md focus:bg-secondary'>Cheapest</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Product Cards */}
        
        <div className='grid grid-cols-1 max-w-[1640px] h-auto md:grid-cols-3 py-6 sm:grid-cols-1 lg:grid-cols-4 gap-8 pt-4 m-auto'>
            {products.map((item, index)=>( 
                <div key={item.name} className='border shadow-lg rounded-lg hover:scale-105 duration-300 max-h-[550px] bg-secondary'>
                    <img src={item.image} alt={item.name} 
                    className='w-full h-[400px] object-cover rounded-t-lg bg-white'/>
                    <div className='px-2 py-4'>
                        <p className='font-bold text-center'>{item.name}</p>
                        <p className=' text-black p-1 rounded-full text-center'>
                            {item.price}
                    </p>
                    </div>
                </div>
            ) )}
        </div>

    </div>
  )
}
