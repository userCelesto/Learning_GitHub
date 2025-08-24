import { useState } from 'react';

const ClassCard = () => {
    const randomBanner = Math.floor(Math.random() * 5) + 1;
  return (
    <li className='h-[18.5rem] w-[18.75rem] flex flex-col border-solid border-gray-300 border rounded-xl overflow-hidden hover:shadow-md hover-cursor-pointer'>
        <div className={`subjectTitles pt-[1rem] px-[1rem] pb-[0.5rem] w-[300px] h-[100px] bg-linear-to-r/srgb from-indigo-500 to-teal-400 bg-contain bg-center`}>
            <h2 className='inline-flex'>
                <a href="" className='group flex flex-col'>
                    <div className="subjectName inline-flex group-hover:underline text-2xl leading-[2rem] truncate mb-[0.25rem]">
                        CPE-SUBJECT-1
                    </div>
                    <div className="subjectCode inline-flex group-hover:underline text-sm font-medium leading-[1.25rem] truncate">
                        Code-001
                    </div>
                </a>
            </h2>
            <div className="professorName hover:underline hover:cursor-pointer inline-flex text-xs leading-[1rem] truncate">
                Raymond Rosalie
            </div>
        </div>
        
        <div className="pendingWorks p-[1rem] min-h-0 grow">
            <div className='photo mt-[-3.25rem] float-right h-[4.5rem] w-[4.5rem] bg-amber-700 rounded-full relative'>

            </div>
        </div> 
        <div className="options flex justify-end gap-[1rem] px-[0.25rem] py-[0.5rem] border-t-[1px] border-solid border-gray-300">
            <div className='h-[40px] w-[40px] flex justify-center items-center ripple-button'>
                <a className='text-black flex items-center'><span className="material-symbols-outlined">work</span></a>
            </div>
            <div className='h-[40px] w-[40px] flex justify-center items-center ripple-button'>
                <a className='text-black flex items-center'><span className="material-symbols-outlined">folder</span></a>
            </div>
            <div className='h-[40px] w-[40px] flex justify-center items-center ripple-button'>
                <a className='text-black flex items-center'><span className="material-symbols-outlined">more_vert</span></a>
            </div>
        </div>
    </li>
  )
}

export default ClassCard