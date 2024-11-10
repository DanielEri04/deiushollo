import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>

    <div className=''>
       <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-black">CrowCastle</span></h1>
      <div className="flex justify-center"><img className='border-4 rounded-full mx-auto object-cover h-80 w-120' src="./public/castle.jpg" alt="" /></div>
    </div>
    <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-red-500 from-red-950">Szia Dius!</span></h1>
  
  
    <h1 className='mt-11 mb-3 border-4 rounded-full mx-auto text-center text-3xl bg-red-900 text-white'>Ezen az oldalon egy képzeletbeli vár weboldalát láthatod. Előre bocsátom hogy a jelenlegi állapotomban a képzelőerőm és a kreativitásom nincs a toppon.</h1>
    </>
  )
}

export default Home

