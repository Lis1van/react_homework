import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomePage from './components/HomePage';
import UsersPage from './components/UsersPage';
import CommentsPage from './components/CommentsPage';
import PostsAndCommentsPage from './components/PostsAndCommentsPage';

const App = () => {
  return (
      <Provider store={store}>
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/comments">Comments</Link></li>
                <li><Link to="/posts-comments">Posts and Comments</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/comments" element={<CommentsPage />} />
              <Route path="/posts-comments" element={<PostsAndCommentsPage />} />
            </Routes>
          </div>
        </Router>
      </Provider>
  );
};

export default App;
