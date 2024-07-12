// src/App.tsx
import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';
import UserPosts from './components/UserPosts';
import PostComments from './components/PostComments';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
        <div>
          <h1>Home</h1>
          <nav>
            <ul>
              <li><a href="/users">Users</a></li>
              <li><a href="/posts">Posts</a></li>
              <li><a href="/comments">Comments</a></li>
            </ul>
          </nav>
        </div>
    ),
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
  {
    path: '/comments',
    element: <Comments />,
  },
  {
    path: '/users/:userId/posts',
    element: <UserPosts />,
  },
  {
    path: '/posts/:postId/comments',
    element: <PostComments />,
  },
];

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;





