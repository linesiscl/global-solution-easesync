import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 

function Nav() {
  // Hook - useState
  const [userLogado, setUserLogado] = useState(JSON.parse(sessionStorage.getItem('usuarioLogado')));

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem('usuarioLogado');
    // Set userLogado to null to update the component state
    setUserLogado(null);
  };

  return (
    <header>
      <img src="../src/assets/images/wind.svg" alt="desenho de vento" className="logo" />
      <h1>EaseSync</h1>
      <h3>Global Solutions 2023 - Engenharia de Software</h3>

      <div className='user-info' style={userLogado == null ? { display: 'none' } : { display: 'block' }}>
    <p className='usuario'>
        {userLogado != null ? `Usuario Logado : ${userLogado.usuario} ` : ""}
    </p>
    <p className='usuario'>
        {userLogado != null ? `E-mail : ${userLogado.email} ` : ""}
    </p>
        <Link to="/login">
          <button onClick={handleLogout} className="custom-button">Logout</button>
        </Link>
      </div>
      <Link to="/"><button className="custom-button">Home</button></Link>
      <Link to="/login"><button className="custom-button">Login</button></Link>
    </header>
  );
}

export default Nav;
