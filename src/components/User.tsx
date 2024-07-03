import React from 'react';
import {IUser} from "../services/apiService";

interface UserProps{
    user: IUser;
    onSelectUser: (userId: number) => void;
}

class User extends React.Component<UserProps, {}> {
    choseSelectUser = () => {
        this.props.onSelectUser(this.props.user.id);
    }
    render(){
        const {user} = this.props;
        return(
            <div>
                <h3>{user.firstName} {user.lastName}</h3>
                <p>Email: {user.email}</p>
                <button onClick={this.choseSelectUser}>Show post</button>
            </div>
        )
    }
}
export default User;
