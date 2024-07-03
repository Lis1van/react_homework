import React from 'react';
import './App.css';
import {getUserPosts, IPost} from "./services/apiService";
import Users from "./components/Users";

interface AppState{
  selectedUserId: number | null;
  posts: IPost[];
}

class App extends React.Component<{}, AppState>{
  state: AppState = {
    selectedUserId: null,
    posts: []
  }
  choseSelectUser = (userId: number) => {
    this.setState({selectedUserId: userId});
    this.loadUserPosts(userId);
  }
  loadUserPosts = (userId: number) => {
    getUserPosts(userId).then(posts => {
      this.setState({posts});
    })
  }
  render() {
    const {posts} = this.state;
    return (
        <div>
          <h1>Users and posts</h1>
          <Users onSelectUser={this.choseSelectUser}/>
          <div>
            {posts.length > 0 ?(
                <div>
                  <h2>Posts:</h2>
                  {posts.map(post => (
                      <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                      </div>
                  ))}
                </div>
            ) : (
                <p>Select a user to see their posts.</p>
            )}
          </div>
        </div>
    )
  }
}

export default App;
