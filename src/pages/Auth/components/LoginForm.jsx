import { KeyRound, Mail } from "lucide-react";
import { useState } from "react";
import FormContainer from "../../../components/FormContainer";
import { URLDB } from "../../../config/api";
import React from "react";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
   if (e && e.preventDefault) e.preventDefault();
   
   try {
     const response = await fetch(`${URLDB}/auth/login`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         email: email,
         password: password
       }),
     });
     const data = await response.json();
     console.log('Login response:', data);
     if (!response.ok) {
       console.error('Login failed:', data);
       // handle failure (show message, etc.)
     } else {
       // handle success (store token, redirect, etc.)
       console.log('Login successful');
     }
   } catch (error) {
     console.error('Network error during login:', error);
   }
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const fields = [
    {
      name: 'email',
      label: 'Ingrese su correo',
      icon: Mail,
      value: email,
      onChange: setEmail,
      type: 'email',
      placeholder: 'Ej.: 2XN0a@example.com',
    },
    {
      name: 'password',
      label: 'Ingrese su contraseña',
      icon: KeyRound,
      value: password,
      onChange: setPassword,
      type: 'password',
      placeholder: 'Ej.: 123456',
    },
  ];

  return (
    <FormContainer title="Iniciar sesión" fields={fields} onSubmit={handleSubmit} submitLabel="Iniciar sesion" />
  );
}

export default LoginPage
