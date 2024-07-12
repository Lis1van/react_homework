// src/api/postsApi.ts
import axios from 'axios';
import { Post } from '../interfaces/Post';

const POSTS_API_URL = 'https://jsonplaceholder.org/posts';

export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get(POSTS_API_URL);
    return response.data;
};

export const getUserPosts = async (userId: number): Promise<Post[]> => {
    const response = await axios.get(`${POSTS_API_URL}/${userId}`);
    return response.data;
};



