import React, { useState } from "react";
import SignUpPage from "../components/AccountPage/SignUp";
import LoginPage from "../components/AccountPage/Login";

// Componente MiAccount mejorado con más funcionalidades
function MiAccount() {
  // Estado para alternar entre Login y SignUp
const [isLogin, setIsLogin] = useState(true);

  // Función para alternar vistas
const toggleView = () => {
    setIsLogin(!isLogin);
};

  // Estado para manejar mensajes de éxito o error (opcional, para feedback)
const [message, setMessage] = useState("");

  // Función para manejar el éxito del login/signup (se podria conectar con un contexto de auth)
const handleSuccess = (type) => {
    setMessage(`${type} exitoso. Redirigiendo...`);
    // Aca se puede redirigir a otra página, usando React Router: history.push('/dashboard');
    setTimeout(() => setMessage(""), 3000); // Limpiar mensaje después de 3 segundos
};

return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Mi Cuenta</h1>
        <p className="text-gray-600">Inicia sesión o regístrate</p>
        <div className="flex justify-center mt-4">
            <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded-l-lg ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
            Iniciar Sesión
            </button>
            <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded-r-lg ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
            Registrarse
            </button>
        </div>
        </div>

        {/* Mostrar mensaje de feedback */}
        {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
            {message}
        </div>
        )}

        {/* Renderizar el componente activo */}
        {isLogin ? (
        <LoginPage onSuccess={() => handleSuccess("Login")} />
        ) : (
        <SignUpPage onSuccess={() => handleSuccess("Registro")} />
        )}

        <div className="text-center mt-6 text-sm text-gray-500">
            <p>¿Olvidaste tu contraseña? <a href="#" className="text-blue-500">Recupérala aquí</a></p>
        </div>
    </div>
    </div>
);
}

export default MiAccount;
