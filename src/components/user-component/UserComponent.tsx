import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {getPostOUserById} from "../../services/api.service";

interface IProps{
    user: IUser,
    getPosts: (id: number) =>void
}

const UserComponent:FC<IProps> = ({user, getPosts}) => {
    return (
        <div>
            {user.id} : {user.firstName} - <button onClick={() => {
            getPosts(user.id);

        }}>Show post</button>
        </div>
    );
};

export default UserComponent;
