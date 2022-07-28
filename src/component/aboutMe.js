import React from 'react'
import '../animation.css';
import {FaReact} from 'react-icons/fa'
import {SiTypescript,SiJavascript,SiCss3,SiHtml5,SiGithub} from 'react-icons/si';

export default function AboutMe() {
    const slideUp = () =>{
        const about = document.getElementById('about');
        const y = window.scrollY;
        
        if (y >=260){
            about.style.transform = 'translateY(0%)';
            about.style.opacity = '100';
        }else{
            about.style.opacity = '0';
            about.style.transform = 'translateY(10%)';
        }
    };
    window.addEventListener('scroll',slideUp);

  return (
    <div className='grid grid-cols-2 opacity-0 transition-all duration-700' id = "about">
        <div className=''>
            <p className='text-[22px] font-normal tracking-normal'>
                Fully committed to the philosophy of life-long learning, I’m a front-end developer with a deep passion for <span className='text-[#FDB750]'>HTML</span>, <span className='text-[#FDB750]'>JavaScript</span>, <span className='text-[#FDB750]'>React</span>, <span className='text-[#FDB750]'>CSS Libraries</span> and all things front-end development. 
                The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for front-end development. 
                When I’m not at my computer I like to spend my time playing video games, and playing guitar.
            </p>
        </div>
        <div className='h-fit w-full py-3'>
            <div className='flex flex-col justify-center align-middle text-center gap-x-5 items-center space-y-7 '>
                <div className='flex'>
                    <FaReact size = {90} className = "hover:text-[#FDB750] animate-spin-slow" />
                </div>
                <div className='flex flex-row gap-x-5'>
                    <SiTypescript size = {90} className = "hover:text-[#FDB750] hover:animate-wiggle" />
                    <SiJavascript size = {90} className = "hover:text-[#FDB750] hover:animate-wiggle" />
                </div>
                <div className='flex flex-row gap-x-5'>
                    <SiHtml5 size = {90} className = "hover:text-[#FDB750] hover:animate-wiggle"/>
                    <SiCss3 size = {90} className = "hover:text-[#FDB750] hover:animate-wiggle" />
                    <SiGithub size = {90}  className = "hover:text-[#FDB750] hover:animate-wiggle" />
                </div>
            </div>
        </div>
    </div>
    )
}
