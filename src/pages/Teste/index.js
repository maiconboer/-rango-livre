import React from 'react';
import { Link } from 'react-router-dom'

const Teste= () => {
  return (
    <>
      <h1>Página teste</h1>
      <h2>só autenticado</h2>
      <Link to="/dashboard">Teste</Link>
    </>
  );
};

export default Teste;
