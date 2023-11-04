import Register from "./components/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

import './App.css';

function App() {
  const [error, setError] = useState(false)
  return (
    <>
      <div className="container">  
        <Register 
        error={error}
        setError={setError}/>
      </div>
    </>
  );
}

export default App;