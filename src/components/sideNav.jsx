
const SideNav = () => {
  return (
    <nav className='w-[4.75rem] h-[calc(100vh-4rem)] bg-green-700 sticky top-16 left-0 flex flex-col p-[0.75rem] items-center'>
      <div className='h-[40px] w-[40px] flex justify-center items-center ripple-button'>
        <a className='text-black flex items-center'><span class="material-symbols-outlined">more_vert</span></a>
      </div>
    </nav>
  )
}

export default SideNav