import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/usersApi';
import { User } from '../interfaces/User';

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getUsers()
            .then((data) => {
                setUsers(data);
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
                        {user.firstname} ({user.lastname}) - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
