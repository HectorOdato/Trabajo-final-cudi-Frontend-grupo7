import { useState } from 'react';
import { KeyRound, Mail, Smartphone, UserIcon } from 'lucide-react';
import FormContainer from "../../../components/FormContainer";
import { URLDB } from "../../../config/api";

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Name:', name);
    console.log('LastName:', lastName);
    console.log('Phone:', phone);

    try {
      const response = await fetch(`${URLDB}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          lastName: lastName,
          phone: phone,
          email: email,
          password: password
        }),
      });

      const data = await response.json();
      console.log('Signup response:', data);

      if (!response.ok) {
        console.error('Signup failed:', response.status, data);
      }
    } catch (error) {
      console.error('Network error during signup:', error);
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
      name: 'lastName',
      label: 'Ingrese su apellido',
      icon: UserIcon,
      value: lastName,
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
