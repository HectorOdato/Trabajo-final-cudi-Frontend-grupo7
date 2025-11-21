const ProductCard = ({ product }) => {

  const handleAddToCart = () => {
    alert("Producto agregado al carrito")
  };

  return (
<div className="group flex flex-col w-full relative overflow-hidden rounded-2xl border border-gray-300 shadow-md bg-white transition-transform hover:scale-[1.02] hover:shadow-xl">
  <div className="relative h-80 w-full overflow-hidden rounded-t-2xl">
    <img
      src={product.image}
      alt="imagen del producto"
      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"/>
    <span className="absolute top-3 right-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full backdrop-blur-md font-semibold">
      ${product.price}
    </span>
  </div>
    <div className="p-5">
      <h1 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
        {product.name}
      </h1>
      <p className="text-gray-600 text-sm pb-6 mb-4">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
        Agregar al carrito
      </button>
      </div>
  </div>
);
}

export default ProductCard