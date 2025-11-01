import { Link } from "react-router-dom";
import NavbarBase from "./NavbarBase";
import Dashboard from "./Dashboard";
import AuthStatus from "./AuthStatus";
import { AlignCenter, AlignCenterVertical, MoveRight } from "lucide-react";

  function Navbar({ onToggleTheme }) {
    const user = true;
  const cart = ['pc', 'mouse', 'teclado'];
  const isAdmin = true;


  return (
    <nav className="flex justify-between px-50 py-5 nav">
      <div className="flex justify-between">
        <Link
          className="text-2xl font-bold text-red-500 items-center space-x-2 flex"
          to="/">
          <p className="text-6xl">TecnoPro</p>
        </Link>
        
      </div>
      <div>
        <button onClick={onToggleTheme} className="cursor-pointer flex items-center gap-2">
          Cambiar Tema ☀️🌙
        </button>
      </div>

      <div className="flex ml-10 gap-8 items-center text-white text-lg">
      </div>

      <div className="flex ml-auto ">
        <NavbarBase user={user} cart={cart} />
      </div>

      <div className="flex flex-col gap-8 justify-end ml-8">
        <Dashboard isAdmin={isAdmin} />
        <AuthStatus user={user} />
      </div>
    </nav>
  );
}
export default Navbar
