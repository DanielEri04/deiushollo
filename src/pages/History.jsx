import React from 'react'


const History = () => {
  return (
    <>

      <div>
        <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-400 from-yellow-700">History</span></h1>

        <p class="font-mono text-black bg-yellow-400 border-yellow-700 border-4 mt-14 mb-12  text-right rtl:text-left">A várat 1845-ben egy testvérpár örökölte meg(Beka Kálmán és Kiver Emma (féltestvérek)) halott szüleitől akik egy üzleti megbeszélésnek indult vérontásban haltak meg.  A fiúk 3 nappal a haláluk után bukkantak rá a szüleikre amikor már a vadon élő állatok elkezdtek a halott tetemekből táplálkozni.</p><img className='border-red-900 border-8 rounded-full mx-auto object-cover h-80 w-120' src="./public/crow.jpg" alt="" />

        <p class="font-mono text-black bg-yellow-400 border-yellow-700 border-4 mt-12 mb-3 text-left rtl:text-right ">Azonban kiemelkedően sok holló nyüzsgött a szülők körül. <br /> Ekkor döntötte el a testvérpár hogy a várat benépesítik velük es holló témájúvá alakítják a várat így mindig emlékezni fognyak a szülőkre és a szörnyű képre ahogyan rájuk találtak</p>

      </div>
    </>
  )
}

export default History
