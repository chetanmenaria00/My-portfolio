import React from 'react'
import connect from '../../images/connect.png'
import './connect.css'
import btmlt from '../../images/utilities/btmlt.png'
import bck4 from '../../images/utilities/bck4.png'
import btmrt from '../../images/utilities/btmrt.png'
import insta from '../../images/insta.png'
import linkedin from '../../images/linkedin.png'
import whatsapp from '../../images/whatsapp.png'
import github from '../../images/github.png'
import { Link } from 'react-router-dom'

const Connect = () => {
  return (
    <>
    {/* bg-gradient-to-r from-cyan-200 to-fuchsia-400 */}
      <div className='grid grid-cols-12 md:h-[90vh] bg-[#191B1F] text-white'>
        <div className='col-span-12 md:col-span-5 flex flex-col justify-center items-center relative'>
          <div className='my-3 flex'>
            <img className='transition-all duration-200 ease-in z-10 w-12 mr-3 md:mr-5 hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-slate-200  rounded-full' src={linkedin} alt="" />
            <img className='transition-all duration-200 ease-in z-10 w-12 mr-3 md:mr-5 hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-slate-200  rounded-full' src={github} alt="" />
            <img className='transition-all duration-200 ease-in z-10 w-12 mr-3 md:mr-5 hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-slate-200  rounded-full' src={whatsapp} alt="" />
            <img className='transition-all duration-200 ease-in z-10 w-12 mr-3 md:mr-5 hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-slate-200  rounded-full' src={insta} alt="" />
          </div>
          <div className='z-10'>
            <img className='transition-all duration-200 ease-in hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-slate-200  rounded-3xl' src={connect} alt="" />
          </div>
        </div>
        <div className='col-span-12 md:col-span-4 flex items-center justify-center'>
          <form className='z-10 text-center'>
            <input className='transition-all duration-200 ease-in hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-slate-200  btn mt-6 p-2 md:w-full rounded-3xl' placeholder='Name' type="text" />
            <input className='transition-all duration-200 ease-in hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-slate-200  btn mt-6 p-2 md:w-full rounded-3xl' placeholder='Email' type="email" name="" id="" />
            <textarea className='transition-all duration-200 ease-in hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-slate-200  btn mt-6 w-3/4 p-2 md:w-full rounded-3xl' placeholder='Message' name="" id="" cols="40" rows="6"></textarea>
            <div>
              <button className='transition-all duration-200 ease-in hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-slate-200  py-2 px-6 rounded-3xl hover:font-bold font-semibold hover:underline my-3 text-black'>Send</button>
            </div>
          </form>
        </div>
        <div className='col-span-12 md:col-span-3 md:relative'>
          <div className='hidden md:block relative'>
            <img className='z-[9] opacity-60 absolute top-0 rotate-180' src={btmlt} alt="" />
            <h1 className='transition-all duration-200 ease-in z-[9] text-center absolute top-2 xl:top-10 left-1 font-extrabold xl:text-xl hover:underline rounded-full hover:shadow-2xl hover:shadow-slate-200 '>"A clean codebase is a sign of a clear mind."</h1>
          </div>
          <div className='transition-all duration-200 ease-in hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-slate-200  rounded-tl-full hover:border-t-[10px] hover:border-l-[10px] hover:-tracking-tighter md:absolute bottom-0 right-0'>
            <div className='relative hidden md:block'>
              <img className='opacity-80' src={btmrt} alt="" />
              <h1 className='absolute bottom-10 left-10 font-serif text-xl'>Check Out<br /><span className='hover:underline cursor-pointer'><Link to='/projects'>Projects</Link>s</span> Section</h1>
            </div>
          </div>
        </div>
      </div>
      <img className='absolute top-[20vh] opacity-20' src={bck4} alt="" />
      <img className='absolute top-[22vh] opacity-20' src={bck4} alt="" />
      <img className='absolute top-[24vh] opacity-20' src={bck4} alt="" />
      <img className='absolute top-[26vh] opacity-20' src={bck4} alt="" />
      <img className='absolute top-[28vh] opacity-20' src={bck4} alt="" />

      <img className='absolute top-[50vh] opacity-20' src={bck4} alt="" />
      <img className='absolute top-[52vh] opacity-20' src={bck4} alt="" />
      <img className='absolute top-[54vh] opacity-20' src={bck4} alt="" />
      <img className='absolute top-[56vh] opacity-20' src={bck4} alt="" />
      <img className='absolute top-[58vh] opacity-20' src={bck4} alt="" />
    </>
  )
}

export default Connect