// src/components/PostComments.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostComments } from '../api/commentsApi';
import { Comment } from '../interfaces/Comment';

const PostComments: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (postId) {
            getPostComments(Number(postId))
                .then((data) => {
                    setComments(data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError('Error fetching comments');
                    setLoading(false);
                });
        }
    }, [postId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Post Comments</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h2>{comment.postId} ({comment.userId})</h2>
                        <p>{comment.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostComments;
