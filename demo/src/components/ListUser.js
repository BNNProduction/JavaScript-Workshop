import { Component } from "react";

class ListUser extends Component{
    render(){
        const data = this.props.users.map((user)=>(
            <li key={user.id}>
                User : {user.name} , Age : {user.age}
            </li>
        ));
        return(
            <ul>
                {data}
            </ul>
        );

    }

}

export default ListUser;