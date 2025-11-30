import { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import AuthStatus from "./AuthStatus";
import CartButton from "./CartButton";
import { User, Lightbulb, Menu, X } from "lucide-react";

function Navbar({ onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const user = true;
  const cart = ["pc", "mouse", "teclado"];
  const isAdmin = true;

  return (
    <nav className="w-full shadow-md px-4 py-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48 nav text-white">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <p className="text-4xl md:text-6xl text-red-500 font-bold">
            TecnoPro
          </p>
        </Link>
        <div className="hidden md:flex  gap-8">
          <Link
            to="/micuenta"
            className="flex gap-2 text-gray-300 hover:text-red-400 transition">
            <User size={32} />
          </Link>
          <CartButton user={user} cart={cart} />
          <AuthStatus user={user} />
          <Dashboard isAdmin={isAdmin} />
          <button
            onClick={onToggleTheme}
            className="cursor-pointer flex items-center justify-center w-12 h-12 bg-neutral-700 rounded-2xl hover:bg-neutral-600 transition shadow-md"
          >
            <Lightbulb className="w-6 h-6 text-yellow-300" />
          </button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-6 mt-6 md:hidden">
          <Link
            to="/micuenta"
            className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition"
          >
            <User size={30} />
          </Link>
          <CartButton user={user} cart={cart} />
          <AuthStatus user={user} />
          <Dashboard isAdmin={isAdmin} />
          <button
            onClick={onToggleTheme}
            className="cursor-pointer flex items-center justify-center w-12 h-12 bg-neutral-700 rounded-2xl hover:bg-neutral-600 transition shadow-md">
            <Lightbulb className="w-6 h-6 text-yellow-300" />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

