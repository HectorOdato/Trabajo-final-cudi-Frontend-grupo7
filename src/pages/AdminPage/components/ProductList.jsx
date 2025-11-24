import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { getAllCategories } from "../../../components/services/CategoryService"

const ProductList = ({
  products,
  fetchAllProducts,
  updateProduct,
  disableProduct,
  enableProduct,
  deleteProduct
}) => {

const [editingId, setEditingId] = useState(null);
const [editForm, setEditForm] = useState({
  name: "",
  description: "",
  price: "",
  category: "", 
  stock: "", 
  });

  const [categories, setCategories] = useState([]); 

  const loadCategories = async () => {
    try {
        const data = await getAllCategories();
        const list =
            data?.data ||
            data?.categories ||
            data ||
            [];
        setCategories(list);
    } catch (error) {
        console.error("Error obteniendo categorías:", error);
        setCategories([]);
    }
  };

  useEffect(() => {
    loadCategories(); 
    fetchAllProducts();
  }, [ fetchAllProducts, products, editingId, updateProduct, disableProduct, enableProduct, deleteProduct]);

const startEdit = (product) => {
  setEditingId(product._id);
  setEditForm({
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    stock: product.stock,
  });
};

const cancelEdit = () => {
    setEditingId(null);
    setEditForm({
  name: "",
  description: "",
  price: "",
  category: "",
  stock: "",
});
}

const saveEdit = async (id) => {
  try {
    await updateProduct(id, editForm);
    cancelEdit();
    fetchAllProducts();
    } catch (error) {
      console.error("Error actualizando producto:", error);
    }
  };

if (!Array.isArray(products)) {
    return <p className="text-center mt-6 text-gray-600">Cargando productos...</p>;
  }

return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
    {products.map((product) => (
      <div key={product._id} className="border rounded-xl p-4 shadow bg-white">
        {editingId === product._id ? (
          <div className="flex flex-col gap-3">
            <input
            className="border p-2 rounded"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            placeholder="Nombre"
            />
            <textarea
              className="border p-2 rounded"
              value={editForm.description}
              onChange={(e) =>
              setEditForm({ ...editForm, description: e.target.value })}
              placeholder="Descripción"
              />
            <input
              type="number"
              className="border p-2 rounded"
              value={editForm.price}
              onChange={(e) =>
              setEditForm({ ...editForm, price: Number(e.target.value) })}
              placeholder="Precio"
              />

              <select
              name="category"
              value={editForm.category} 
              onChange={(e) =>
                setEditForm({ ...editForm, category: e.target.value })
              }
              className="block w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-black focus:border-black focus:outline-none transition">
                <option value="">Seleccionar categoría</option>
                  {Array.isArray(categories) &&
                  categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            <input
              type="number"
              className="border p-2 rounded"
              value={editForm.stock}
              onChange={(e) =>
              setEditForm({ ...editForm, stock: Number(e.target.value) })}
              placeholder="Stock"
              />
            <div className="flex gap-2 mt-3">
              <button
              onClick={() => saveEdit(product._id)}
              className="bg-blue-600 text-white px-3 py-2 rounded-lg"> Guardar </button>
              <button onClick={cancelEdit} className="border px-3 py-2 rounded-lg"> Cancelar</button>
              </div>
            </div>) : (
            <div>
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4"/>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="mt-2 font-semibold">${product.price}</p>
              <div className="flex gap-2 mt-4">
                <button onClick={() => startEdit(product)} className="px-3 py-2 bg-blue-500 text-white rounded-lg">Editar</button>{product.status ? (
                  <button onClick={() => disableProduct(product._id)} className="px-3 py-2 bg-red-500 text-white rounded-lg">Deshabilitar </button>
                ) : (
                  <button onClick={() => enableProduct(product._id)} className="px-3 py-2 bg-green-500 text-white rounded-lg" >Habilitar</button>
                )}
                  <button onClick={() => deleteProduct(product._id)} className="px-3 py-2 bg-red-700 text-white rounded-lg flex items-center gap-2"><Trash2 size={18} />Eliminar</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;