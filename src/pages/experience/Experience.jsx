import React from 'react'
import orangrect from '../../images/utilities/orangrect.png'
import bck4 from '../../images/utilities/bck4.png'

const Experience = () => {
    return (
        <>
        {/* bg-gradient-to-r from-fuchsia-500 to-violet-500 */}
            <div className='bg-[#191B1F] text-slate-100 relative md:h-[90vh]'>
                <div className='md:grid grid-cols-12'>
                    <div className='z-10 col-span-5'>
                        <div className='flex flex-col items-center'>
                            <h1 className='hover:underline my-5 text-2xl font-bold font-serif'>Tech Stack I use</h1>
                            <div className=''>
                                <ul>
                                    <li className='text-base font-semibold font-serif'>HTML</li>
                                    <li className='text-base font-semibold font-serif'>CSS</li>
                                    <li className='text-base font-semibold font-serif'>JavaScript</li>
                                    <li className='text-base font-semibold font-serif'>ReactJS</li>
                                    <li className='text-base font-semibold font-serif'>NodeJS</li>
                                    <li className='text-base font-semibold font-serif'>Java</li>
                                    <li className='text-base font-semibold font-serif'>C++</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='z-10 col-span-7'>
                        <div className='text-center md:text-left'>
                            <h1 className='hover:underline my-5 text-2xl font-bold font-serif'>ACHIEVEMENTS / PROJECTS</h1>
                            <ul>
                                <li className='text-base font-semibold font-serif'>❖ My own Portfolio site.</li>
                                <li className='text-base font-semibold font-serif'>❖ A React Based Dashboard</li>
                                <li className='text-base font-semibold font-serif'>❖ A Shopping app Landing page (ReactJs)</li>
                                <li className='text-base font-semibold font-serif'>❖ Text modifying and editing app (ReactJs)</li>
                                <li className='text-base font-semibold font-serif'>❖ Chrome Extension For Screen recording including
                                    voice(System/Mic) (JavaScript/API's)</li>
                                <li className='text-base font-semibold font-serif'>❖ a Rock / Paper / Scissors game (JavaScript)</li>
                                <li className='text-base font-semibold font-serif'>❖ JAVA complete course for beginners (Udemy)</li>
                                <li className='text-base font-semibold font-serif'>❖ C++ Gold Badge on HackerRank.</li>
                                {/* <li className='text-base font-semibold font-serif'>❖ Worked on ThingSpeak Cloud (MIT app Inventor)</li> */}
                                <li className='text-base font-semibold font-serif'>❖ Got Shortlisted by XartUp to build startup as its fellow member.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' mt-8'>
                    <div className='z-10 col-span-6 flex flex-col items-center'>
                        <div className='text-center'>
                            <h1 className='hover:underline mb-5 text-2xl font-bold font-serif'>TRAINING</h1>
                            <ul>
                                <li className='text-base font-semibold font-serif'>
                                    ❖ Summer Training in C programming Language from Geetanjali Institute of Technical Studies.
                                    [Sep2021 - Oct2021]
                                </li>
                                <li className='text-base font-semibold font-serif'>
                                    ❖ Summer training(6 weeks) in Full stack Web Development from Geetanjali institute of Technical Studies.
                                    [July2022-Aug2022]
                                </li>
                            </ul>
                        </div>
                        <div className='text-center my-5'>
                            <h1 className='hover:underline mt-5 mb-2 text-2xl font-bold font-serif'>EXPERIENCE (Web Development)</h1>
                            <span className='text-lg font-bold font-serif'>❖ LakeBrains Technologies</span>
                            <span className='text-lg font-bold font-serif'>Nov 2022 - Present</span>
                            <ul>
                                <li>❖ Built Saas product Frontend using React (react hooks), Core javascript and (Css)Bootstrap.</li>
                                <li>❖ Built Chrome Extensions using Javascript and it's chrome API's.</li>
                                <li>❖ Node and it's core usage in backend.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <img className='absolute w-1/6 top-0 -left-14 opacity-60' src={orangrect} alt="" />
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

export default Experience