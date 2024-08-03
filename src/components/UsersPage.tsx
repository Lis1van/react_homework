import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {fetchUsers} from "../redux/slices/usersSlice";


const UsersPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { users, loading } = useAppSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            {!loading && <p>Loading users...</p>}
            {users.map(users => (
                <div key={users.id}>
                    <h3>{users.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default UsersPage;
