import React from 'react'

const Pricing = () => {
  return (
    <div>
      <h1 className=" text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-black">Pricing</span></h1>
      <div className='flex justify-center items-center mt-12'>
  <div className="flex space-x-4">
    <a href="#" class=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kezdő túra</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">2500/fő</p>
    </a>
  
    <a href="#" class=" block max-w-lg h-60 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-red-800 dark:border-gray-700 dark:hover:bg-gray-700">
  
    <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ULTIMATE Holló vagyok </h5>
    <p class="font-bold text-yellow-700 dark:text-yellow-700">15000ft, 3nap ellátás:Szállás, étel/ital és persze a kalandok</p>
    </a>
  
    <a href="#" class=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Haladó túra</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">4500/fő</p>
    </a>
  </div>
</div>
    
    
    
    </div>
  )
}

export default Pricing
