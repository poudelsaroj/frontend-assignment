import React from "react"

export default function Banner() {
  return (
    <div className="top-8 py-40 relative bg-gradient-to-r from-blue-900 to-black ">
    <div className="flex justify-center items-center  max-w-[calc(100%-20px)] mx-auto relative">
        <div className="text-white text-center flex flex-col items-center left-50 md:top-1/2 md:transform md:-translate-y-1/2 xxl:left-0">
            <h1 className="text-6xl font-bold mb-8">SALES</h1>
            <p className="max-w-xs md:max-w-md text-sm md:text-base mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, velit! Explicabo dicta aliquid illo itaque quaerat culpa provident dolore distinctio! Animi neque quas ad error dolores distinctio a eius maxime?
            </p>
            <div className="flex ">
                <div className="uppercase text-sm font-medium py-2 px-4 border-2 border-white transition-all ease-in-out duration-300 cursor-pointer">Read More</div>
                <div className="uppercase text-sm font-medium py-2 px-4 border-2 border-white transition-all ease-in-out duration-300 cursor-pointer bg-white text-black hover:bg-black hover:text-white">Shop Now</div>
            </div>
        </div>
    </div>
</div>
  )
}