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
                <div className='place-items-center flex xs:flex-col sm:flex-row h-auto w-[100%] space-x-5 mx-auto xs:space-y-5 sm:space-y-0' key = {index} >
                    <div className='flex xs:w-[85%] md:w-[65%] xs:h-[250px] sm:h-[350px] md:h-[430px] lg:h-[500px] bg-[#17181D] transition-transform hover:scale-[0.95] duration-200 hover:cursor-pointer '>
                        <img src = {proj.img} className = "w-[100%] sm:w-[85%] xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[380px] my-auto" alt = "todoapp"/>
                    </div>
                    <div className='relative flex flex-col place-content-center items-center xs:w-[90%] md:w-[35%] text-center space-y-5'>
                        <h3 className='font-semibold xs:text-[23px] md:text-[28px] lg:text-[32px] '>{proj.title}</h3>
                        <p className='xs:text-[16px] md:text-[18px] xs:w-full sm:w-[95%] md:w-[90%] lg:w-[75%]'>
                            {proj.text}
                        </p>
                        <button className='xs:text-[20px] md:text-[24px] lg:text-[28px] btn inline-block pt-2 pb-2 border-b-[4px] xs:w-[50%] sm:w-[60%] border-[#FDB750]'>Go to App</button>
                        <button className='xs:text-[20px] md:text-[24px] lg:text-[28px] btn inline-block pt-2 pb-2 border-b-[4px] xs:w-[50%] sm:w-[60%] border-[#FDB750]' >Go to Repo</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
