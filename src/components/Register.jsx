// import SocialButton from './SocialButton'
import Formulario from './Formulario'
import Watchful from './Alert'

const Register = ({error, setError}) => {
  
  return (
    <>
    <div>
      <h1 style={{ paddingTop: '20px' }}>
      Crea una cuenta
      </h1>
    
    {/* <SocialButton 
    face={<BsFacebook /> }
    git={<BsGithub />} 
    link={<FaLinkedinIn />}
    /> */}
    <p>O usa tu email para registrarte</p>
        <Formulario
        setError={setError} />
        <Watchful 
        error = {error}/>
    </div>


    </>
  )
}

export default Register