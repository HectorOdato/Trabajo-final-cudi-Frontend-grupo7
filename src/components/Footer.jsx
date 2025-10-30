// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
    <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex items-center md:items-start justify-center md:justify-start">
            <p className='text-5xl text-red-500 font-bold'>TecnoPro</p>
        </div>
        <div className="text-center md:text-left">
            <ul className="space-y-2">
            <li>
                <a href="/sobre-nosotros" className="hover:text-white transition-colors duration-200">
                Sobre nosotros
                </a>
            </li>
            <li>
                <a href="/terminos-y-condiciones" className="hover:text-white transition-colors duration-200">
                Términos y condiciones
                </a>
            </li>
            <li>
                <a href="/politicas-de-privacidad" className="hover:text-white transition-colors duration-200">
                Políticas de privacidad
                </a>
            </li>
            <li>
                <a href="/politicas-de-devolucion" className="hover:text-white transition-colors duration-200">
                Políticas de devolución
                </a>
            </li>
            <li>
                <a href="/sucursales" className="hover:text-white transition-colors duration-200">
                Sucursales
                </a>
            </li>
            </ul>
        </div>
        <div className="text-center md:text-left">
            <ul className="space-y-2">
            <li>
                <a href="/preguntas-frecuentes" className="hover:text-white transition-colors duration-200">
                Preguntas frecuentes
                </a>
            </li>
            </ul>
        </div>
        </div>
        <div>
            <p>Todos los derechos reservados @2025</p>
        </div>
    </footer>
    );
};

export default Footer;