import React from 'react'
import p1 from '../img/project1.PNG'
import p2 from '../img/project2.PNG'

export default function Projects() {
    var proj = [
        {
            title:'Todo-List App',img:p1,text:'A Todo List Application built with React, TypeScript, and Tailwind.'
        },
        {
            title:'Landing Page',img:p2,text:'A Simple Landing Page built with React, Tailwind, and CSS Libraries.'
        }
    ];

  return (
    <div className='flex flex-col w-[100%] mx-auto gap-y-[7rem]' id = "proj">
        {
            proj.map((proj,index)=>(
                <div className='relative flex flex-row w-[100%] space-x-5 mx-auto' key = {index} >
                    <div className='flex w-[63%] h-[500px] bg-[#17181D] transition-transform hover:scale-[0.95] duration-200 hover:cursor-pointer '>
                    <img src = {proj.img} className = " w-[85%] h-[380px] my-auto" alt = "todoapp"/>
                    </div>
                    <div className='absolute right-[3rem] top-[3rem] w-[29%] text-center space-y-5'>
                        <h3 className='font-semibold'>{proj.title}</h3>
                        <p className='text-[18px]'>
                            {proj.text}
                        </p>
                        <button className='btn inline-block border-b-[4px] w-[60%] border-[#FDB750]'>Go to App</button>
                        <button className='btn inline-block border-b-[4px] w-[70%] border-[#FDB750]' >Go to Repo</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
