import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage';
import CategoryPage from './pages/CategoryPage';
import Navbar from './components/Navbar';
import MiAccount from './pages/Auth/AccountPage';
import AdminPage from './pages/AdminPage/ABMCPage';
import Navmenu from './components/NavMenu';
import Footer from './components/Footer';

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
          <Navmenu/>
            <Routes>
              <Route path="/" element={<HomePage/>} />
                <Route path="/micuenta" element={!userLogin ? <MiAccount/> : <Navigate to="/" />} />
                <Route path="/secret-dashboard" element={user.role === "admin" ? <AdminPage/> : <Navigate to="/login" />} />
                <Route path='/category/:category' element={<CategoryPage/>}/>
            </Routes>
            </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App
