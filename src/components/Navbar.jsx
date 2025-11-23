import { Link } from "react-router-dom";
import NavbarBase from "./NavbarBase";
import Dashboard from "./Dashboard";
import AuthStatus from "./AuthStatus";
import { Lightbulb } from "lucide-react";



  function Navbar({ onToggleTheme }) {
    const user = true;
  const cart = ['pc', 'mouse', 'teclado'];
  const isAdmin = true;


  return (
    <nav className="flex justify-between px-50 py-8 nav">
      <div className="flex justify-between">
        <Link
          className="text-2xl font-bold text-red-700 items-center space-x-2 flex"
          to="/">
          <p className="text-6xl text-red-500 font-bold">TecnoPro</p>
        </Link>

      </div>


      <div className="flex ml-10 gap-8 items-center text-white text-lg">
      </div>

      <div className="flex ml-auto ">
        <NavbarBase user={user} cart={cart} />
      </div>

      <div className="flex gap-8 justify-end ml-8">
        <AuthStatus user={user} />
        <Dashboard isAdmin={isAdmin} />
      </div>
            <div>
      <button
        onClick={onToggleTheme}
        className="cursor-pointer flex items-center justify-center w-12 h-12 bg-neutral-700 rounded-2xl hover:bg-neutral-600 transition shadow-md">
          <Lightbulb className="w-6 h-6 text-yellow-300 " />
      </button>

      </div>
    </nav>
  );
}
export default Navbar