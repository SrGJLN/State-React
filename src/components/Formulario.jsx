import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

const Formulario = ({setError}) => {

  const [name, setName] = useState ('')
  const [email, setEmail] = useState ('')
  const [pass, setPass] = useState ('')
  const [confirmpass, setConfirmPass] = useState ('')

  // const [error, setError] = useState(false)
 
  
  const confirmData = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || pass === '' || confirmpass === ''){
      setError(true);
      return;
    }setError(false);
    setName('');
    setEmail('');
    setPass('');
    setConfirmPass('');
  }

  
  return (
    <>
    <div>
      <Form onSubmit={confirmData} >
      {/* {error ? <p>Todos los campos son obligatorios</p> : null} */}
        <Form.Control className="mb-3"
          type="text"
          name="firstName"
          placeholder="Nombre"
          onChange={e => setName(e.target.value)}
          value = {name}
        />
        <Form.Group >
          <Form.Control className="mb-3"
            type="email"
            name="email"
            placeholder="email@ejemplo.com"
            onChange={e => setEmail(e.target.value)}
            value = {email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control className="mb-3"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={e => setPass(e.target.value)}
            value = {pass}
          />
          <Form.Control className="mb-3"
            type="password"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"  
            onChange={e => setConfirmPass(e.target.value)}
            value = {confirmpass}
          />
        </Form.Group>
          <Button type='submit' variant="success"  className='w-100 mb-2'>
            Registrarse
          </Button>
          
          
          
          
        </Form>
    </div>

    </>
  );
};

export default Formulario;