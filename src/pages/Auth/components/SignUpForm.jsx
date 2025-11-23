import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyRound, Mail, Smartphone, UserIcon } from 'lucide-react';
import FormContainer from "../../../components/FormContainer";
import { API_URL} from "../../../config/api";

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    // soporta phone como string/number o como event ({ target: { value } })
    const rawPhone =
      phone && typeof phone === "object" && phone.target
        ? phone.target.value
        : phone;

    // normalizar: quitar todo lo que no sea dígito
    const digits = rawPhone ? String(rawPhone).replace(/\D/g, "") : "";
    const phoneNumber = digits ? Number(digits) : null;

    const payload = {
        name: name,
        lastname: lastname,
        phone: phoneNumber,
        email: email,
        password: password,
      };


    console.log("Signup payload:", payload, "rawPhone:", rawPhone);

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await response.text();
      let data = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch  {
        data = text;
      }

      console.log("Signup response status:", response.status, "body:", data);

      if (response.ok) {

        // Guardar token en localStorage
        localStorage.setItem("token", data.token);

        console.log("Usuario registrado con éxito");
        navigate('/');
        return;
      }

      if (!response.ok) {
        console.error("Signup failed:", response.status, data);
        return;
      }

      console.log("Signup success:", data);
      // redirigir o limpiar formulario
    } catch (error) {
      console.error("Network error during signup:", error);
    }
  };

  const fields = [
    {
      name: 'name',
      label: 'Ingrese su nombre',
      icon: UserIcon,
      value: name,
      onChange: setName,
      type: 'text',
      placeholder: 'Ej.: Juan',
    },
    {
      name: 'lastname',
      label: 'Ingrese su apellido',
      icon: UserIcon,
      value: lastname,
      onChange: setLastName,
      type: 'text',
      placeholder: 'Ej.: Perez',
    },
    {
      name: 'phone',
      label: 'Ingrese su telefono',
      icon: Smartphone,
      value: phone,
      onChange: setPhone,
      type: 'number',
      placeholder: 'Ej.: 123456789',
    },
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
    <FormContainer
      title="Crear cuenta"
      fields={fields}
      onSubmit={handleSubmit}
      submitLabel="Registrarse"
    />
  );
};

export default SignUpPage;
