import React, {  } from 'react'
import '../css/Productos.css'
import img_1 from '/public/images/product_1.png'
import img_2 from '/public/images/product_2.png'
import img_3 from '/public/images/product_3.png'
import img_4 from '/public/images/product_4.png'

const Computadoras = () => {
return (
    <div className='computadoras-container'>
        <div className='computadoras-content-2'>
            <h1 className='titulo-computadoras'>Computadoras en Stock</h1>
            <section className='productos-computadoras'>
                <div className='contenedor-product'>
                <h2 className='subtitulo'>PC Gamer</h2>
                <p>PC Gamer AMD Rizen 5 Pro 3350 16GB de Ram 240GB SSD y 1TB HDD con Wifi</p>
                <p>precio: 200$</p>
                <img
                    src={img_1}
                    alt="img no disponible" 
                />
                <button className='agregarCarrito'>Agregar al Carrito</button>
                </div>
                <div className='contenedor-product-2'>
                <h2>PC Gamer</h2>
                <p>Computadora Gamer Xtreme PC Gaming CM-50095, AMD Ryzen 5 2600 3.40GHz, 16GB, 1TB + 240GB SSD, NVIDIA GeForce GTX 1650 ― Incluye Monitor 23.6"/Teclado/Mouse</p>
                <p>precio: 300$</p>
                <img 
                    src={img_2}
                    alt="img no disponible" 
                />
                <button className='agregarCarrito'>Agregar al Carrito</button>
                </div>
                <div className='contenedor-product'>
                <h2>PC Gamer</h2>
                <p>Computadora Gamer Xtreme PC Gaming CM-89100, Intel Core i5 9400F 2.90GHz, 16GB, 480GB SSD, NVIDIA GeForce GTX 1650 SUPER </p>
                <p>precio: 250$</p>
                <img 
                    src={img_3}
                    alt="img no disponible" 
                />
                <button className='agregarCarrito'>Agregar al Carrito</button>
                </div>
                <div className='contenedor-product-2'>
                <h2>PC Gamer</h2>
                <p>PC Computadora Gamer Intel Core i3-10100F 16GB DDR4 240GB SSD + 1TB HDD</p>
                <p>precio: 120$</p>
                <img 
                    src={img_4}
                    alt="img no disponible" 
                />
                <button className='agregarCarrito'>Agregar al Carrito</button>
                </div>
            </section>
        </div>
    </div>     
)
}

export default Computadoras