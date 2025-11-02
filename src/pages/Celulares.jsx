import React from 'react'
import '../css/Productos.css'
import img_1 from '/public/images/Samsung_Pocket_Neo.png'
import img_2 from '/public/images/Iphone_16_PRO.png'
import img_3 from '/public/images/Iphone_16.png'
import img_4 from '/public/images/OIP.webp'

const Celulares = () => {
    return (
    <>
        <h1 className='titulo-computadoras'>Celulares en Stock</h1>
        <section className='productos-computadoras'>
                        <div className='contenedor-product'>
                        <h2 className='subtitulo'>Samsung Pocket</h2>
                        <p>Samsung Mini Pocket (3 GB) RAM 256 MB Procesador Broadcom BCM21553 Camara trasera 2 Mpx</p>
                        <p>precio: 10$</p>
                        <img
                            src={img_1}
                            alt="img no disponible" 
                        />
                        <button className='agregarCarrito'>Agregar al Carrito</button>
                        </div>
                        <div className='contenedor-product-2'>
                        <h2>Apple iPhone 16 Pro</h2>
                        <p>Apple iPhone 16 Pro (128 GB) RAM 8 GB procesador A18 Resolución de las cámaras traseras 48 Mpx/48 Mpx/12 M - Titanio natural</p>
                        <p>precio: 700$</p>
                        <img 
                            src={img_2}
                            alt="img no disponible" 
                        />
                        <button className='agregarCarrito'>Agregar al Carrito</button>
                        </div>
                        <div className='contenedor-product'>
                        <h2>Apple iPhone 16</h2>
                        <p>Apple iPhone 16 (128 GB) RAM 8 procesador A18 cámara trasera principal 48 Mpx - Rosa</p>
                        <p>precio: 500$</p>
                        <img 
                            src={img_3}
                            alt="img no disponible" 
                        />
                        <button className='agregarCarrito'>Agregar al Carrito</button>
                        </div>
                        <div className='contenedor-product-2'>
                        <h2>Motorola 40 EGDE</h2>
                        <p>Motorola 40 EGDE 256gb/8gb de ram con 50px de camara principal y 30px de camara frontal con android 14</p>
                        <p>precio: 250$</p>
                        <img 
                            src={img_4}
                            alt="img no disponible" 
                        />
                        <button className='agregarCarrito'>Agregar al Carrito</button>
                        </div>
                    </section>
        </>
  )
}

export default Celulares