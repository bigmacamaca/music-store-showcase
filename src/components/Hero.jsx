import React, {useState, useEffect} from 'react'
import 'animate.css'

export const Hero = () => {
  const [valueIndex, setValueIndex] = useState(0);
  const values = ['Melody.', 'Piece.', 'Tune.', 'Hymn.', 'Sound.'];

  useEffect(() => {
    // Function to update the value index after a set time
    const interval = setInterval(() => {
      setValueIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 2000); // Set time in milliseconds (e.g., 2000ms = 2 seconds)
 
    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [values.length]);

  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background'>Your Instruments. </h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background'>Your <span className='animate__animated animate__fadeInUp animate__slow animate__infinite	infinite inline-block text-primary'>{values[valueIndex]}</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src='https://images.pexels.com/photos/10755324/pexels-photo-10755324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Hero Cover' />
        </div>
    </div>
  )
}

