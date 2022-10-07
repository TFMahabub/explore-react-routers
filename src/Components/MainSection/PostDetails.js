import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData()
  const {id, title, body} = post;
  return (
    <div className='mt-12'>
      <h2 className='text-2xl font-bold text-green-500'>ID: {id}</h2>
      <h4 className='text-lg font-medium'>Title: {title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;