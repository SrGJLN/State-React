import React from 'react';


const SocialButton = ({ icon }) => {
  return (
    <button className="icons" style={{ width: '50px', height: '50px', border: '1px solid #777' }}>
    {icon}
  </button>
  );
}

export default SocialButton;