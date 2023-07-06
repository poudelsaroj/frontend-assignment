"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Search: React.FC = () => {
    const [products, setProducts] = useState<any[]>([])
  const [searchValue, setSearchValue] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleFocus = () => {
    setExpanded(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setExpanded(false);
    },300);
  };

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  }

  const productsFetch = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products`
      ); 
      const data = await response.json();
      setProducts(data)
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  useEffect(() => {
    productsFetch()
  }, [searchValue]);

  return (<>
    <div className={`${expanded ? 'w-screen absolute bg-gray-800 left-0 top-0 p-5 min-h-screen' : 'inline-block'}`}>
      <input
        type="search"
        className={`mx-20 my-10 text-black border border-gray-300 rounded px-4 py-2 focus:outline-none ${expanded ? 'w-9/12' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleSearch}
        value={searchValue}
        placeholder="Search..."
      />
      
      {expanded && searchValue !== "" ? 
      <>
        <div>
           {products.filter(filteredProduct => {
            return filteredProduct.title.toLowerCase().includes(searchValue.toLowerCase())
           }).map(product => {
            return <Link href={`/pages/products/Products`} key={product.id}
            className='bg-red-500'><div className='flex rounded items-center mt-2 mb-2 border-solid border-2 border-white  gap-2'>
              <Image src={product.image} alt="" className='hover:scale-110 hover:bg-gray-200 transition-all bg-gray-100 p-[10px] rounded-md"' height={100} width={100} />
              {product.title}</div></Link>
           })}
        </div>
        
        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                     
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    </>
       : ""}
    </div>
    </>
  );
};

export default Search;