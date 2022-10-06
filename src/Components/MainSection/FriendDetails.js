import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
  const clickedFriend = useLoaderData();
  const {name, id, username, email} = clickedFriend;
  return (
    <div>
      <h1 className='text-2xl mt-16 font-semibold'>ID: {id}</h1>
      <h2 className='text-xl font-semibold mt-2'>User Name: {username}</h2>
      <h2 className='text-2xl font-semibold mt-2'>Name: {name}</h2>
      <h4 className='text-lg font-medium mt-2'>Email: {email}</h4>
    </div>
  );
};

export default FriendDetails;