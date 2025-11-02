import { Link } from 'react-router-dom'
import { useState } from 'react'
import { LogIn, LogOut, UserPlus } from 'lucide-react'

const AuthStatus = ({ user = true }) => {
  const [login, setLogin] = useState(true)

  return user ? (
    <button
      className="flex items-center p-2 rounded-lg bg-transparent hover:bg-red-600 transition-colors">
    <LogOut size={18} className="text-" />
    <span className="hiden sm:inline ml-2 text-">Logout</span>
  </button>
) : (
    <>
      <Link
        to={'/signup'}
        className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
        onClick={() => setLogin(!login)}
      >
        <UserPlus className="mr-2" size={18} />
        Sign Up
      </Link>
      <Link
        to={'/login'}
        className="bg-gray-700 hover:bg-emerald-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out ml-2"
      >
        <LogIn className='mr-2' size={18} />
        Login
      </Link>
    </>
  );
}

export default AuthStatus
