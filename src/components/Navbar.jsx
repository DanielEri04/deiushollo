import React from 'react';
import { Link } from 'react-router-dom';
import { House } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { Handshake } from 'lucide-react';
import { CircleDollarSign } from 'lucide-react';
import { CircleUser } from 'lucide-react';


const Navbar = () => {

  return (
    <nav className="w-full text-white bg-white border-gray-200 dark:bg-red-900">
      <ul className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <li className='active:text-red-900 hover:text-black '><Link to="/"><House />Home</Link></li>
        <li  className='active:text-red-900 hover:text-yellow-700' ><Link to="/history"><BookOpen />Histrory</Link></li>
        <li  className='active:text-red-900 hover:text-black' ><Link to="/services"><Handshake />Services</Link></li>
        <li  className='active:text-red-900 hover:text-green-700' ><Link to="/pricing"><CircleDollarSign />Pricing</Link></li>
        <li  className='active:text-red-900 hover:text-blue-700' ><Link to="/contact"><CircleUser />Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;