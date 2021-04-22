import { Component } from "react";
import Form2 from "./components/Form2";

class WorkApp extends Component{

  render() {
    return (
      <div>
        <Form2 onSayHi={this.xyz} />
      </div>
    );
  }

}
export default WorkApp;