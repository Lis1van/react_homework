// src/components/Users.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../api/usersApi';
import { User } from '../interfaces/User';

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getUsers()
            .then((data) => {
                if (Array.isArray(data)) {
                    setUsers(data);
                } else {
                    setError('Invalid data format');
                }
                setLoading(false);
            })
            .catch((error) => {
                setError('Error fetching users');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        `{user.firstname} ({user.lastname}): - {user.email}: -`
                        <Link to={`/users/${user.id}`}>View Posts</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;



