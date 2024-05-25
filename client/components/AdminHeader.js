import React from 'react';
import Link from 'next/link';

export default function AdminHeader() {
  return (
    <div>
        <div className="navbar bg-main relative z-10">
         <div className="navbar-start">


             <div className="drawer relative z-20">
             <input id="my-drawer" type="checkbox" className="drawer-toggle" />
             <div className="drawer-content">
               <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

               </label>
             </div> 

             <div className="drawer-side">
               <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
               <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <h1 className='p-3 text-3xl font-semibold'>Admin Dashboard</h1>

                <li>
                    <Link href='/admin/dashboard'>
                        Dashboard
                    </Link>

                </li>



                 <li>
                    <Link href='/admin/admin-settings'>
                        Profile Settings
                    </Link>

                </li>


                <li>
                    <Link href='/admin/users'>
                        Users Dashboard
                    </Link>

                </li>


                <li>
                    <Link href='/admin/blog-dashboard'>
                        Blog Dashboard
                    </Link>

                </li>

               </ul>
             </div>
            </div>

   
            </div>

            
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Audit</a>
  </div>


  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>


    
    <button className="btn btn-ghost btn-circle">
      <Link href='/' >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
      </Link>
    


    </button>

    
  <div className="dropdown dropdown-end">
    
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>


</div>
    </div>
  )
}
