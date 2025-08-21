import { useState } from 'react'
import HomeDashboard from './components/HomeDashboard.jsx'
import SideNav from './components/sideNav.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header className='h-16 bg-red-100 flex sticky top-0 left-0 w-full z-1'>
        <div className="pl-[1rem] h-[4rem]  flex justify-start w-full items-center">
          <a href="" className='h-[48px] w-[48px] flex items-center justify-center ripple-button'><svg className=' focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 NMm5M' width="24" height="24" viewBox="0 0 24 24" focusable="false" ><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></a>
          <a href="" className='flex justify-center items-center ml-[8px]'><img className='h-[28px]' src="logo_square_rounded.svg" alt="logo" /> <span className='ml-[0.625rem] mr-[0.125rem] text-2xl'>Classroom</span></a>
        </div>  
        <div className="pr-[1.5rem] flex justify-end w-full items-center">
          <a href="" className='h-[42px] w-[42px] flex justify-center items-center mx-1 ripple-button'><span className="material-symbols-outlined text-[#434343]">add</span></a>
          <a href="" className='h-[42px] w-[42px] flex justify-center items-center mx-1 ripple-button'><span className="material-symbols-outlined text-[#434343] ">apps</span></a>
          <a href="" className='h-[42px] w-[42px] flex justify-center items-center ml-1 ripple-button'><img className='w-[32px] h-[32px]' src="logo_square_rounded.svg" alt="logo" /></a>
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
