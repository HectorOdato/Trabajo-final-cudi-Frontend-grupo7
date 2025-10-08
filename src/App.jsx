import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import CategoryPage from './pages/CategoryPage';
import MiAccount from './pages/Miaccount';

const App = () => {
  const user = {role: "admin"}
  const userLogin = false
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/micuenta" element={!userLogin ? <MiAccount/> : <Navigate to="/" />} />
        <Route path="/secret-dashboard" element={user.role === "admin" ? <AdminPage/> : <Navigate to="/login" />} />
        <Route path='/category/:category' element={<CategoryPage/>}/>
      </Routes>
    </Router>
  );
}

export default App
