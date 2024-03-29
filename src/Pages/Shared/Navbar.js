import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

  const [user] = useAuthState(auth)
  const email = user?.user?.email;
  const currentUser= {email: email};

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };

    const menuItems = <>

        <li><Link to='/'>Home</Link></li>
        {
           user &&   <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li><Link to=''>Category</Link></li>  
        <li><Link to='/blog'>Blog</Link></li>              
        <li><Link to=''>About Us</Link></li>        
        <li><Link to='/contact'>Contact Us</Link></li>
        {
          user ? <li><Link to='/login' onClick={logout}>LogOut</Link></li> :
          <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div class="navbar bg-[#2C313C] text-white py-4">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">Computer Manufacture</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
</div>
    );
};

export default Navbar;