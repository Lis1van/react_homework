import React, {FC} from 'react';
import './App.css';
import PostForm from "./components/PostForm";

const App:FC = () => {
  return (
      <div>
        <h1>Create a new post</h1>
        <PostForm />
      </div>
  );
};

export default App;
