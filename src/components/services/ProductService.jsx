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
