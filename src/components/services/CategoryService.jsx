import axios from "axios"

const API_URL = "http://localhost:3000/api/categories"

export const getAllCategories = async () => {
    try {
    const res = await axios.get(API_URL);
    return res.data.data; 
} catch (error) {
    console.error("Error al obtener categorías:", error);
    throw error;
}
};

export const getCategoryById = async (id) => {
    try {
    const res = await axios.get(`${API_URL}/${id}`)
    return res.data
} catch (error) {
    console.error("Error al obtener categoría:", error)
    throw error
}
}

export const createCategory = async (categoryData) => {
    try {
    const res = await axios.post(API_URL, categoryData)
    return res.data
} catch (error) {
    console.error("Error al crear categoría:", error)
    throw error
}
}

export const removeCategory = async (id) => {
    try {
    const res = await axios.delete(`${API_URL}/${id}`)
    return res.data
} catch (error) {
    console.error("Error al eliminar categoría:", error)
    throw error
}
}


export const updateCategory = async (id, categoryData) => {
    try {
    const res = await axios.put(`${API_URL}/${id}`, categoryData)
    return res.data
} catch (error) {
    console.error("Error al actualizar categoría:", error)
    throw error
}
}