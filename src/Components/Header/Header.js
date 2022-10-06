import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='text-lg font-medium my-3'>
      <Link className='hover:bg-slate-200 py-2 px-5 rounded-md' to={'/'}>Home</Link>
      <Link className='hover:bg-slate-200 py-2 px-5 rounded-md' to={'/product'}>Product</Link>
      <Link className='hover:bg-slate-200 py-2 px-5 rounded-md' to={'/about'}>About</Link>
      <Link className='hover:bg-slate-200 py-2 px-5 rounded-md' to={'/friends'}>Friends</Link>
      <Link className='hover:bg-slate-200 py-2 px-5 rounded-md' to={'/contact_us'}>Contact Us</Link>
    </div>
  );
};

export default Header;