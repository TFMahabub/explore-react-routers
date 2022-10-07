import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-8 mx-8'>
      {
        posts.map(post => <Post key={post.id} post={post}></Post>)
      }
    </div>
  );
};

export default Posts;