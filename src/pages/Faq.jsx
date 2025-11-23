import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
    return (
    <div className="flex flex-col w-7xl ml-100 justify-center items-center bg-white p-8 min-h-screen"> 
        <h3 className="text-3xl mb-6 font-bold text-center">Preguntas Frecuentes</h3>
        <div className="space-y-4 text-gray-800">
            <h4 className="text-xl font-semibold">1. ¿Cómo puedo realizar una compra?</h4>
            <p>Para realizar un pedido, simplemente navega por nuestro catálogo de productos, selecciona los artículos que deseas comprar y agrégalos a tu carrito. Luego, procede al pago siguiendo las instrucciones en pantalla.</p>
            <h4 className="text-xl font-semibold">2. ¿Cuáles son los métodos de pago aceptados?</h4>
            <ol>
                <li><p><strong>Mercado Pago</strong>:Hasta <strong>6 cuotas sin interés </strong>, podés utilizar las siguientes tarjetas de crédito: Visa, Mastercard o American Express .</p></li>
                <li><p>Tambien recibimos otras billeteras virtuales como <strong>Ualá,Brubank,Modo</strong> entre otros</p></li>
            </ol>
            <p>podés utilizar tu tarjeta de débito de cualquier Banco, siempre y cuando sean: Visa, Mastercard, Maestro o Cabal.</p>
            <h4 className="text-xl font-semibold">3. ¿Cuál es el tiempo de entrega?</h4>
            <p>El tiempo de entrega varía según tu ubicación y el método de envío seleccionado. Por lo general, los pedidos se entregan entre 3 y 7 dias hábiles.</p>
            <h4 className="text-xl font-semibold">4.¿Puedo cambiar los productos adquiridos?</h4>
            <p>Todos los productos adquiridos , posean sus etiquetas correspondientes y tengan el embalaje original, podrán cambiarse en el local y deberán presentar el ticket o factura que acompaña la compra, el plazo es de 30 días contados a partir de la entrega del producto, se tomara como referencia el valor de compra.</p>
            <h4 className="text-xl font-semibold">5. ¿Puedo devolver un producto?</h4>
            <p>Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que el producto esté en su estado original y sin daños.</p>
            <h4 className="text-xl font-semibold">6. Tengo problemas para efectuar el pago con tarjeta.</h4>
            <p>Existen diferentes motivos por los que un pago puede ser rechazado: pueden existir razones de seguridad, solicitud no aprobada o incluso insuficiencia de fondos. Podes comunicarte con tu institución financiera para realizar una consulta, escribirnos a cualquiera de los canales que tenemos a disposición o comunicarte directamente a través de nuestro botón de <Link to="/contact">[Contacto]</Link> o vía Whatsapp.</p>
            <h4 className="text-xl font-semibold">7. ¿Cómo puedo contactar al servicio al cliente?</h4>
            <p>Puedes contactarnos a través de nuestro formulario de <Link to="/contact">[Contacto]</Link> en la página de  o enviando un correo electrónico a TecnoPro@gmail.com</p>
    </div>
    </div>
    )}

export default Faq;