
import './App.css';
import Dictionary from './Dictionary';
import logo from './logo.png'

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small><a href="https://github.com/CintaChan86/dictionary"> Coded </a> by Yacinta Hostiningtyas</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
