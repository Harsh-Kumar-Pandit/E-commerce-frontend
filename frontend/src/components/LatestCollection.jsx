import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { useState } from 'react';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    // rendring 10 latest images 
    const latestProducts = products.slice(0,10).reverse();
    // const [latestProducts, setlatestProducts] = useState([]);

    // useEffect(() => {
    //   setlatestProducts(products.slice(0,10));
    // },[])
    // console.log(products)
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
       <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
  Discover our latest arrivals, thoughtfully designed with premium materials 
  and modern aesthetics to elevate your everyday style.
</p>

      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item) => (
            <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
