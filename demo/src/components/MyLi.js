import { Component } from "react";

class MyLi extends Component{
    hyphens(data){
        console.log("Click  -->"+ data );
    }
    render(){
        const data = this.props.data.map((data)=>(
            <li key={data.id} onClick={() => this.hyphens(this) } >
                {data.id} Data : {data.name}
            </li>
        ));
        return(
            <ul>
                {data}
            </ul>
        );

    }
}

export default MyLi;