import React from 'react'
import logo from '../../images/logo.png'
import one from '../../images/tempImg/1.jpg'
import two from '../../images/tempImg/2.jpg'
import bck4 from '../../images/utilities/bck4.png'
import btmrt from '../../images/utilities/btmrt.png'
import three from '../../images/tempImg/3.jpg'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            {/* absolute lg:right-20 mx-2 2xl:right-[35rem] */}
            <div className='grid grid-cols-12 md:h-[90vh] bg-[#191B1F] text-white'>
                <div className='col-span-12 md:col-span-3 md:relative'>
                    <div className='flex justify-center md:absolute bottom-8 lg:bottom-4'>
                        <img className='w-[30%] md:w-[70%] lg:w-[68%]' src={logo} alt="" />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-6'>
                    <div className='flex justify-center md:block font-serif 2xl:my-20'>
                        <div>
                            <h1 className='z-10 relative md:right-32 text-5xl md:text-7xl 2xl:text-9xl mt-4 sm:mt-2 md:tracking-[0.2rem] xl:tracking-[2rem] 2xl:tracking-[4rem]'>CHETAN</h1>
                            <h1 className='z-10 relative md:right-28 md:ml-20 text-5xl md:text-7xl 2xl:text-9xl mt-4 sm:mt-2 md:tracking-[0.2rem] xl:tracking-[2rem] 2xl:tracking-[4rem]'>MENARIA</h1>
                        </div>
                        <p className='z-10 relative ml-2 text-sm top-[5.3rem]  md:text-xl 2xl:text-4xl md:-top-16 w-2/12 md:-right-[21rem] xl:-right-[32rem]'>Web<br />Developer</p>
                    </div>
                    <div className='flex flex-col justify-center items-center md:relative md:-mt-11'>
                        <img className='transition-all duration-200 ease-in mt-4 md:mt-0 shadow-2xl hover:shadow-slate-100 hover:z-20 z-10 rounded-2xl w-52 md:w-60 xl:w-80 md:absolute md:top-0 md:-left-20 2xl:w-[32rem]' src={one} alt="" />
                        <img className='transition-all duration-200 ease-in mt-4 md:mt-0 shadow-2xl hover:shadow-slate-100 hover:z-20 z-10 rounded-2xl w-52 md:w-60 xl:w-80 md:absolute md:top-20 md:left-36 2xl:left-[28rem] 2xl:w-[32rem]' src={three} alt="" />
                        <img className='transition-all duration-200 ease-in mt-4 mb-2 md:my-0 shadow-2xl hover:shadow-slate-100 z-10 rounded-2xl w-52 md:w-60 xl:w-80 md:absolute md:top-40 md:left-[24rem] 2xl:w-[32rem] 2xl:left-[56rem]' src={two} alt="" />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-3 md:relative'>
                    <div className='transition-all duration-200 ease-in hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-white rounded-tl-full hover:border-t-[10px] hover:border-l-[10px] hover:-tracking-tighter md:absolute bottom-0 right-0'>
                        <div className='relative hidden lg:block'>
                            <img className='opacity-80' src={btmrt} alt="" />
                            <h1 className='absolute bottom-10 left-10 font-serif text-xl'>Check Out<br /><span className='hover:underline cursor-pointer'><Link to='/about'>About</Link></span> Section</h1>
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

export default HomePage