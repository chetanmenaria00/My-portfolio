import React from 'react'
import github from '../../images/github.png'
import { data } from '../../Data'

const Projects = () => {
  return (
    <>
    {/* bg-gradient-to-br from-fuchsia-300 to-cyan-400 */}
      <div className='bg-[#191B1F] text-white'>
        {data.map((item) => (
          <div key={item.id} className='text-center py-10'>
            <h1 className='md:mx-20 text-xl md:text-4xl font-semibold tracking-wider'>{item.title}</h1>
            <div className='flex justify-center my-10 relative right-5 md:right-14 2xl:right-20'>
              <div className='hover:z-10 hover:[box-shadow:-0px_-0px_40px_0px_gray] [box-shadow:-0px_-0px_40px_0px_black] border-[4px] border-sky-800 rounded-xl w-[60%]'>
                <img className='rounded-lg border-solid' src={item.img1} />
              </div>
              <div className='hover:[box-shadow:-0px_-0px_40px_0px_gray] [box-shadow:-0px_-0px_40px_0px_black] border-[4px] border-sky-800 rounded-xl w-[18%] absolute top-5 right-[5%]'>
                <img className='rounded-lg border-solid' src={item.img2} />
              </div>
            </div>
            <p className='text-sm md:text-lg hover:underline'>
              <a href={item.link} target="_blank">
                <span className='font-bold text-xl'>See Full Website: &nbsp;</span>
                {item.link}
              </a>
            </p>
            <div className='flex justify-center items-center mt-2'>
              <img className='w-12 mr-2' src={github} alt="" />
              <span className='text-[11px] md:text-lg hover:underline'>
                <a href={item.gitrepo} target="_blank">
                  {item.gitrepo}
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects