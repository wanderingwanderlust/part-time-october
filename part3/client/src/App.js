import "./App.css";
import Footer from "./components/partials/Footer.js";
import Navi from "./components/partials/Navi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import GifSearchPage from "./components/pages/GifSearchPage";
import GifSavePage from "./components/pages/GifSavePage";
import CreateAccount from "./components/pages/CreateAccount";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./components/contexts/authContext";
import RequireAuth from "./components/contexts/RequireAuth";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navi />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<RequireAuth />}>
              <Route path="/gifs/search" element={<GifSearchPage />} />
              <Route path="/gifs/saved" element={<GifSavePage />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
