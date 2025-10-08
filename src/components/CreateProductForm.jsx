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
    <div className="bg-black shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-red-500 text-center">Crear nuevo producto</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Título"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          className="block w-full appearance-none rounded-md border border-red-900 px-2 py-2 placeholder-gray-250 shadow-sm focus:border-red-300 focus:outline-none focus:ring-red-500 sm:text-sm text-gray-300"
        />
        <textarea
          placeholder="Descripción"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="block w-full appearance-none rounded-md border border-red-900 px-2 py-2 placeholder-gray-250 shadow-sm focus:border-red-300 focus:outline-none focus:ring-red-500 sm:text-sm text-gray-300"
        />
        <input
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="block w-full appearance-none rounded-md border border-red-900 px-2 py-2 placeholder-gray-250 shadow-sm focus:border-red-300 focus:outline-none focus:ring-red-500 sm:text-sm text-gray-300"
        />
        <select
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          className="block w-full appearance-none rounded-md border border-red-900 px-2 py-2 placeholder-gray-250 shadow-sm focus:border-red-300 focus:outline-none focus:ring-red-500 sm:text-sm text-gray-300"
        >
          <option value="">Categoría</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
          className="block w-full appearance-none rounded-md border border-red-900 px-2 py-2 placeholder-gray-250 shadow-sm focus:border-red-300 focus:outline-none focus:ring-red-500 sm:text-sm text-gray-300"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="wblock w-full appearance-none rounded-md border border-red-900 px-2 py-2 placeholder-gray-250 shadow-sm focus:border-red-300 focus:outline-none focus:ring-red-500 sm:text-sm text-gray-300"
        />
        <button
          type="submit"
          className="w-full bg-red-900 hover:bg-red-700 text-white py-2 px-4 rounded-md"
        >
          Crear producto
        </button>
      </form>
    </div>
  )
}

export default CreateProductForm
