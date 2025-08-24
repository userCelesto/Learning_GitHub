import { useState } from 'react'
import HomeDashboard from './components/HomeDashboard.jsx'
import SideNav from './components/SideNav.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header className='h-16 bg-white flex sticky top-0 left-0 w-full z-1'>
        <div className="pl-[1rem] h-[4rem]  flex justify-start w-full items-center">
          <a  className='h-[48px] w-[48px] flex items-center justify-center ripple-button text-[#5F6368] translate-x-[-3px]'><span className="material-symbols-outlined">menu</span></a>
          <a  className='flex justify-center items-center ml-[8px] hover:cursor-pointer'><img className='h-[28px]' src="logo_square_rounded.svg" alt="logo" /> <span className='ml-[0.625rem] mr-[0.125rem] text-2xl text-[#444746] font-extralight'>Classroom</span></a>
        </div>  
        <div className="pr-[1.5rem] flex justify-end w-full items-center">
          <a  className='h-[42px] w-[42px] flex justify-center items-center mx-1 ripple-button text-[#5F6368]'><span className="material-symbols-outlined">add</span></a>
          <a  className='h-[42px] w-[42px] flex justify-center items-center mx-1 ripple-button text-[#5F6368]'><span className="material-symbols-outlined">apps</span></a>
          <a  className='h-[42px] w-[42px] flex justify-center items-center ml-1 ripple-button'><img className='w-[32px] h-[32px] rounded-full' src="../src/assets//Profile/Sample_Profile.png" alt="logo" /></a>
        </div>
      </header>
      
      <div className="content flex">
        <SideNav />
        <HomeDashboard />
      </div>
    </div>
  )
}

export default App
