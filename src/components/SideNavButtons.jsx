import { NavLink } from 'react-router-dom'

const SideNavButtons = ({icon_name, name, path}) => {
  return (
    <NavLink to={path} data-name={name} className={`h-[48px] w-full px-1.5 flex justify-center items-center ripple-button `}><span className="material-symbols-outlined">{icon_name}</span></NavLink>
  )
}

export default SideNavButtons