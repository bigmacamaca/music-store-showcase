import React from 'react';

export const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-8 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative h-[200px] sm:h-[350px]'> 
        {/* Overlay */}
        <div className='absolute w-full h-full rounded-xl text-secondary bg-text-black bg-opacity-60 flex text-center items-center justify-center'>
          <div>
            <p className='font-bold xl:text-2xl lg:text-lg md:text-sm sm:text-md'>Harmony</p>
            <p className='pl-4 pr-4 pt-2 lg:text-lg md:text-sm sm:text-md'>Discover a world of melodic treasures at our music store, where you'll find a harmonious collection of instruments, from elegant grand pianos to electric guitars that make your heart sing.</p>
          </div>
        </div>
        <img
        className='h-full w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Harmony Pic'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative h-[200px] sm:h-[350px]'>
        {/* Overlay */}
        <div className='absolute w-full h-full rounded-xl text-secondary bg-text-black bg-opacity-60 flex text-center items-center justify-center'>
          <div>
            <p className='font-bold xl:text-2xl lg:text-lg md:text-sm sm:text-md'>Amplify</p>
            <p className='pl-4 pr-4 pt-2 lg:text-lg md:text-sm sm:text-md'>Unleash your inner rockstar with our range of high-quality amplifiers, pedals, and professional audio gear, designed to turn up the volume on your musical journey. <br/><br/></p>
          </div>
        </div>
        <img
        className='h-full w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/808354/pexels-photo-808354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Amplify Pic'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative h-[200px] sm:h-[350px]'>
        {/* Overlay */}
        <div className='absolute w-full h-full rounded-xl text-secondary bg-text-black bg-opacity-60 flex text-center items-center justify-center'>
          <div>
            <p className='font-bold xl:text-2xl lg:text-lg md:text-sm sm:text-lg'>Elevate</p>
            <p className='pl-4 pr-4 pt-2 lg:text-lg md:text-sm sm:text-md'>Elevate your musical experience with our diverse selection of sheet music, accessories, and state-of-the-art recording equipment, ensuring that every note you play resonates with perfection.</p>
          </div>
        </div>
        <img
        className='h-full w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Elevate Pic'
        />
      </div>
    </div>
  );
};

