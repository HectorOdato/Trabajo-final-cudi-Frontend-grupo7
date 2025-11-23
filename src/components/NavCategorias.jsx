import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../components/services/CategoryService";

function NavCategorias() {
  const [categorias, setCategorias] = useState([]);
  const [open, abrirmenu] = useState(false);

  useEffect(() => {
    const cargarCategorias = async () => {
      try {
        const data = await getAllCategories();
        setCategorias(data);
      } catch (error) {
        console.error("Error al cargar categorías:", error);
      }
    };

    cargarCategorias();
  }, []);

  return (
    <nav className="bg-neutral-700 text-white font-bold w-full text-2xl">
      <ul className="flex justify-center gap-8 p-4">
    <li><Link to='/' className=" font-[Science_Gothic] text-gray-300 hover:text-red-500 transition duration-300 ease-in-out">Inicio</Link></li>
        <li className="relative">
          <button
            onClick={() => abrirmenu(!open)}
            className="font-[Science_Gothic] text-gray-300 hover:text-red-500 transition duration-300 ease-in-out">
            Productos
          </button>
          {open && (
            <ul className="absolute left-0 mt-2 bg-neutral-800 rounded-lg shadow-lg p-2 w-48 z-50">
              {categorias.map((cat) => (
                <li key={cat._id}>
                  <Link
                    to={`/category/${cat._id}`}
                    className="block px-3 py-2 text-base text-gray-300 hover:text-red-400 hover:bg-neutral-700 rounded-md transition"
                    onClick={() => abrirmenu(false)}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li><Link to='/help' className=" font-[Science_Gothic] text-gray-300 hover:text-red-500 transition duration-300 ease-in-out">Ayuda</Link></li>
        <li><Link to='/contact' className=" font-[Science_Gothic] text-gray-300 hover:text-red-500 transition duration-300 ease-in-out">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default NavCategorias;

