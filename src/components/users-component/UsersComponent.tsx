import React, {useEffect, useState} from 'react';
import UserComponent from "../user-component/UserComponent";
import {IUser} from "../../models/IUser";
import {getAllUsers, getPostOUserById} from "../../services/api.service";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
       getAllUsers().then(value => {
           setUsers(value.users);
       });
    }, []);

    const getPosts = (id: number) => {
        getPostOUserById(id).then(posts => console.log(posts));
    }

    return (
        <div>
            <hr/>
            <div>
                {users.map((user) => <UserComponent key={user.id} user={user} getPosts = {getPosts}/>)}
            </div>
            <hr/>
        </div>
    );
};

export default UsersComponent;
