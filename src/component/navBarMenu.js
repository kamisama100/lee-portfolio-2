import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai';

function NavBarMenu() {

    const handleMouseIn=()=>{
        const slide = document.getElementById('slide');
        slide.style.transform = 'translateX(-15%)';
        slide.style.opacity = '100';

        const menu = document.getElementById('menu');
        menu.style.transform = 'rotate(180deg)';
    };
    const handleMouseOut=()=>{
        const slide = document.getElementById('slide');
        slide.style.transform = 'translateX(-0%)';
        slide.style.opacity = '0';

        const menu = document.getElementById('menu');
        menu.style.transform = 'rotate(0deg)';
    };

    return (
        <div className='z-50 relative  items-center flex space-x-5 text-[28px] font-light' onMouseLeave={handleMouseOut} onMouseEnter={handleMouseIn} >
            <button>
              <AiOutlineMenu className = "hover:text-[#FDB750] transition-all ease-in-out duration-[500ms]" id="menu"/>
            </button>
            <div className='absolute inline-block whitespace-nowrap right-0 opacity-0 space-x-5 transition-all duration-500 delay-75' id = "slide">
                <button className = "hover:text-[#FDB750] transition-colors ease-in-out duration-300" >
                    Home
                </button>
                <button className = "hover:text-[#FDB750] transition-colors ease-in-out duration-300" >
                    About
                </button>
                <button className = "hover:text-[#FDB750] transition-colors ease-in-out duration-300" >
                    Projects
                </button>
                <button className = "hover:text-[#FDB750] transition-colors ease-in-out duration-300" >
                    Contact
                </button>
            </div>
        </div>
    )
}

export default NavBarMenu
