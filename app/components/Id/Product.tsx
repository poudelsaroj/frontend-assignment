import Image from "next/image";
import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-2xl mx-auto min-h-6000">
      <div className="bg-purple-50 shadow-md rounded-lg max-w-sm hover:bg-gray-600  hover:scale-105">
        <Image
          className="rounded-t-lg p-8 object-contain h-60 w-full"
          src={product.image}
          alt="product image"
          height={90}
          width={90}
        />

        <div className="px-5 pb-5">
          <h3 className="text-gray-900 font-semibold text-l tracking-tight]">
            {product.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-800">
              Rs.{product.price}
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;