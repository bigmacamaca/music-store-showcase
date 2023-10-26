import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiFillPhone} from 'react-icons/ai'
import {MdLibraryMusic} from 'react-icons/md'
import {TbTruckDelivery} from 'react-icons/tb'


export const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=>setNav(!nav)} 
        className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          MC <span className='font-bold text-accent'>Instruments</span>
        </h1>
      </div>


      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
      </div> : ''}
      

      {/* Slide Drawer Menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={()=> setNav(!nav)}
        size={30} className='absolute right-4 top-4 cursor-pointer'/>
        <h2 className='text-2xl p-4'>
          MC <span className='font-bold text-accent'>Instruments</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
              <li className='text-xl py-4 flex'>
                <TbTruckDelivery size={25} className='mr-4 text-accent'/>
                Orders
              </li>
              <li className='text-xl py-4 flex'>
                <MdLibraryMusic size={25} className='mr-4 text-accent'/>
                Music Library
              </li>
              <li className='text-xl py-4 flex'>
                <AiFillPhone size={25} className='mr-4 text-accent'/>
                Contact
              </li>
            </ul>
        </nav>
      </div>

    </div>
  )
}
