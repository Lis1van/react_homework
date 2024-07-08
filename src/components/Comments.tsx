import React, { useEffect, useState } from 'react';
import { getComments } from '../api/commentsApi';
import { Comment } from '../interfaces/Comment';

const Comments: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getComments()
            .then((data) => {
                setComments(data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Error fetching comments');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h2>Post ID: {comment.postId} (User ID: {comment.userId})</h2>
                        <p>{comment.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
