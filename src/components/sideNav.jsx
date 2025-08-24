import { useState } from "react"
import SideNavButtons from "./SideNavButtons"

const SideNav = () => {
  const [ActiveButton, setActiveButton] = useState("Home")
  const handle_click = (e) => {
    const button = e.target.closest('a')?.name || null
    button? setActiveButton(button): ''
  }

  return (
    <nav onClick={handle_click} className= {`w-[4.75rem] h-[calc(100vh-4rem)] sticky top-16 left-0 flex flex-col p-[0.75rem] items-center text-[#444746]`}>
      <SideNavButtons name={'Home'} icon_name={'home'} path={'/h'} />
      <SideNavButtons name={'Calendar'} icon_name={'calendar_today'} path={'/calendar'} />
      <div className="separator h-[1px] my-2"></div>
      <SideNavButtons name={'Teaching'} icon_name={'group'} path={'/'} />
      <div className="separator h-[1px] my-2"></div>
      <SideNavButtons name={'Enrolled'} icon_name={'school'} path={'/'} />
      <div className="separator h-[1px] my-2"></div>
      <SideNavButtons name={'Archive'} icon_name={'archive'} path={'/h/archived'} />
      <SideNavButtons name={'settings'} icon_name={'settings'} path={'/s'} />
    </nav>
  )
}

export default SideNav