import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './Components/MainSection/Product';
import About from './Components/MainSection/About';
import ContactUs from './Components/MainSection/ContactUs';
import HomePage from './Components/HomePage';
import Main from './Components/MainSection/Main';
import Friends from './Components/MainSection/Friends';
import FriendDetails from './Components/MainSection/FriendDetails';
import Posts from './Components/MainSection/Posts';
import PostDetails from './Components/MainSection/PostDetails';

function App() {
  const routers = createBrowserRouter([
    {path:'/', 
    element: <Main></Main>,
    children:[
      {path: '/', element: <HomePage></HomePage>},
      {path:'/product', element: <Product></Product>},
      {path:'/about', element: <About></About>},
      {path:'/contact_us', element: <ContactUs></ContactUs>},
      {path:'/friends',
       loader: async () =>{
        return fetch('https://jsonplaceholder.typicode.com/users')
       },
       element: <Friends></Friends>},
       {path:'/friend/:friendId',
        loader: async ({params}) =>{
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        element:<FriendDetails></FriendDetails>
      },

      {
        path:'/posts',
        loader: async () =>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element: <Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader: async ({params}) =>{
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        element: <PostDetails></PostDetails>
      },
      {path:'*', element: <div>Not found 404</div>}
    ]
  },
  ])
  return (
    <div className="App">
      <RouterProvider router= {routers} />
    </div>
  );
}

export default App;
