import { Star, Trash } from "lucide-react";

const ProductList = ({products, removeProducts, toggleActive}) => {
  return (
<div className="shadow-2xl overflow-hidden max-w-5xl mx-auto border border-zinc-800">
  <table className="min-w-full divide-y ">
    <thead className="bg-white border-b border-zinc-900">
      <tr>
        <th
          scope="col"
          className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 uppercase tracking-wider"
        >
          Producto
        </th>
        <th
          scope="col"
          className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 uppercase tracking-wider"
        >
          Precio
        </th>
        <th
          scope="col"
          className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 uppercase tracking-wider"
        >
          Categoría
        </th>
        <th
          scope="col"
          className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 uppercase tracking-wider"
        >
          Destacado
        </th>
        <th
          scope="col"
          className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 uppercase tracking-wider"
        >
          Acciones
        </th>
      </tr>
    </thead>

    <tbody className="bg-white divide-y divide-zinc-700">
      {products.map((p) => (
        <tr
          key={p.id}
          className="hover:bg-zinc-900/80 transition-colors duration-300"
        >
          <td className="px-10 py-8 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-md object-cover border border-zinc-700"
                  src={p.image}
                  alt={p.name}
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-200">{p.name}</div>
              </div>
            </div>
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-400">${p.price.toFixed(2)}</div>
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-3 py-1 inline-flex text-xs font-semibold rounded-full bg-zinc-800 text-gray-300 border border-zinc-700">
              {p.category}
            </span>
          </td>

          <td className="px-6 py-4 whitespace-nowrap">
            <button
              type="button"
              className={`p-2 rounded-full transition duration-300 ease-in-out ${
                p.isFeatured
                  ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                  : "bg-zinc-800 text-gray-400 hover:text-yellow-400 hover:bg-zinc-700"
              }`}
              onClick={() => toggleActive(p.id)}
            >
              <Star className="h-5 w-5" />
            </button>
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
              className="text-red-600 hover:text-red-400 transition duration-300 ease-in-out"
              onClick={() => removeProducts(p.id)}
            >
              <Trash className="h-5 w-5" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default ProductList