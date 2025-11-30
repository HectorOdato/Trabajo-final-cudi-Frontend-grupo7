import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "./services/CategoryService";
import { Menu, X } from "lucide-react";

function NavCategorias() {
  const [categorias, setCategorias] = useState([]);
  const [open, setOpen] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

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
      <div className="flex justify-between items-center p-4 md:hidden">
        <span className="font-[Science_Gothic] text-3xl">Menú</span>

        <button
          onClick={() => setMenuMobile(!menuMobile)}
          className="text-white"
        >
          {menuMobile ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <ul className="hidden md:flex justify-center gap-8 p-4">
        
        <li>
          <Link
            to="/"
            className="font-[Science_Gothic] text-gray-300 hover:text-red-500 transition"
          >
            Inicio
          </Link>
        </li>
        <li className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="font-[Science_Gothic] text-gray-300 hover:text-red-500 transition"
          >
            Productos
          </button>
          {open && (
            <ul className="absolute left-0 mt-2 bg-neutral-800 rounded-lg shadow-lg p-2 w-48 z-50">
              {categorias.map((cat) => (
                <li key={cat._id}>
                  <Link
                    to={`/category/${cat._id}`}
                    className="block px-3 py-2 text-base text-gray-300 hover:text-red-400 hover:bg-neutral-700 rounded-md transition"
                    onClick={() => setOpen(false)}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link
            to="/faq"
            className="font-[Science_Gothic] text-gray-300 hover:text-red-500 transition"
          >
            Ayuda
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="font-[Science_Gothic] text-gray-300 hover:text-red-500 transition"
          >
            Contacto
          </Link>
        </li>
      </ul>
      {menuMobile && (
        <ul className="flex flex-col gap-6 p-4 md:hidden bg-neutral-800 shadow-inner">
          <li>
            <Link
              to="/"
              className="font-[Science_Gothic] text-gray-300 hover:text-red-500 transition block"
              onClick={() => setMenuMobile(false)}
            >
              Inicio
            </Link>
          </li>
          <li className="">
            <button
              onClick={() => setOpen(!open)}
              className="font-[Science_Gothic] text-gray-300 hover:text-red-500 transition"
            >
              Productos
            </button>
            {open && (
              <ul className="mt-2 bg-neutral-900 rounded-lg shadow-lg p-2">
                {categorias.map((cat) => (
                  <li key={cat._id}>
                    <Link
                      to={`/category/${cat._id}`}
                      className="block px-3 py-2 text-lg text-gray-300 hover:text-red-400 hover:bg-neutral-700 rounded-md transition"
                      onClick={() => {
                        setOpen(false);
                        setMenuMobile(false);
                      }}>
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/faq"
              className="font-[Science_Gothic] text-gray-300 hover:text-red-500 transition block"
              onClick={() => setMenuMobile(false)}
            >
              Ayuda
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="font-[Science_Gothic] text-gray-300 hover:text-red-500 transition block"
              onClick={() => setMenuMobile(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavCategorias;

