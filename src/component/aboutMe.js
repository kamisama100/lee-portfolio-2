import React from 'react'
import '../animation.css';
import {FaReact} from 'react-icons/fa'
import {SiTypescript,SiJavascript,SiCss3,SiHtml5,SiGithub} from 'react-icons/si';
import {useMediaQuery} from 'react-responsive';

export default function AboutMe() {
    const slideUp = () =>{
        const about = document.getElementById('aboutme');
        const y = window.scrollY;
        y >= 260 ? about.style.transform = 'translateY(0%)':about.style.transform = 'translateY(10%)';;
        y >= 260 ? about.style.opacity = '100': about.style.opacity = '0';
    };

    window.addEventListener('scroll',slideUp);

    const iconSize = useMediaQuery({query:'(min-width:1024px)'});

  return (
    <div className='flex xs:flex-col md:flex-row w-full h-fit opacity-0 transition-all duration-700 space-y-5' id = "aboutme">
        <div className='xs:mx-auto md:mx-0 xs:w-[90%] md:w-[55%] w-[50%]'>
            <p className='xs:text-[16px] sm:text-[18px] lg:text-[20px] h-fit break-words relative text-justify font-normal md:tracking-normal'>
                Fully committed to the philosophy of life-long learning, I’m a front-end developer with a deep passion for <span className='text-[#FDB750]'>HTML</span>, <span className='text-[#FDB750]'>JavaScript</span>, <span className='text-[#FDB750]'>React</span>, <span className='text-[#FDB750]'>CSS Libraries</span> and all things front-end development. 
                The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for front-end development. 
                When I’m not at my computer I like to spend my time playing video games, and playing guitar.
            </p>
        </div>
        <div className='mx-auto my-auto xs:w-[50%] md:w-[45%] lg:w-[50%] xs:pl-0 md:pl-[20px]'>
            <div className='flex flex-col h-fit items-center space-y-7'>
                <div className='flex'>
                    <FaReact size = {iconSize ? 90:70} className = "hover:text-[#FDB750] animate-spin-slow" />
                </div>
                <div className='flex flex-row gap-x-5'>
                    <SiTypescript size = {iconSize ? 90:70} className = "hover:text-[#FDB750] hover:animate-wiggle" />
                    <SiJavascript size = {iconSize ? 90:70} className = "hover:text-[#FDB750] hover:animate-wiggle" />
                </div>
                <div className='flex flex-row gap-x-5'>
                    <SiHtml5 size = {iconSize ? 90:70} className = "hover:text-[#FDB750] hover:animate-wiggle"/>
                    <SiGithub size = {iconSize ? 90:70}  className = "hover:text-[#FDB750] hover:animate-wiggle" />
                    <SiCss3 size = {iconSize ? 90:70} className = "hover:text-[#FDB750] hover:animate-wiggle" />
                </div>
            </div>
        </div>
    </div>
    )
}
