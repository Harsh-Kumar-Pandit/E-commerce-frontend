import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 px-4 sm:px-10 max-w-6xl mx-auto">

      {/* PAGE TITLE */}
      <div className="mb-10">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className="space-y-6">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-5
                       shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              {/* LEFT: PRODUCT INFO */}
              <div className="flex items-start gap-6 text-sm">
                <img
                  className="w-16 sm:w-20 h-20 object-cover rounded-lg"
                  src={item.image[0]}
                  alt={item.name}
                />

                <div>
                  <p className="text-base font-medium text-gray-900">
                    {item.name}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
                    <p className="font-medium text-gray-900">
                      {currency}{item.price}
                    </p>
                    <p>Qty: 1</p>
                    <p>Size: M</p>
                  </div>

                  <p className="mt-2 text-sm">
                    Date:{" "}
                    <span className="text-gray-400">
                      25 Jul, 2025
                    </span>
                  </p>
                </div>
              </div>

              {/* RIGHT: STATUS + ACTION */}
              <div className="flex items-center justify-between md:justify-end gap-6 md:min-w-[260px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <p className="text-sm font-medium text-gray-700">
                    Ready to Ship
                  </p>
                </div>

                <button
                  className="border px-4 py-2 text-sm font-medium
                             rounded-md hover:bg-black hover:text-white
                             transition"
                >
                  Track Order
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
