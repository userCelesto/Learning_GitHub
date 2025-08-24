import { useState } from "react"

const SideNav = () => {
  const [ActiveButton, setActiveButton] = useState(null)
  const handle_click = (e) => {
    const button = e.target.closest('a')?.name || null
    setActiveButton(button)
  }

  return (
    <nav onClick={handle_click} className= {`w-[4.75rem] h-[calc(100vh-4rem)] sticky top-16 left-0 flex flex-col p-[0.75rem] items-center text-[#444746]`}>
      <a name='Home' className={`h-[48px] w-full px-1.5 flex justify-center items-center ripple-button ${ActiveButton === "Home"? "text-red-800" : ""}`}><span className="material-symbols-outlined">home</span></a>
      <a name='Calendar' className={`h-[48px] w-full px-1.5 flex justify-center items-center ripple-button ${ActiveButton === "Calendar"? "text-red-800" : ""}`}><span className="material-symbols-outlined">calendar_today</span></a>
      <div className="separator h-[1px] my-2"></div>
      <a name='Teaching' className={`h-[48px] w-full px-1.5 flex justify-center items-center ripple-button ${ActiveButton === "Teaching"? "text-red-800" : ""}`}><span className="material-symbols-outlined">group</span></a>
      <div className="separator h-[1px] my-2"></div>
      <a name='Enrolled' className={`h-[48px] w-full px-1.5 flex justify-center items-center ripple-button ${ActiveButton === "Enrolled"? "text-red-800" : ""}`}><span className="material-symbols-outlined">school</span></a>
      <div className="separator h-[1px] my-2"></div>
      <a name='Archive' className={`h-[48px] w-full px-1.5 flex justify-center items-center ripple-button ${ActiveButton === "Archive"? "text-red-800" : ""}`}><span className="material-symbols-outlined">archive</span></a>
      <a name='Settings' className={`h-[48px] w-full px-1.5 flex justify-center items-center ripple-button ${ActiveButton === "Settings"? "text-red-800" : ""}`}><span className="material-symbols-outlined">settings</span></a>
    </nav>
  )
}

export default SideNav