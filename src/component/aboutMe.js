import React from 'react'

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
    <p className='opacity-0 transition-all duration-700' id = "about">
        About Fully committed to the philosophy of life-long learning, I’m a front-end developer with a deep passion for <span className='text-[#FDB750]'>HTML</span>, <span className='text-[#FDB750]'>JavaScript</span>, <span className='text-[#FDB750]'>React</span>, <span className='text-[#FDB750]'>CSS Libraries</span> and all things front-end development. 
        The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for front-end development. 
        When I’m not at my computer I like to spend my time playing video games, and playing guitar.
    </p>
  )
}
