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
        <nav className='z-50 fixed flex bg-[#2c2b2b] opacity-[0.96] items-center w-full justify-between px-[6rem] py-2'>
          <div className=''>
            <h2 className='hover:text-[#FDB750] font-semibold text-[35px] transition-colors type ease-in-out duration-300 cursor-pointer tracking-wider '>Lee</h2>
          </div>
          <div>
            <NavBarMenu/>
          </div>
        </nav>
        <section id = "home" name = "home">
          <div className='flex justify-center h-[500px] items-center mt-[8rem] pt-5 pb-5'>
            <img src = {me} className ='rounded-full h-[400px] z-10' alt = "me"  />
          </div>
          <div className='z-10 px-[5rem] w-[85%] h-auto mx-auto mt-[3.5rem] font-semibold text-left text-[60px]'>
              <AboutMe/>
          </div>
        </section>
        <section id = "projects" className='space-y-[7rem] h-auto mt-5'>
          <div className='w-fit block mx-auto text-[40px] '>Projects</div>
          <Projects/>
        </section>
        <section id = "contact" className='space-y-[2rem] h-auto'>
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
