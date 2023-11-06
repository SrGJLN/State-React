import React from 'react';


const Alert = ({ msg, bad}) => {
  return (
    <div className={bad ? "error" : "exito"}>
      {msg}
    </div>
  );
}

export default Alert;