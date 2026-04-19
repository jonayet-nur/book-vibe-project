import React from 'react'
import { FaBook } from 'react-icons/fa'
import { NavLink } from 'react-router'

const Navbar = () => {
    const link =(
        <>
         <li ><NavLink to='/' className={({isActive})=> isActive? "border border-green-500 text-green-500 p-2 border-2 rounded-md" :""}>Home</NavLink></li>
           <li ><NavLink to='/book' className={({isActive})=> isActive?" border-green-500 text-green-500 p-2 border-2 rounded-md":""}>Listed Books</NavLink></li>
             <li ><NavLink to='/page-not' >Pages to Read</NavLink></li>
                        
        </>
    )
  return (
    <div className='sticky top-0 z-50'>
          <nav className='bg-white shadow-xl p-4 '>
        <div className='w-10/12 mx-auto'>
            <div className='flex justify-between items-center '>
                {/*  nav logo left*/}
                <div className='flex items-center gap-2'>
                  <span className='text-white bg-[#4f39f6c3] p-3 rounded-xl'><FaBook></FaBook></span>
                <h2 className='text-[#4f39f6c3] font-bold text-4xl'> Book Vibe</h2>
                </div>

                {/* nav links */}
                <div className='md:block hidden'>
                    <ul className='flex items-center gap-5 font-semibold text-[16px] text-[#101727]'>
                       {link}
                       
                    </ul>
                </div>

                {/* nav right  */}

                <div className='flex gap-5 items-center'>
                <button className='relative text-2xl'></button>
                <button className='px-8 py-3 bg-[#23BE0A] rounded-md text-md text-white hover:bg-purple-700 transition-colors font-medium md:block hidden cursor-pointer'>Sign In</button>
                <button className='px-8 py-3 bg-[#59C6D2] rounded-md  text-md text-white hover:bg-purple-700 transition-colors font-medium md:block hidden cursor-pointer'>Sign up</button>

                {/* responsive hamberger */}
                <div className="dropdown md:hidden block">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-80 p-10 shadow  -ml-50 ">
        {link}
                       
      <div className='flex gap-4 mt-3'>
         <button className='btn btn-secondary'>Sign in</button>
        <button className='btn btn-secondary'>Sign up</button>
      </div>
      </ul>
      
    </div>


              </div>
            </div>
        </div>
    </nav>
        
    </div>
  )
}

export default Navbar