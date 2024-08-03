// components/PostsPage.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/slices/postsSlice';
import { RootState, AppDispatch } from '../redux/store';

const PostsPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { posts, loading, error } = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div>
            <h1>Posts</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsPage;
