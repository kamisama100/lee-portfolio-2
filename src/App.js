import './App.css';
import me from './img/me.PNG';
import NavBarMenu from './component/navBarMenu';
import AboutMe from './component/aboutMe';

function App() {

  const handleOpacity=()=>{
    const app = document.getElementById('app');
    app.style.opacity = '100';
  }

  return (
    <div className="App w-full">
      <div className='flex flex-col text-white text-[32px] font-workSans opacity-30 transition-opacity duration-1000 ease-in' onLoad={handleOpacity} id = "app" >
        <nav className='z-50 fixed flex items-center w-full justify-between px-[6rem] pt-[4rem] bg-transparent'>
          <div className=''>
            <h2 className='hover:text-[#FDB750] transition-colors ease-in-out duration-300 cursor-pointer tracking-wider '>Lee</h2>
          </div>
          <div>
            <NavBarMenu/>
          </div>
        </nav>
        <div className='flex justify-center h-[500px] items-center mt-[8rem] pt-5 pb-5 '>
          <img src = {me} className ='rounded-full h-[400px]' alt = "me"  />
        </div>
        <div className='z-10 px-[5rem] w-[75%] h-[90vh] mx-auto mt-[3.5rem] font-semibold text-left text-[60px] tracking-tighter '>
            <AboutMe/>
        </div>
      </div>
    </div>
  );
}

export default App;
