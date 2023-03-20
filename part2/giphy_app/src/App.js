
import './App.css';
import Footer from './components/partials/Footer.js'
import Navi from './components/partials/Navi';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navi />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
