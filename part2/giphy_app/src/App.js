import logo from './logo.svg';
import './App.css';
import Footer from './components/partials/Footer.js'
import { Button } from 'reactstrap'
import ToDoClass from './components/Todo/ToDoClass';
import ToDoHook from './components/Todo/ToDoHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ToDoClass />
        <Button color='primary'>Hello World</Button>
        <ToDoHook />
      </header>
      <Footer />
    </div>
  );
}

export default App;
