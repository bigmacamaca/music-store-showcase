import React from 'react'

export const Categories = ({filterType}) => {
  return (
    <div className='max-w-[1640px] px-4 pt-2 pb-[50px] m-auto'>
        <h1 className='text-primary font-bold text-4xl text-center'>Pick a Category</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 py-6'>
            <button className='bg-accent rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300 hover:bg-primary focus:bg-primary' button onClick={()=> filterType('Guitars')}>
                <h2 className='font-bold text-background'>Guitars</h2>
                <div>
                    <img src="https://static-00.iconduck.com/assets.00/electric-guitar-icon-2048x1921-anftp1mi.png" alt='Guitar Icon' className='w-[50px] lg:w-[85px] md:w-[70px]'/>
                </div>
            </button>
            <button className='bg-accent rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300 hover:bg-primary focus:bg-primary' onClick={()=> filterType('Computer Audio')}>
                <h2 className='text-sm sm:text-lg font-bold text-background pr-[2px]'>Computer <br /> Audio</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/3470/3470828.png" alt='Computer Audio Icon' className='w-[50px] lg:w-[85px] md:w-[70px]'/>
            </button>
            <button className='bg-accent rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300 hover:bg-primary focus:bg-primary' onClick={()=> filterType('Effects And Pedals')}>
                <h2 className='font-bold text-background'>Effects/Pedals</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/1829/1829976.png" alt='Effect/Pedal Icon' className='w-[50px] lg:w-[85px] md:w-[70px]'/>
            </button>
            <button className='bg-accent rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300 hover:bg-primary focus:bg-primary' onClick={()=> filterType('Lifestyle')}>
                <h2 className='font-bold text-background'>Lifestyle</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/3791/3791429.png" alt='Lifestyle Icon' className='w-[50px] lg:w-[85px] md:w-[70px]'/>
            </button>
            <button className='bg-accent rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300 hover:bg-primary focus:bg-primary' onClick={()=> filterType('Drums And Percussion')}>
                <h2 className='text-sm sm:text-lg font-bold pr-[2px]font-bold text-background'>Drums and <br /> Percussion</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/683/683940.png" alt='Drums Percussion Icon' className='w-[50px] lg:w-[85px] md:w-[70px]'/>
            </button>
            <button className='bg-accent rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300 hover:bg-primary focus:bg-primary' onClick={()=> filterType('Orchestral')}>
                <h2 className='font-bold text-background'>Orchestral</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/836/836920.png" alt='Orchestral Icon' className='w-[50px] lg:w-[85px] md:w-[70px]'/>
            </button>
        </div>
    </div>
  )
}
