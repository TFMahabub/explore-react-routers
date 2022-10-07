import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='text-lg font-medium my-3'>
      <NavLink className={({isActive}) => isActive ? 'bg-slate-200 py-2 px-5 rounded-md': 'hover:bg-slate-200 py-2 px-5 rounded-md'} to={'/'}>Home</NavLink>
      <NavLink className={({isActive}) => isActive ? 'bg-slate-200 py-2 px-5 rounded-md': 'hover:bg-slate-200 py-2 px-5 rounded-md'} to={'/product'}>Product</NavLink>
      <NavLink className={({isActive}) => isActive ? 'bg-slate-200 py-2 px-5 rounded-md': 'hover:bg-slate-200 py-2 px-5 rounded-md'} to={'/about'}>About</NavLink>
      <NavLink className={({isActive}) => isActive ? 'bg-slate-200 py-2 px-5 rounded-md': 'hover:bg-slate-200 py-2 px-5 rounded-md'} to={'/friends'}>Friends</NavLink>
      <NavLink className={({isActive}) => isActive ? 'bg-slate-200 py-2 px-5 rounded-md': 'hover:bg-slate-200 py-2 px-5 rounded-md'} to={'/posts'}>Posts</NavLink>
      <NavLink className={({isActive}) => isActive ? 'bg-slate-200 py-2 px-5 rounded-md': 'hover:bg-slate-200 py-2 px-5 rounded-md'} to={'/contact_us'}>Contact Us</NavLink>
    </div>
  );
};

export default Header;