import React from "react";
import { Mail,UserIcon } from "lucide-react";
import FormContainer from "../components/FormContainer";

const Contact = () => {
    const fields = [
    {
        name: "nombre",
        label: "Nombre:",
        icon: UserIcon,
        type: "text",
        placeholder: "Ingresa tu nombre",
    },
    {
        name: "email",
        label: "Correo electrónico:",
        icon: Mail,
        type: "email",
        placeholder: "Ingrese su correo",
    },
    {
        name: "mensaje",
        label: "Mensaje:",
        type: "textarea",
        placeholder: "Escriba su mensaje aquí...",
        rows: 5,
    },
    ];

    return (
    <div className=" bg-white p-8">
        <div className="flex justify-center items-start">
        <FormContainer
            title="Envíanos un mensaje"
            subtitle="Completa el siguiente formulario y nos pondremos en contacto contigo."
            fields={fields}
            submitLabel="Enviar"
        />
        <div className="mt-35 text-gray-800">
            <p>
            <strong>Dirección:</strong>
            </p>
            <p>Av Varela 2836, CABA</p>
            <p>
            <a
                href="mailto:tecnoPro@gmail.com"
                className="text-blue-500 underline"
            >
                tecnopro@gmail.com
            </a>
            </p>
            <p>1160010594</p>
        </div>
        </div>
    </div>
    );
};

export default Contact;