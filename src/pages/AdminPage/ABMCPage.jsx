import React from "react" 
import { useState, useCallback } from 'react';
import AdminTabs from './components/AdminTabs';
import CreateProductForm from './components/CreateProductForm';
import CreateCategoryForm from './components/CreateCategoryForm';
import ProductList from './components/ProductList';
import Analytics from './components/Analytics';
import { getAllProducts, disableProduct , enableProduct , updateProduct , deleteProduct } from '../../components/services/ProductService.jsx';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('create');
    const [products, setProducts] = useState([]);

const fetchAllProducts = useCallback(async () => {       
    try {
        const productsArray = await getAllProducts(); 
        if (Array.isArray(productsArray)) {
        setProducts(productsArray);
        } else {
        console.error("Error: La API no devolvió un array de productos, sino:", productsArray);
        setProducts([]);
        }
    } catch (error) {
        console.error("Error obteniendo productos:", error);
        setProducts([]);
    }
    }, [setProducts]);

const handleDisableProduct = async (id) => {
    try {
        await disableProduct(id);
        setProducts(currentProducts => currentProducts.map(p => 
        p._id === id ? { ...p, status: false } : p
    ));
    } catch (error) {
        console.error("Error al deshabilitar producto:", error);
    }};

const handleEnableProduct = async (id) => {
    try {
        await enableProduct(id);
        setProducts(currentProducts => currentProducts.map(p => 
        p._id === id ? { ...p, status: true } : p
    ));
    } catch (error) {
        console.error("Error al habilitar producto:", error);
    }};

const handleDeleteProduct = async (id) => {
        try {
            await deleteProduct(id);
            setProducts(currentProducts =>
                currentProducts.filter(p => p._id !== id)
            );
        } catch (error) {
            console.error("Error al borrar producto:", error);
        }
    };

const addProduct = product => {
    console.log('Se esta agregando el producto: ', product);
    setProducts([product, ...products]);};

    return (
    <div className='min-h-screen relative overflow-hidden'>
        <div className='relative z-10 container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold mb-8 text-black text-center'>Panel de Administracion</h1>
        <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'categories' && <CreateCategoryForm />}
        {activeTab === 'create' && (<CreateProductForm addProduct={addProduct} />)}
        {activeTab === 'products' && (<ProductList 
        products={products} 
        fetchAllProducts={fetchAllProducts}
        updateProduct={updateProduct}
        disableProduct={handleDisableProduct}
        enableProduct={handleEnableProduct}
        deleteProduct={handleDeleteProduct}  />)}
        {activeTab === 'analytics' && <Analytics />}
    </div>
    </div>
    );
};


export default AdminPage;