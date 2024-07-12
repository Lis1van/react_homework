// src/components/UserPosts.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUserPosts } from '../api/postsApi';
import { Post } from '../interfaces/Post';

const UserPosts: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (userId) {
            getUserPosts(Number(userId))
                .then((data) => {
                    if (Array.isArray(data)) {
                        setPosts(data);
                    } else {
                        setError('Invalid data format');
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    setError('Error fetching posts');
                    setLoading(false);
                });
        }
    }, [userId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>User Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <Link to={`/comments/${post.id}`}>View Comments</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPosts;


