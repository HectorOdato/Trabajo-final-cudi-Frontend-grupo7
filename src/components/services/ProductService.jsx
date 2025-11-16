import axios from "axios";
import {API_URL} from "../../config/api.js";

export const createProduct = async (productData) => {
try {
    const res = await axios.post(API_URL, productData, {
    headers: {
        "Content-Type": "multipart/form-data",
    },
    });
    return res.data;
} catch (error) {
    throw error;
}
};

export const getProductsByCategory = async (category) => {
try {
    const res = await axios.get(`${API_URL}?category=${category}`);
    return res.data;
} catch (error) {
    throw error;
} };

export const getAllProducts = async () => {
try {
    const res = await axios.get(API_URL);
    return res.data;
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

export const updateProduct = async (id, productData) => {
try {
    const res = await axios.put(`${API_URL}/${id}`, productData, {
    headers: {
        "Content-Type": "multipart/form-data",
    },
    });
    return res.data;
} catch (error) {
    console.error("Error al actualizar producto:", error);
    throw error;
} };

export const removeProduct = async (id) => {
try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
} catch (error) {
    console.error("Error al eliminar producto:", error);
    throw error;
} };

export const enableProduct = async (id) => {
try {
    const res = await axios.patch(`${API_URL}/${id}/enable`);
    return res.data;
} catch (error) {
    console.error("Error al habilitar producto:", error);
    throw error;
} };