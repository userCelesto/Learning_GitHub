import React from 'react'

const Settings = () => {
  return (
    <div className='flex flex-col mx-auto max-w-[808px] p-[1.5rem]'>
        <div className='p-[1.5rem] mb-[2rem] bg-white border-1 border-solid border-[#dadce0] rounded-[0.5rem] overflow-hidden w-full'>
            <h2 className='mb-[0.5rem] text-[2rem] text-[#202124] leading-[2.5rem]'>Profile</h2>
            <h3 className='tracking-[0.25px] text-[14px] font-[550] text-[#3c4043]'>Profile picture</h3>
            <div className='flex items-center justify-center h-12 w-30 '><button className='flex h-10 w-28 justify-center items-center rounded-4xl hover:bg-blue-50 '><img className='rounded-full size-[32px] mr-2' src="/Profile/Sample_Profile.png" alt="" /><span className='text-[14px] text-blue-800 font-[550]'>Change</span></button></div>
            <h3 className='tracking-[0.25px] text-[14px] font-[550] text-[#3c4043]'>Account Settings</h3>
            <div className='tracking-[0.2px] leading-5 text-[#3c4043]'>Change your password and security options, and access Google services.</div>
            <h3 className='tracking-[0.25px] mt-4 text-[14px] font-[550] text-[#3c4043]'>Change Name</h3>
            <div className='tracking-[0.2px] leading-5 text-[#3c4043]'>To change your name, go to your</div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Settings