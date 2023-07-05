import React from "react";

const Card = ({ data }) => {
  const { nombre, email, foto, edad } = data;

  return (
    <div>
      <h2>Datos del Usuario</h2>
      <p>Nombre: {nombre}</p>
      <p>Email: {email}</p>
      {foto && <img src={foto} alt="Foto" style={{ maxWidth: "100%" }} />}
      <p>Edad: {edad}</p>
    </div>
  );
};

export default Card;
