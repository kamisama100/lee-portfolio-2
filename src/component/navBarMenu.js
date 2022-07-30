import React from 'react'

function NavBarMenu() {

    const navBarColor = () =>{
        const y = window.scrollY;
        let home = document.getElementById('home');
        let abouts = document.getElementById('navAbouts');
        let projects = document.getElementById('navProjects');
        let contact = document.getElementById('navContact');
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
        <div className='relative w-full mx-auto xs:text-[19px] sm:text-[25px] md:text-[28px] font-light'>
            <div className='flex flex-row xs:space-x-2 sm:space-x-5 place-content-center transition-all duration-500 delay-75' id = "slide">
                <button className = "hover:text-[#FDB750] transition-colors ease-in-out duration-300 text-[#FDB750] " id ="home" >
                    <a href = "#top">
                        Home
                    </a>
                </button>
                <button className = "hover:text-[#FDB750] transition-colors ease-in-out duration-300" id ="navAbouts" >
                    <a href = "#aboutme">
                    About
                    </a>
                </button>
                <button className = "hover:text-[#FDB750] transition-colors ease-in-out duration-300" id ="navProjects" >
                    <a href = "#proj">
                    Projects
                    </a>
                </button> 
                <button className = "hover:text-[#FDB750] transition-colors ease-in-out duration-300" id ="navContact" >
                    <a href = "#contact">
                        Contact
                    </a>
                </button>
            </div>
        </div>
    )
}

export default NavBarMenu
