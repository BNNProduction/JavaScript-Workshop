import { Component } from "react";

class ListLI extends Component{

    render(){
        const data = this.props.users.map((user)=>(
            <li>
               {user.name}
            </li>
        ));
        return(
            <ul>
                {data}
            </ul>
        );

    }

}

export default ListLI;