import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const latestProducts = products.slice(0, 10).reverse()

  return (
    <section className="my-10 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-12">
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed">
          Discover our latest arrivals, thoughtfully designed with premium materials
          and modern aesthetics to elevate your everyday style.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {latestProducts.map(item => (
          <div
            key={item._id}
            className="group rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <ProductItem
              id={item._id}
              image={item.images}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default LatestCollection
