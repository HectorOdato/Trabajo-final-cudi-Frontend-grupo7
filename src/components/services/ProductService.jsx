import axios from "axios";
import {API_URL} from "../../config/api.js";

export const createProduct = async (productData) => {
try {
    const res = await axios.post(`${API_URL}/products`, productData, {
    headers: {
        "Content-Type": "multipart/form-data",
    },
    });
    return res.data;
} catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
}};

export const getProductsByCategory = async (category) => {
try {
    const res = await axios.get(`${API_URL}/products/category/${category}`);
    return res.data.products
}  catch (error) {
    console.error("Error al obtener productos por categoría:", error);
    throw error;
}
};

export const getAllProducts = async () => {
try {
    const res = await axios.get(`${API_URL}/products`);
    return res.data.datos
} catch (error) {
    console.error("Error al obtener listado de productos:", error);
    throw error;
} };


export const getProductbyId = async (id) => {
try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
} catch (error) {
    console.error("Error al obtener producto por ID:", error);
    throw error;
} };

export const updateProduct = async (id, data) => {
    return await axios.put(`${API_URL}/products/${id}`,
    data
);
};

export const removeProduct = async (id) => {
try {
    const res = await axios.delete(`${API_URL}/products/${id}`);
    return res.data;
} catch (error) {
    console.error("Error al eliminar producto:", error);
    throw error;
} };

export const enableProduct = async (id) => {
try {
    const res = await axios.put(`${API_URL}/products/enable/${id}`)
    return res.data;
} catch (error) {
    console.error("Error al habilitar producto:", error);
    throw error;
} };