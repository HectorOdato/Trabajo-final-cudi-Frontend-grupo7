import { Link } from "react-router-dom"
import CartButton from "./CartButton";

const NavbarBase = ({ user, cart }) => {
  return (
    <>
      <Link
        className="text-2xl font-bold text-red-500 items-center space-x-2 flex"
        to="/"
      >
        E-Commerce-Grupo 7
      </Link>

      <nav className="flex flex-wrap items-center gap-4">
        <Link
          className="text-gray-300 hover:text-red-400 transition duration-300 ease-in-out"
          to="/"
        >
          Inicio
        </Link>
        <Link
          className="text-gray-300 hover:text-red-400 transition duration-300 ease-in-out"
          to="/micuenta"
        >
          MiCuenta
        </Link>
        <CartButton user={user} cart={cart} />
      </nav>
    </>
  );
}

export default NavbarBase
