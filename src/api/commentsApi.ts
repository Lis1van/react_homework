import axios from 'axios';
import { Comment } from '../interfaces/Comment';

const COMMENTS_API_URL = 'https://jsonplaceholder.org/comments';

export const getComments = async (): Promise<Comment[]> => {
    const response = await axios.get(COMMENTS_API_URL);
    return response.data;
};
