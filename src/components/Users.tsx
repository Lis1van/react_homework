import React from 'react';
import {getUsers, IUser} from "../services/apiService";
import User from "./User";

interface UsersState{
    users: IUser[]
}
interface UsersProps{
    onSelectUser: (userId: number) => void;
}

class Users extends React.Component<UsersProps, UsersState> {
    state: UsersState = {
        users: []
    }
    componentDidMount(){
        getUsers().then(users => {
            this.setState({users});
        })
    }
    render() {
        const {users} = this.state;
        const {onSelectUser} = this.props;
        return (
            <div>
                {users.map(user => (
                    <User key={user.id} user={user} onSelectUser={onSelectUser}/>
                ))}
            </div>
        );
    }
}

export default Users;
