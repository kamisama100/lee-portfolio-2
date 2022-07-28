import React from 'react'

function NavBarMenu() {

    const navBarColor = () =>{
        const y = window.scrollY;
        let home = document.getElementById('home');
        let abouts = document.getElementById('abouts');
        let projects = document.getElementById('projects');
        let contact = document.getElementById('contact');
        if (y <=199){
            home.style.color = '#FDB750';
            abouts.style.color = '#FFFFFF';
            contact.style.color = '#FFFFFF';
        }else if (y >=350 && y <=750){
            home.style.color = '#FFFFFF';
            abouts.style.color = '#FDB750';
            projects.style.color = '#FFFFFF';
        }
        else if (y >=751 && y <= 2000){
            abouts.style.color = '#FFFFFF';
            projects.style.color = '#FDB750';
            contact.style.color = '#FFFFFF';
        }
        else if(y >=2001){
            projects.style.color = '#FFFFFF';
            contact.style.color = '#FDB750';
        }
    };
    window.addEventListener('scroll',navBarColor);

    return (
        <div className='z-50 relative  items-center flex space-x-5 text-[28px] font-light'>
            <div className='absolute inline-block whitespace-nowrap right-0 space-x-5 transition-all duration-500 delay-75' id = "slide">
                <button className = "hover:text-[#FDB750] transition-colors ease-in-out duration-300 text-[#FDB750] " id ="home" >
                    Home
                </button>
                <button className = "hover:text-[#FDB750] transition-colors ease-in-out duration-300" id ="abouts" >
                    About
                </button>
                <button className = "hover:text-[#FDB750] transition-colors ease-in-out duration-300" id ="projects" >
                    Projects
                </button>
                <button className = "hover:text-[#FDB750] transition-colors ease-in-out duration-300" id ="contact" >
                    Contact
                </button>
            </div>
        </div>
    )
}

export default NavBarMenu
