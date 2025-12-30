import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-30 text-xs sm:text-sm md:text-base text-gray-700'>
        
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange</p>
            <p className='text-gray-600'>Quick and hassle-free exchange on all eligible products</p>
        </div>

        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7-Day Returns</p>
            <p className='text-gray-600'>Enjoy easy returns within 7 days of delivery</p>
        </div>

        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Customer Support</p>
            <p className='text-gray-600'>Dedicated support available 24/7 for your assistance</p>
        </div>

    </div>
  )
}

export default OurPolicy
