// src/api/usersApi.ts
import axios from 'axios';
import { User } from '../interfaces/User';

const USERS_API_URL = 'https://jsonplaceholder.org/users';

export const getUsers = async (): Promise<User[]> => {
    const response = await axios.get(USERS_API_URL);
    return response.data;
};

