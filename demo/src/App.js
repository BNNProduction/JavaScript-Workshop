import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Clock from './components/Clock';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <h1> <Clock /></h1>
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload BBBBBBBBBBBBBBBBBBBBBBBB Online to Git Page.
        </p>
        <Form />
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
