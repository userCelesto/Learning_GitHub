import SideNav from './components/SideNav.jsx'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


function App() {
  const Location = useLocation()
  return (
    <div>
      <header className='h-16 flex sticky top-0 left-0 w-full z-1 bg-[#f8fafd]'>
        <div className="pl-[1rem] h-[4rem]  flex justify-start w-full items-center">
          <NavLink className='h-[48px] w-[48px] flex items-center justify-center ripple-button text-[#5F6368] translate-x-[-3px]'><span className="material-symbols-outlined">menu</span></NavLink>
          <div>
            <NavLink to={'/h'} className='flex justify-center items-center ml-[8px] hover:cursor-pointer'><img className='h-[28px]' src="/logo_square_rounded.svg" alt="logo" /><span className='ml-[0.625rem] mr-[0.125rem] text-2xl text-[#444746] font-extralight'>Classroom</span></NavLink>
          </div>
          {['/', '/h'].includes(location.pathname.trim())? '' : <span className="ml-[0.5rem] mr-[0.125rem]"><svg focusable="false" width="18" height="18" viewBox="0 0 24 24" className=" NMm5M hhikbc"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path></svg></span>}
          <NavLink to={Location.pathname}><span className='ml-[0.5rem] mr-[0.125rem] text-[1.375rem] text-[#444746] font-extralight'>{{'/s':'Settings', '/calendar':'Calendar', '/h/archived':'Archived classes'}[Location.pathname]}</span></NavLink>

        </div>  
        <div className="pr-[1.5rem] flex justify-end w-full items-center">
          <a  className='h-[42px] w-[42px] flex justify-center items-center mx-1 ripple-button text-[#5F6368]'><span className="material-symbols-outlined">add</span></a>
          <a  className='h-[42px] w-[42px] flex justify-center items-center mx-1 ripple-button text-[#5F6368]'><span className="material-symbols-outlined">apps</span></a>
          <a  className='h-[42px] w-[42px] flex justify-center items-center ml-1 ripple-button'><img className='w-[32px] h-[32px] rounded-full' src="/Profile/Sample_Profile.png" alt="" /></a>
        </div>
      </header>
      
      <div className="content flex bg-[#f8fafd]">
        <SideNav />
        <div className='w-[calc(100vw-4.75rem)] rounded-ss-4xl shadow-xs mt-[1px] bg-white overflow-hidden z-[0]'>
          <Outlet  />
        </div>
      </div>
    </div>
  )
}

export default App
