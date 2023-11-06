import React, { useState } from 'react';
import Alert from './Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || pass === '' || confirmPass === '') {
      setError(true);
      setErrorMsg("Completa todos los campos!")
      return;
    }
    if (pass !== confirmPass){
      setError(true);
      setErrorMsg("Las contraseñas deben ser iguales")
      return;
    }
  
    setError(false);
    setErrorMsg("Registro satisfactorio");
    setName('');
    setEmail('');
    setPass('');
    setConfirmPass('');
  };

  return (
    <>
      <Form className="formulario" onSubmit={validarDatos}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <input
            type='email'
            name="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="pass"
            className="form-control"
            placeholder="Contraseña"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPass"
            className="form-control"
            placeholder="Confirmar Contraseña"
            onChange={(e) => setConfirmPass(e.target.value)}
            value={confirmPass}
          />
        </div>
        
        <Button type="submit" className="btn btn-success btn-lg btn-block">
          Registrarse
        </Button>
        {errorMsg && <Alert msg= {errorMsg} bad={error}></Alert>}
      </Form>
    </>
  );
}

export default Formulario;