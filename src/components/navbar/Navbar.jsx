import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import bck4 from '../../images/utilities/bck4.png'

const Navbar = () => {
  return (
    <>
    {/* bg-gradient-to-r from-pink-400 to-purple-500 */}
      <div className='grid grid-cols-12 z-10 relative md:h-[10vh] bg-[#222527]'>
        <div className='col-span-12 md:col-span-6 flex justify-around items-center relative'>
          <img className='hidden md:block md:w-[13%] lg:w-[11%] xl:w-[9%]' src={logo} alt="" />
          <h1 className='text-slate-100 transition-all duration-200 ease-in font-extrabold text-xl md:text-3xl tracking-widest hover:underline hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-white rounded-full p-3 hover:tracking-[0.5rem] font-serif'>Chetan Menaria</h1>
        </div>
        <div className='col-span-12 md:col-span-6'>
          <ul className='flex justify-around items-center text-sm lg:text-xl font-bold text-slate-100 '>
            <li className='transition-all duration-200 ease-in hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-white py-2 px-4 text-slate-100 m-2 rounded-3xl hover:bg-slate-300 hover:text-[#222527] hover:cursor-pointer'><Link to='/'> Home</Link></li>
            <li className='transition-all duration-200 ease-in hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-white py-2 px-4 text-slate-100 m-2 rounded-3xl hover:bg-slate-300 hover:text-[#222527] hover:cursor-pointer'><Link to='/about'> About</Link></li>
            <li className='transition-all duration-200 ease-in hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-white py-2 px-4 text-slate-100 m-2 rounded-3xl hover:bg-slate-300 hover:text-[#222527] hover:cursor-pointer'><Link to='/project'> Projects</Link></li>
          </ul>
        </div>
      </div>
      {/* <img className='absolute top-[20vh] opacity-40' src={bck4} alt="" />
      <img className='absolute top-[22vh] opacity-40' src={bck4} alt="" />
      <img className='absolute top-[24vh] opacity-40' src={bck4} alt="" />
      <img className='absolute top-[26vh] opacity-40' src={bck4} alt="" />
      <img className='absolute top-[28vh] opacity-40' src={bck4} alt="" />

      <div className='relative top-32'>
        <img className='absolute top-[20vh] opacity-40' src={bck4} alt="" />
        <img className='absolute top-[22vh] opacity-40' src={bck4} alt="" />
        <img className='absolute top-[24vh] opacity-40' src={bck4} alt="" />
        <img className='absolute top-[26vh] opacity-40' src={bck4} alt="" />
        <img className='absolute top-[28vh] opacity-40' src={bck4} alt="" />
      </div> */}
    </>
  )
}

export default Navbar