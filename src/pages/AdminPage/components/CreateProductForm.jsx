import { useState } from "react";

const CreateProductForm = ({ addProduct }) => {
  const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewProduct({
          ...newProduct,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log(e.target.value)

    try {
      await addProduct(newProduct)
      setNewProduct({
        title: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        image: '',
      });
    } catch (error) {
      console.error('Error creando el producto: ', error);
    }
  };

  return (
<div className="bg-white shadow-2xl p-10 mb-10 max-w-5xl mx-auto border border-zinc-800">
  <h2 className="text-3xl font-semibold mb-8 text-center text-zinc-900 tracking-wide">
    <span className="text-red-500">+</span> Crear nuevo producto
  </h2>

  <form onSubmit={handleSubmit} className="space-y-5">
    <input
      type="text"
      placeholder="Título del producto"
      value={newProduct.title}
      onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
      className="block w-full bg-white border border-zinc-700 text-gray-200 rounded-lg px-3 py-2 placeholder-gray-500 focus:ring-2 focus:ring-red-600 focus:outline-none transition"
    />

    <textarea
      placeholder="Descripción"
      value={newProduct.description}
      onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
      className="block w-full bg-white border border-zinc-700 text-gray-200 rounded-lg px-3 py-2 placeholder-gray-500 focus:ring-2 focus:ring-red-600 focus:outline-none transition h-24"
    />

    <input
      type="number"
      placeholder="Precio"
      value={newProduct.price}
      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      className="block w-full bg-white border border-zinc-700 text-gray-200 rounded-lg px-3 py-2 placeholder-gray-500 focus:ring-2 focus:ring-red-600 focus:outline-none transition"
    />

    <select
      value={newProduct.category}
      onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
      className="block w-full bg-white border border-zinc-700 text-black rounded-lg px-3 py-2 placeholder-gray-500 focus:ring-2 focus:ring-red-600 focus:outline-none transition"
    >
      <option value="">Seleccionar categoría</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>

    <input
      type="number"
      placeholder="Stock disponible"
      value={newProduct.stock}
      onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
      className="block w-full bg-white border border-zinc-700 text-black rounded-lg px-3 py-2 placeholder-gray-500 focus:ring-2 focus:ring-red-600 focus:outline-none transition"
    />

    <div className="border border-dashed border-zinc-600 rounded-lg p-3 text-gray-400 hover:border-red-600 transition">
      <label className="block text-sm mb-1 text-gray-400">Imagen del producto</label>
      <input
        type="file"
        onChange={handleImageChange}
        className="w-full text-sm text-gray-300 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-red-700 file:text-white hover:file:bg-red-600 cursor-pointer transition"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-red-700 hover:bg-red-600 text-white py-3 rounded-lg font-semibold tracking-wide transition shadow-md hover:shadow-red-500/20"
    >
      Crear producto
    </button>
  </form>
</div>

  )
}

export default CreateProductForm
