import { useState } from 'react'
import { Switch } from '@mui/material'

const Settings = () => {
  const emailNotification = (isItOn) => {
    setisEmailOn(isItOn)
    if(!isItOn) return
    console.log("IT IS ON")
  }
  const [isEmailOn, setisEmailOn] = useState(false)
  return (
    <div className='flex flex-col mx-auto max-w-[808px] p-[1.5rem] '>
      <div className='p-[1.5rem] mb-[2rem] bg-white border-1 border-solid border-[#dadce0] rounded-[0.5rem] overflow-hidden w-full'>
          <h2 className='mb-[0.5rem] text-[2rem] text-[#202124] leading-[2.5rem]'>Profile</h2>
          <h3 className='tracking-[0.25px] text-[14px] font-[550] text-[#3c4043]'>Profile picture</h3>
          <div className='flex items-center justify-center h-12 w-30 '>
            <button className='flex h-10 w-28 justify-center items-center rounded-4xl hover:bg-blue-50 hover:cursor-pointer '>
              <img className='rounded-full size-[32px] mr-2' src="/Profile/Sample_Profile.png" alt="" />
              <span className='text-[14px] text-blue-800 font-[550]'>Change</span>
            </button>
          </div>  
          <h3 className='tracking-[0.25px] text-[14px] font-[550] text-[#3c4043]'>Account Settings</h3>
          <div className='tracking-[0.2px] leading-5 text-[14px] text-[#3c4043]'>Change your password and security options, and access Google services. <a className='underline text-blue-500' href="">Manage</a> </div>
          <h3 className='tracking-[0.25px] mt-4 text-[14px] font-[550] text-[#3c4043]'>Change Name</h3>
          <div className='tracking-[0.2px] leading-5 text-[14px]  text-[#3c4043]'>To change your name, go to your <a className='underline text-blue-500'>account settings</a>.</div>
      </div>
      <div className='p-[1.5rem] bg-white border-1 border-solid border-[#dadce0] rounded-[0.5rem] overflow-hidden w-full'>
        <div>
          <h2 className='mb-4 text-[2rem] leading-[2.5rem] text-[#202124]'>Notifications</h2>
          <div className='pb-2'>
            <div className='mb-4'>
              <h3 className='text-[1.375rem]  text-[#3c4043] leading-[1.75rem]'>Email</h3>
              <p className='text-[13px] '>These settings apply to the notifications you get by email. <a className='underline text-blue-500' href="">Learn more</a></p>
            </div>
            <div className='flex justify-between text-sm text-[#3c4043] font-[550] leading-5 mb-6'>
                <div className='label'>Allow email notifications</div>
                <Switch
                  checked={isEmailOn}
                  onChange={(e)=>{emailNotification(e.target.checked)}}
                  color='primary'
                />
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings