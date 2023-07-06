"use client"

import Image from "next/image"

const Cart = () => {
  const product = {
    title : 'Product' ,
    price : 999,
    image : ''
  }
 
  return (
    <div className='mt-20'>
       <div className="max-w-2xl mx-auto min-h-6000">
      <div className="bg-white shadow-md rounded-lg max-w-sm  hover:bg-gray-600">
        <Image
          className="rounded-t-lg p-8 object-contain h-60 w-full"
          src={product.image}
          alt="product image"
          height={100}
          width={100}
        />

        <div className="px-5 pb-5">
          <h3 className="text-gray-700 font-semibold text-l tracking-tight ">
            {product.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-700 ">
              ${product.price}
            </span>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart