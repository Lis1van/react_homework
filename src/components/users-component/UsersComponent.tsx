import React, {useEffect, useState} from 'react';
import UserComponent from "../user-component/UserComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value.users);// пока сдесь не добавил через точку users, то писало что users.map is not a function
            });
    }, []);

    return (
        <div>
            {users.map((user) => <UserComponent user={user} />)}
        </div>
    );
};

export default UsersComponent;
