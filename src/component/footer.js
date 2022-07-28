import React from 'react'
import {BsArrowUpShort} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
export default function Footer() {

  return (
    <div className='relative bg-[#2b2a2a] w-full flex flex-col items-center pt-[2rem] pb-[3rem] '>
      <a className='absolute -top-5 left-0 right-0 m-auto bg-[#FDB750] w-fit transition-transform duration-500 hover:-translate-y-5' href = "/#">
        <BsArrowUpShort size = {40}/>
      </a>
      <div className='flex flex-row w-fit h-[50px] space-x-4 mt-5'>
        <AiFillGithub className="transition-all duration-300 text-[40px] hover:text-[50px]" />
        <AiFillLinkedin className='transition-all duration-300 text-[40px] hover:text-[50px]'/>
        <AiFillMail className='transition-all duration-300 text-[40px] hover:text-[50px]'/>
      </div>
      <p className=' text-[15px] font-thin uppercase'>
        Lee JOHNDER <span style = {{fontSize:'22px'}} >©</span>2022
      </p>
    </div>
  )
}
