import React from 'react'
import '../animation.css';
import {FaReact} from 'react-icons/fa'
import {SiTypescript,SiJavascript,SiCss3,SiHtml5,SiGithub} from 'react-icons/si';

export default function AboutMe() {
    const slideUp = () =>{
        const about = document.getElementById('aboutme');
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
    <div className='flex flex-col w-full md:grid md:grid-cols-2 opacity-0 transition-all duration-700 xs:space-y-6 md:space-y-0 md:space-x-2 lg:space-x-0 ' id = "aboutme">
        <div className=''>
            <p className='xs:text-[16px] md:text-[18px] lg:text-[20px] h-fit break-words relative xs:text-center md:text-justify font-normal md:tracking-normal'>
                Fully committed to the philosophy of life-long learning, I’m a front-end developer with a deep passion for <span className='text-[#FDB750]'>HTML</span>, <span className='text-[#FDB750]'>JavaScript</span>, <span className='text-[#FDB750]'>React</span>, <span className='text-[#FDB750]'>CSS Libraries</span> and all things front-end development. 
                The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for front-end development. 
                When I’m not at my computer I like to spend my time playing video games, and playing guitar.
            </p>
        </div>
        <div className='h-full relative w-full py-3 items-center'>
            <div className='flex flex-col h-fit md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 md:m-auto gap-x-5 items-center space-y-7'>
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
