import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <nav className='h-17 bg-red-100 flex grid-cols-2'>
      <div className="pl-[1rem] h-[4rem]  flex justify-start w-full items-center">
        <div className='h-[48px] w-[48px] flex items-center justify-center'><svg className=' focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50' width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></div>
        <a href="" className='flex justify-center items-center ml-[8px]'><img className='h-[28px]' src="logo_square_rounded.svg" alt="logo" /> <span className='ml-[0.625rem] mr-[0.125rem]'>Classroom</span></a>
      </div>  
      <div className="dib2 flex justify-end w-full items-center">
        <img className='h-9 w-9 ' src="logo_square_rounded.svg" alt="logo" />
      </div>
    </nav>
  )
}

export default App
