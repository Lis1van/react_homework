import axios from "axios";
const BASE_URL = 'https://dummyjson.com';

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}
export interface IPost {
    id: number;
    title: string;
    body: string;
}

export const getUsers = async (): Promise<IUser[]> => {
    const response = await axios.get<{ users: IUser[] }>(`${BASE_URL}/users`);
    return response.data.users;
}
export const getUserPosts = async (userId: number): Promise<IPost[]> => {
    const response = await axios.get<{ posts: IPost[] }>(`${BASE_URL}/users/${userId}/posts`);
    return response.data.posts;
}
