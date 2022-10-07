import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
  const {id, title, body} = post;
  return (
    <div className='border-2 rounded-lg p-5'>
      <h2 className='text-2xl font-bold'>ID: {id}</h2>
      <h2 className='text-xl font-semibold mt-2 mb-2'>{title.slice(0,30) + '...'}</h2>
      <p>{body.slice(0,100) + '...'}</p>
      <Link to={`/post/${id}`}>
        <button className='border-2 py-1 px-3'>Show More Details</button>
      </Link>
    </div>
  );
};

export default Post;