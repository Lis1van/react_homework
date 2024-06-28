import React, {useEffect, useState} from 'react';
import UserComponent from "../user-component/UserComponent";
import {IUser} from "../../models/IUser";
import {getAllUsers, getPostOUserById} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import PostsComponent from "../posts-component/PostsComponent";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
       getAllUsers().then(value => {
           setUsers(value.users);//если убрать .users чтобы было как в уроке то выдает ошибку users.map is not a function
       });
    }, []);

    const getPosts = (id: number) => {
        getPostOUserById(id).then(posts => setPosts(posts.posts));//если тут поменять на setPosts([...posts]) так как в уроке то выдает ошибку что posts не итерабильный
    }

    return (
        <div>
            <hr/>
            <div>
                {users.map((user) => <UserComponent key={user.id} user={user} getPosts = {getPosts}/>)}
            </div>
            <hr/>
            <div>
                <PostsComponent posts={posts}/>
            </div>
        </div>
    );
};

export default UsersComponent;
