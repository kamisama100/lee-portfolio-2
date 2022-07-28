import React from 'react'

export default function Contact() {
  return (
    <form className='flex flex-col w-[50%] mx-auto text-white text-[21px] items-center space-y-3 pb-[2rem]'>
      <input type="text" placeholder='Name' className=' bg-[#2b2a2a] px-[20px] py-[5px] w-[90%] ' required />
      <input type="email" placeholder='Email' className=' bg-[#2b2a2a] px-[20px] py-[5px] w-[90%] ' required />
      <textarea type='text' placeholder='Message' className=' bg-[#2b2a2a] w-[90%] h-[150px] px-[20px] py-[5px] resize-none' />
      <button className='btn inline-block border-b-[4px] w-[20%] border-[#FDB750] pt-2'>Submit</button>
    </form>
  )
}
