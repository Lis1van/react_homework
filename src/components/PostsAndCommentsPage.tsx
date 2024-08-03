import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchPosts } from '../redux/slices/postsSlice';
import { fetchCommentsByPostId } from '../redux/slices/commentSlice';

const PostsAndCommentsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { posts, loading: postsLoading, error: postsError } = useAppSelector(state => state.posts);
    const { comments, loading: commentsLoading, error: commentsError } = useAppSelector(state => state.comments);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handlePostClick = (postId: number) => {
        dispatch(fetchCommentsByPostId(postId));
    };

    return (
        <div>
            <h1>Posts and Comments</h1>
            {postsLoading && <p>Loading posts...</p>}
            {postsError && <p>Error loading posts: {postsError}</p>}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3 onClick={() => handlePostClick(post.id)}>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <h2>Comments</h2>
            {commentsLoading && <p>Loading comments...</p>}
            {commentsError && <p>Error loading comments: {commentsError}</p>}
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

export default PostsAndCommentsPage;
