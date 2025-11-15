import { useState, useEffect } from "react";
import {createCategory,getAllCategories,removeCategory,updateCategory} from "../../../components/services/CategoryService";

const CreateCategoryForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [categories, setCategories] = useState([]);
    const [editingCategory, setEditingCategory] = useState(null);
    useEffect(() => {
        loadCategories();
    }, []);
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
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editingCategory) {
                await updateCategory(editingCategory._id, {
                    name,
                    description,
                    status: "true",
                });
                setMessage("Categoría actualizada con éxito");
            } else {
                await createCategory({
                    name,
                    description,
                    status: "true",
                });
                setMessage("Categoría creada con éxito");
            }
            setName("");
            setDescription("");
            setEditingCategory(null);
            loadCategories();

        } catch (error) {
            console.error("Error:", error);
            setMessage("Error procesando la categoría");
        }
    };

    const handleDelete = async (id) => {
        try {
            await removeCategory(id);
            loadCategories();
        } catch (error) {
            console.error("Error eliminando categoría:", error);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">
                    {editingCategory ? "Editar Categoría" : "Crear Nueva Categoría"}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Nombre de la Categoría
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl px-4 py-2.5 placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black focus:outline-none transition"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                            Descripción
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            placeholder="Descripcion"
                            onChange={(e) => setDescription(e.target.value)}
                            className="block w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl px-4 py-2.5 placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black focus:outline-none transition h-28"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                    >
                        {editingCategory ? "Guardar Cambios" : "Crear Categoría"}
                    </button>
                    {editingCategory && (
                        <button
                            onClick={() => {
                                setEditingCategory(null);
                                setName("");
                                setDescription("");
                            }}
                            className="ml-3 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                            type="button">
                            Cancelar
                        </button>
                    )}
                </form>
                {message && (
                    <p className="mt-4 text-center text-red-900 font-semibold">{message}</p>
                )}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Categorías Actuales</h2>
                {(!categories || categories.length === 0) ? (
                    <p>No hay categorías creadas aún.</p>
                ) : (
                    <ul className="space-y-3">
                        {categories.map((cat) => (
                            <li
                                key={cat._id}
                                className="flex justify-between items-center p-3 border rounded-md">
                                <div>
                                    <p className="font-semibold">{cat.name}</p>
                                    <p className="text-gray-600 text-sm">{cat.description}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setEditingCategory(cat);
                                            setName(cat.name);
                                            setDescription(cat.description);
                                        }}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md">
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(cat._id)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md">
                                        Eliminar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CreateCategoryForm;
