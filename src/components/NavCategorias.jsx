import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../components/services/CategoryService";

function NavCategorias() {
  const [categorias, setCategorias] = useState([]);

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
        {categorias.map((cat) => (
          <li key={cat._id}>
            <Link
              to={`/category/${cat._id}`} 
              className="text-gray-300 hover:text-red-500 transition duration-300 ease-in-out"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavCategorias;

