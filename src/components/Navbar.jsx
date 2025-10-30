import { Link } from "react-router-dom";
import NavbarBase from "./NavbarBase";
import Dashboard from "./Dashboard";
import AuthStatus from "./AuthStatus";

const Navbar = () => {
  const user = true
  const cart = ['pc', 'mouse', 'teclado']
  const isAdmin = true

  return (
    <nav className="flex justify-between px-50 py-5 bg-neutral-700">
      <div className="flex justify-between">
      <Link
        className="text-2xl font-bold text-red-500 items-center space-x-2 flex"
        to="/">
        TecnoPro
      </Link>
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
