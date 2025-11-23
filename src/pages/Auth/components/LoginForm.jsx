import { KeyRound, Mail } from "lucide-react";
import { useState } from "react";
import FormContainer from "../../../components/FormContainer";
import { URLDB } from "../../../config/api";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${URLDB}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (!response.ok) {
        setErrorMsg(data.mensaje || "Email o contraseña incorrectos");
        return;
      }

      // Guardar tokens
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      // Redirigir al home
      navigate("/");

    } catch (error) {
      console.error("Network error:", error);
      setErrorMsg("Error en el servidor");
    }
  };

  const fields = [
    {
      name: "email",
      label: "Ingrese su correo",
      icon: Mail,
      value: email,
      onChange: setEmail,
      type: "email",
      placeholder: "Ej.: usuario@example.com",
    },
    {
      name: "password",
      label: "Ingrese su contraseña",
      icon: KeyRound,
      value: password,
      onChange: setPassword,
      type: "password",
      placeholder: "•••••••",
    },
  ];

  return (
    <>
      {errorMsg && <p style={{ color: "red", textAlign: "center" }}>{errorMsg}</p>}
      <FormContainer
        title="Iniciar sesión"
        fields={fields}
        onSubmit={handleSubmit}
        submitLabel="Iniciar sesión"
      />
    </>
  );
};

export default LoginPage;

