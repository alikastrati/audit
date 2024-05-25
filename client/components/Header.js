"use client";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Header() {
  
  const [userRole, setUserRole] = useState("");
  
  // Get User role from the JWT Token which holds the Users role
  const getUserRole = () => {
    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='))?.split('=')[1];

    if(token) {
      try{
        const decodedToken = JSON.parse(atob(token.split('.')[1]));

        const role = decodedToken.role;
        setUserRole(role);
      } catch(error) {
        console.error('Error decoding JWT Token: ' , error);
      }
    }
  }


  useEffect(() => {
    getUserRole();
  }, [])
  
  
  
  return (
    <>

      <div className="navbar bg-main">

        {/* MAIN NAVBAR START  */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm bg-main dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">

              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>

              {userRole === 'admin' && (
                <li><a>Dashboard</a></li>
              )}
              
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Audit</a>
        </div>

        {/* NAVBAR HAMBURGER MENU FOR SMALLER SCREENS  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu bg-main menu-horizontal px-1">

            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/blog">Blog</Link>
            </li>
            
            {userRole === 'admin' && (

                <li>
                  <Link href='/admin/dashboard'>
                    Dashboard
                  </Link>
                </li>
              )}


            {userRole === 'user' && (
                <li><a>Scan Log</a></li>
              )}
            <li><a>Contact</a></li>
          </ul>
        </div>

        {/* NAVBAR END (RIGHT SIDE) */}
        <div className="navbar-end bg-main">
          {userRole === 'admin' && (
            <div className="dropdown dropdown-end bg-main">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
              </div>
            </div>
            <ul tabIndex={0} className="bg-main menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>


              {/* Temporary Solution  */}

              {userRole === 'admin' && (
                <li>
                  <Link href='/admin/dashboard'>
                    Dashboard
                  </Link>
                </li>
              )}
              <li><a>Logout</a></li>
            </ul>
          </div>
          )}



        {userRole === '' && (
            <div className="dropdown dropdown-end bg-main">
              <Link href='/log-in'>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
              </Link>
            
            
          </div>
          )}





        {userRole === 'user' && (
            <div className="dropdown dropdown-end bg-main">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
              </div>
            </div>
            <ul tabIndex={0} className="bg-main menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Logout</a></li>
            </ul>
            
            
          </div>
          )}
        </div>
      </div>
    </>
  );
}
