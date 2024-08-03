// components/CommentsPage.tsx
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchCommentsByPostId } from '../redux/slices/commentSlice';

const CommentsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { comments, loading, error } = useAppSelector(state => state.comments);
    const [postId, setPostId] = useState<number>(1);

    useEffect(() => {
        dispatch(fetchCommentsByPostId(postId));
    }, [dispatch, postId]);

    return (
        <div>
            <h1>Comments for Post {postId}</h1>
            <input
                type="number"
                value={postId}
                onChange={(e) => setPostId(Number(e.target.value))}
                min="1"
                max="100"
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p><strong>{comment.name}</strong></p>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsPage;
