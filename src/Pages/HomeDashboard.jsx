import { Outlet } from 'react-router-dom'
import ClassCard from '../components/ClassCard.jsx'

const HomeDashboard = () => {
  return (
    <ul className='flex flex-wrap p-[1.5rem] gap-[1rem] text-white'>
      <ClassCard/>
      <ClassCard/>
      <ClassCard/>
      <ClassCard/>
      <ClassCard/>
      <ClassCard/>
      <ClassCard/>
      <ClassCard/>
      <ClassCard/>
      <ClassCard/>
      <ClassCard/>
      <ClassCard/>
    </ul>
  )
}

export default HomeDashboard