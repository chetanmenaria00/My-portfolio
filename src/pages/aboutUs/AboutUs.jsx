import React from 'react'
import { Link } from 'react-router-dom'
import bck4 from '../../images/utilities/bck4.png'
import btmrt from '../../images/utilities/btmrt.png'
import nodeimg from '../../images/cartoon.png'

const AboutUs = () => {
    return (
        <>
            {/* bg-gradient-to-r from-fuchsia-500 to-violet-500 */}
            <div className='md:grid grid-cols-12 md:h-[90vh] bg-[#191B1F] text-slate-100'>
                <div className='col-span-6 lg:col-span-5 flex justify-center items-center relative z-10'>
                    <div className='w-2/3'>
                        <h1 className='transition-all duration-300 ease-in text-xl sm:text-4xl mb-2 md:mb-8 tracking-wider font-sans font-bold hover:underline'>Hi there!</h1>
                        <div className='transition-all duration-300 ease-in hover:underline w-9/12'>
                            <h1 className=' font-sans text-lg sm:text-xl font-bold tracking-wider '>
                                A Full Stack Developer
                            </h1>
                            <h1 className=' font-sans text-sm sm:text-xl font-bold tracking-[0.2rem]'>
                                [MERN-STACK]
                            </h1>
                        </div>
                        {/* <h1 className='text-4xl my-5 tracking-wider font-sans font-bold  hover:underline'>My Career So Far</h1> */}
                        <h1 className='mt-3 md:mt-8 font-sans text-sm'>
                            "A driven and skilled MERN stack developer with a passion for creating dynamic, high-performance web applications that deliver exceptional user experiences. Proficient in MongoDB, Express, React, and Node.js, I have a strong foundation in full-stack development and a commitment to staying up-to-date with the latest technologies and industry trends."
                        </h1>
                        <div className='flex justify-between items-center mt-4'>
                            <button className='transition-all duration-200 ease-in w-1/2 m-2 shadow-2xl hover:shadow-slate-200  border py-2 hover:underline hover:font-bold font-semibold rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500'><Link to='/connect'> CONNECT</Link></button>
                            <button className='transition-all duration-200 ease-in w-1/2 m-2 shadow-2xl hover:shadow-slate-200  border py-2 hover:underline hover:font-bold font-semibold rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500'><Link to='/experience'> EPERIENCE</Link></button>
                        </div>
                    </div>
                </div>
                <div className='col-span-6 lg:col-span-4 flex justify-center items-center relative hover:z-10'>
                    <div className='my-2 relative rounded-3xl font-semibold hover:border-l-[3px] hover:border-b-[3px] hover:border-t-[1.5px] hover:tracking-[0.1rem] hover:shadow-2xl hover:shadow-slate-200 '>
                        <h1 className='absolute top-0 left-4 hover:left-[3px] text-center'>"Making the web a better place, one project at a time."</h1>
                        <img className='w-full' src={nodeimg} alt="" />
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-3 md:relative'>
                    <div className='transition-all duration-200 ease-in hover:[box-shadow:-0px_-0px_40px_0px_white] hover:shadow-slate-200 rounded-tl-full hover:border-t-[10px] hover:border-l-[10px] hover:-tracking-tighter md:absolute bottom-0 right-0'>
                        <div className='relative hidden lg:block'>
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

export default AboutUs

    // <div>
    // Front end: JavaScript, TypeScript, React,
    //     Redux, Redux - Thunk / Saga, Vue, VueX,
    //     HTML5, CSS3, Styled components,
    //         SCSS, Webpack, Babel.
    //         </div >