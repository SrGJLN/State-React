import Badge from 'react-bootstrap/Badge';
function Watchful({error}) {
  return (
    <>
    <div className="alerta">
    <Badge bg="danger">{ error ? 'Debe de completar los datos' : null}</Badge>
          {/* { error ? 'debe de completar los datos' : null} */}
    </div>
    </>
  );
}

export default Watchful;