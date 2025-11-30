import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
    return (
    <div className="flex justify-center items-center min-h-screen bg-white">
    <div className="flex flex-col w-full justify-center items-center p-8 sm:w-2/5 md:w-3/5 lg:w-3/5 xl:w-3/5"> 
        <h3 className="text-3xl mb-6 font-bold text-center">Términos y Condiciones</h3>
        <div className="space-y-4 text-gray-800">
            <h4 className="text-xl font-semibold">1. Aceptación de los Términos</h4>
            <p>Bienvenido a TecnoPro. Al acceder y utilizar nuestro sitio web  y nuestros servicios, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguno de ellos, te recomendamos no utilizar nuestro sitio.</p>
            <h4 className="text-xl font-semibold">2. Uso del Sitio</h4>
            <p>En TecnoPro, nos esforzamos por mostrar con precisión los  detalles de nuestros productos. Sin embargo, ten en cuenta que la visualización puede variar según tu dispositivo o configuración de pantalla, y los productos pueden presentar pequeñas diferencias respecto a las imágenes mostrad</p>
            <h4 className="text-xl font-semibold">3. Registro y cuentas de usuario</h4>
            <p>Para realizar compras en TecnoPro, es posible que debas crear una cuenta. Eres responsable de mantener la confidencialidad de tu contraseña y de todas las actividades realizadas en tu cuenta. Debes notificarnos inmediatamente cualquier uso no autorizado.</p>
            <h4 className="text-xl font-semibold">4. Limitación de Responsabilidad</h4>
            <p>No seremos responsables por ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso o la imposibilidad de usar nuestro sitio web.</p>
            <h4 className="text-xl font-semibold">5. Modificaciones de los Términos</h4>
            <p>Al realizar un pedido, confirmas que todos los datos proporcionados son correctos. TecnoPro se reserva el derecho de rechazar cualquier pedido por motivos razonables, como errores en el precio o falta de disponibilidad del producto.
                Aceptamos los siguientes métodos de pago: [tarjetas de crédito/débito, MercadoPago, PayPal, etc.]. Los pagos se procesan de manera segura y confiable.</p>
            <h4 className="text-xl font-semibold">6. Modificaciones de los Términos</h4>
            <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en el sitio web. Su uso continuado del sitio después de la publicación de cambios constituye su aceptación de dichos cambios.</p>
            <h4 className="text-xl font-semibold">7. Garantia</h4>
            <p>Todos los productos de TecnoPro cuentan con garantía por defectos de fabricación. La garantía no cubre daños por uso indebido, desgaste de uso, accidentes o negligencia del cliente.</p>
            <h4 className="text-xl font-semibold">8. Contacto</h4>
            <p>Si tiene alguna pregunta o inquietud acerca de estos términos y condiciones, no dude en contactarnos a través de nuestro formulario de <Link to="/contact">[Contacto]</Link></p>
        </div>
    </div>
</div>
    )}

export default TermsAndConditions;