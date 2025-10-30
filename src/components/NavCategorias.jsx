import { Link, Router } from "react-router-dom";



function NavCategorias() {
  const categorias = [
    { nombre: "Computadoras", path: "/category/Computadora"},
    { nombre: "Notebooks", path: "/category/notebook"},
    { nombre: "Celulares", path: "/category/celulares"},
    { nombre: "Televisores", path: "/category/televisores"},
  ];

  return (
    <nav className="bg-neutral-700 text-white font-bold w-full text-2xl">
      <ul className="flex justify-center gap-8 p-4">
        {categorias.map((cat) => (
          <li key={cat.nombre}>
            <Link
              to={cat.path}
              className="text-gray-300 hover:text-red-500 transition duration-300 ease-in-out">
              {cat.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavCategorias;
