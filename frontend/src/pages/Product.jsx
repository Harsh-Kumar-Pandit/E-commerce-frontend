import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('');

  const fetchProducts = async () => {
    const product = products.find((item) => item._id === productId);
    setProductData(product || null)
    setImage(product.images[0])

    }
    const handleSizeClick = (item) => {
  setSize((prev) => (prev === item ? null : item));
};

  
  useEffect(() => {
    fetchProducts();
  }, [productId, products])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-baseline sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.images.map((item, index) => (
                <img onClick={() => {
                  setImage(item)
                }} src={item} key={index} alt={productData.name} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/*--------- Product Info ---------*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt=""  className='w-3 5'/>
            <img src={assets.star_icon} alt=""  className='w-3 5'/>
            <img src={assets.star_icon} alt=""  className='w-3 5'/>
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_dull_icon} alt="" className='w-3 5' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => handleSizeClick(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : 'border-none'}`} key={index}>{item}</button>
                ))
              }
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='text-sm text-gray-200 mt-5 flex flex-col gap-1'/>
          <p className='text-gray-500'>✔ 100% original product</p>
          <p className='text-gray-500'>✔ Cash on delivery available</p>
          <p className='text-gray-500'>✔ Easy returns within 7 days

</p>
        </div>
      </div>
      {/* Description & Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam natus iusto quisquam labore tempore, recusandae, vero pariatur itaque id nulla optio maxime deserunt fugiat placeat possimus maiores perferendis ab dolorum!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis atque suscipit ea eius repellendus magnam pariatur dolorem ipsam, quas accusantium minus eos fuga aliquam saepe, quasi minima voluptatibus officiis iste.</p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div>Product loading...</div>
}

export default Product
