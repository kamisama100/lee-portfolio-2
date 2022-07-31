import './App.css';
import me from './img/me.PNG';
import NavBarMenu from './component/navBarMenu';
import AboutMe from './component/aboutMe';
import Projects from './component/projects';
import Contact from './component/contact';
import Footer from './component/footer';

function App() {

  const handleOpacity=()=>{
    const app = document.getElementById('app');
    app.style.opacity = '100';
  }



  return (
    <div className="App w-full">
      <div className='flex flex-col text-[32px] font-workSans opacity-30 transition-opacity duration-1000 ease-in' onLoad={handleOpacity} id = "app" >
        <nav className='h-[70px] z-50 fixed flex flex-row bg-[#2c2b2b] opacity-[0.96] items-center w-full justify-between px-[6rem] py-2'>
          <div className='xs:hidden md:block'>
            <h2 className='xs:w-[0%] md:w-fit hover:text-[#FDB750] font-semibold text-[35px] transition-colors type ease-in-out duration-300 cursor-pointer tracking-wider '>Lee</h2>
          </div>
          <div className='xs:w-[100%] md:w-fit'>
            <NavBarMenu/>
          </div>
        </nav>
        <section id = "home" className='mb-[8rem]' >
          <div className='flex justify-center xs:h-[350px] md:h-[500px] items-center mt-[8rem] xs:pt-0 md:pt-5 pb-5'>
            <img src = {me} className ='rounded-full xs:h-[300px] sm:h-[350px] md:h-[400px] z-10' alt = "me"  />
          </div>
          <div className='z-10 xs:px-[1.5rem] md:px-[0.5rem] lg:px-[3rem] w-[90%] mx-auto h-auto mt-[3.5rem] font-semibold text-left text-[60px]' id ="about">
              <AboutMe/>
          </div>
        </section>
        <section id = "proj" className='space-y-[7rem] h-auto'>
          <div className='w-fit block mx-auto text-[40px] '>Projects</div>
          <Projects/>
        
        </section>
        <section id = "contact" className='space-y-[2rem] mt-[4rem] h-auto'>
          <div className='w-fit block mx-auto text-[40px] pt-5'>Contact</div>
          <Contact/>
        </section>
        <section id = "footer" className='space-y-[2rem] mt-[5rem] h-auto'>
          <Footer/>
        </section>
      </div>
    </div>
  );
}

export default App;
