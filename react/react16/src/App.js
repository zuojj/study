import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import TodoList from './todolist/TodoList'

function App() {
  return (
    <div className="App">
      <TodoList />
      <Clock />
      <Clock />
      <Clock />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
