
import './App.css';
import Footer from './components/partials/Footer.js'
import Navi from './components/partials/Navi';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import GifSearchPage from './components/pages/GifSearchPage';
import GifSavePage from './components/pages/GifSavePage';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navi />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/gifs/search' element={<GifSearchPage />} />
          <Route path='/gifs/saved' element={<GifSavePage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
