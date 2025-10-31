import React from 'react'
import '../css/Productos.css'
import img_1 from '/public/images/Macbook.png'
import img_2 from '/public/images/aorus.png'
import img_3 from '/public/images/Notebook_asus.png'
import img_4 from '/public/images/Notebook_del_gobierno.png'

const Notebook = () => {
  return (
    <>
    <h1 className='titulo-computadoras'>Notebook en Stock</h1>
    <section className='productos-computadoras'>
                    <div className='contenedor-product'>
                    <h2 className='subtitulo'>MacBook</h2>
                    <p>Macbook Pro 16 M4 Pro (512gb Ssd) 24gb Ram - Space Black</p>
                    <p>precio: 1500$</p>
                    <img
                        src={img_1}
                        alt="img no disponible" 
                    />
                    <button className='agregarCarrito'>Agregar al Carrito</button>
                    </div>
                    <div className='contenedor-product-2'>
                    <h2>notebook aorus</h2>
                    <p>Aorus 15.6 Ips I7-12700h 16gb Rtx 3070 512gb Ssd Color Negro</p>
                    <p>precio: 400$</p>
                    <img 
                        src={img_2}
                        alt="img no disponible" 
                    />
                    <button className='agregarCarrito'>Agregar al Carrito</button>
                    </div>
                    <div className='contenedor-product'>
                    <h2>Notebook Asus</h2>
                    <p>Asus Vivobook 17.3'' Ryzen 7, 16GB RAM, 1TB SSD, Windows 11, Negro</p>
                    <p>precio: 500$</p>
                    <img 
                        src={img_3}
                        alt="img no disponible" 
                    />
                    <button className='agregarCarrito'>Agregar al Carrito</button>
                    </div>
                    <div className='contenedor-product-2'>
                    <h2>Notebook del gobierno</h2>
                    <p>Conectar Igualdad G4 Intel Atom N2600, 2 GB de memoria RAM DDR3 y un disco rÃ­gido de 320 GB</p>
                    <p>precio: 3$</p>
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

export default Notebook