import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return ( <>
    <footer id="link" className="flex flex-col justify-around bg-black text-white md:flex-row py-10 sm:flex-col sm:items-center sm:h-auto">
        <div className="flex flex-col items-center md:items-start">
            <p className='text-5xl text-red-500 font-bold'>TecnoPro</p>
            <p className="font-semibold text-lg mt-5 "> SUSCRIBITE</p>
            <label htmlFor="">
                <input type="email" placeholder="Ingresa tu email" className="p-2  text-white border-1"/>
                <button className="bg-black  p-2  hover:bg-white hover:text-black border-1">Suscribirse</button>
            </label>
        </div>
        <div className="flex flex-col md:items-start items-center">
            <p className="font-semibold text-lg mt-3 text-red-500">SEGUINOS</p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Instagram</a>
        </div>
        <div className="flex flex-col md:items-start items-center">
            <p className="text-lg font-semibold text-red-500">INFORMACION</p>
            <Link className="hover:text-gray-400 mx-2" to="/contact">Contacto</Link>
            <Link to="/termsaconditions" className="hover:text-gray-400 mx-2">Términos y Condiciones</Link>
            <Link to="/faq" className="hover:text-gray-400 mx-2">Preguntas Frecuentes</Link>
        </div>
    </footer>
    <div className="text-center bg-white text-black py-4 text-sm">
        <p>&copy; {new Date().getFullYear()} TecnoPro. Todos los derechos reservados.</p>
    </div>
    </>
);
}

export default Footer;