import React from 'react'
import '../css/Productos.css'
import img_1 from '/public/images/Smart_TV_BGH.png'
import img_2 from '/public/images/Smart_tv_Philips.png'
import img_3 from '/public/images/Smart_TV_TCL.png'
import img_4 from '/public/images/tvbanner.webp'

const Televisores = () => {
  return (
    <>
        <h1 className='titulo-computadoras'>Smart TV en Stock</h1>
        <section className='productos-computadoras'>
                        <div className='contenedor-product'>
                        <h2 className='subtitulo'>Smart TV Led</h2>
                        <p>Smart Tv Led Hd 32 Bgh Vidaa B3225h5 (4 GB) HD de 1366 x 768 px y RAM 1 GB</p>
                        <p>precio: 200$</p>
                        <img
                            src={img_1}
                            alt="img no disponible" 
                        />
                        <button className='agregarCarrito'>Agregar al Carrito</button>
                        </div>
                        <div className='contenedor-product-2'>
                        <h2>Smart TV Philips</h2>
                        <p>Smart Tv de 43 Pulgada 43pfd6929/77 Led Full Hd Philips (4 GB) Full HD 1920 x 1080 px y RAM 1 GB</p>
                        <p>precio: 300$</p>
                        <img 
                            src={img_2}
                            alt="img no disponible" 
                        />
                        <button className='agregarCarrito'>Agregar al Carrito</button>
                        </div>
                        <div className='contenedor-product'>
                        <h2>Smart TV TCL</h2>
                        <p>Smart Tv 43 L43S5400 Android TV (8 GB)  Full HD 1920x1080 con HDR y RAM 2 GB </p>
                        <p>precio: 250$</p>
                        <img 
                            src={img_3}
                            alt="img no disponible" 
                        />
                        <button className='agregarCarrito'>Agregar al Carrito</button>
                        </div>
                        <div className='contenedor-product-2'>
                        <h2>Smart TV Samsung</h2>
                        <p>Smart Led Tv Samsung 50" (8 GB)   Uhd 4K 3840 X 2160 RAM 2GB</p>
                        <p>precio: 120$</p>
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

export default Televisores