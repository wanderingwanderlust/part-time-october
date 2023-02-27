import logo from './logo.svg';
import './App.css';
import Footer from './components/partials/Footer.js'
import { Button } from 'reactstrap'

function App() {
  return (
    <div className="App">
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
          React is fun
        </a>
        <Button color='primary'>Hello World</Button>
      </header>



      <Footer />
    </div>
  );
}

export default App;
