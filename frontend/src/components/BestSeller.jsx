import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
  const { products } = useContext(ShopContext)
  const bestseller = products?.filter(item => item.bestseller === true).slice(0, 5)

  return (
    <section className="my-20 mb-10 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-12">
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed">
          Our best sellers — customer favorites trusted for quality, comfort, and timeless style.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestseller.map(item => (
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

export default BestSeller
