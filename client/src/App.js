import logo from './scarf.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="text-3xl font-bold underline">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=WsUmwoVfJLI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Must See
        </a>
      </header>
    </div>
  );
}

export default App;
