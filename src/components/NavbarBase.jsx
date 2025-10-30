import { Link } from "react-router-dom"
import CartButton from "./CartButton";
import { User } from "lucide-react";

const NavbarBase = ({ user, cart }) => {
  return (
    <>
      <nav className="flex flex-wrap items-center gap-4">
    <Link
    to="/micuenta"
    className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition duration-300 ease-in-out">
        <User size={30} />
    </Link>
        <CartButton user={user} cart={cart} />
      </nav>
    </>
  );
}

export default NavbarBase
