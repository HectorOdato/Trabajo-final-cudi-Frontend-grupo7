import { useState , useEffect } from "react";
import { createProduct } from "../../../components/services/ProductService";
import { getAllCategories } from "../../../components/services/CategoryService"

const CreateProductForm = () => {
  const [categories, setCategories] = useState([])

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const categoriesData = await getAllCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error cargando categorías:", error);
    }
  };

  fetchCategories();
}, []);


  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: null,
    status:"true",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct({ ...newProduct, image: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", newProduct.name);
      formData.append("description", newProduct.description);
      formData.append("price", newProduct.price);
      formData.append("category", newProduct.category);
      formData.append("stock", newProduct.stock);
      formData.append("status", newProduct.status.toString())
      if (newProduct.image) formData.append("image", newProduct.image);

      await createProduct(formData);

      setNewProduct({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        image: null,
        status: true,
      });
      alert("Producto creado con éxito");
    } catch (error) {
      console.error("Error creando el producto:", error.response?.data || error.message);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm shadow-lg p-10 mb-10 max-w-5xl mx-auto border border-gray-200 rounded-2xl">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 tracking-wide">
        🛒 Crear nuevo producto
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Título del producto"
          value={newProduct.name}
          onChange={handleChange}
          className="block w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl px-4 py-2.5 placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black focus:outline-none transition"
        />

        <textarea
          name="description"
          placeholder="Descripción"
          value={newProduct.description}
          onChange={handleChange}
          className="block w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl px-4 py-2.5 placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black focus:outline-none transition h-28"
        />

        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={newProduct.price}
          onChange={handleChange}
          className="block w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl px-4 py-2.5 placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black focus:outline-none transition"
        />

        <select
          name="category"
          value={newProduct.category}
          onChange={handleChange}
          className="block w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-black focus:border-black focus:outline-none transition"
>
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
          name="stock"
          placeholder="Stock disponible"
          value={newProduct.stock}
          onChange={handleChange}
          className="block w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl px-4 py-2.5 placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black focus:outline-none transition"
        />

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-gray-600 hover:border-neutral-700 transition">
          <label className="block text-sm mb-2 font-medium text-gray-700">Imagen del producto</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm text-gray-700 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-black file:text-white hover:file:bg-neutral-700 cursor-pointer transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black hover:bg-neutral-700 text-white py-3 rounded-xl font-semibold tracking-wide transition shadow-md hover:shadow-red-400/30"
        >
          Crear producto
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
