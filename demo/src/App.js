import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Clock from './components/Clock';
import Form from './components/Form';
import ListUser from './components/ListUser';
import { useState } from 'react';

function App() {
   var users = [
    { id: 1, name: "User 01", age: 10 },
    { id: 2, name: "User 02", age: 20 },
    { id: 3, name: "User 03", age: 30 },
  ];

  const [message, setMessage] = useState("----------");

  const xyz = (input)=>{
    setMessage("New Section : "+input);
  }

  return (
    <div className="App">
      <h1> <Clock /></h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload BBBBBBBBBBBBBBBBBBBBBBBB Online to Git Page.
        </p>
        <ListUser users={users}/>
        <Form onSayHi={xyz}/>
        <p>{message}</p>
        <User name="01"/>
        <User name="02"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
