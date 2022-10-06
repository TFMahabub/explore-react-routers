import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
  const {id, name, email, username} = friend;
  return (
    <div className='border-2 border-slate-400 rounded-lg py-5'>
      <h2 className='text-xl font-medium'>Name: {name}</h2>
      <h3 className='text-md font-medium'>Email: {email}</h3>
      <p>User Name: <Link className='text-blue-600' to={`/friend/${id}`}>{username}</Link></p>
    </div>
  );
};

export default Friend;