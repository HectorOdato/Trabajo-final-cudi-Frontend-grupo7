import { Link } from 'react-router-dom'
import { useState } from 'react'
import { LogIn, LogOut, UserPlus } from 'lucide-react'

const AuthStatus = ({ user = true }) => {
  const [login, setLogin] = useState(true)

  return user ? (
    <button
      className="relative group text-black hover:text-red-400 transition duration-300 ease-in-out mb-5"
      onClick={() => setLogin(!login)}>
      <LogOut size={30} />
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
        className="bg-gray-700 hover:bg-emerald-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
      >
        <UserPlus className="mr-2" size={18} />
        <LogIn className='mr-2' size={18} />
      </Link>
    </>
  );
}

export default AuthStatus
