import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import MiAccount from './pages/Miaccount';
import NavCategorias from './components/NavCategorias';
import Footer from './components/Footer';
import Computadoras from './pages/Computadoras';
import Notebook from './pages/Notebook';
import Celulares from './pages/Celulares';
import Televisores from './pages/Televisores';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const user = {role: "admin"}
  const userLogin = false
  return (
    <div>
      <Router>
        
        <Navbar onToggleTheme={toggleDarkMode} />
        <main>
          <NavCategorias/>
            <Routes>
              <Route path="/" element={<HomePage/>} />
                <Route path="/micuenta" element={!userLogin ? <MiAccount/> : <Navigate to="/" />} />
                <Route path="/secret-dashboard" element={user.role === "admin" ? <AdminPage/> : <Navigate to="/login" />} />
                <Route path="/computadoras" element={<Computadoras />} />
                <Route path="/notebook" element={<Notebook />} />
                <Route path="/celulares" element={<Celulares />} />
                <Route path="/televisores" element={<Televisores />} />
            </Routes>
            </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App
