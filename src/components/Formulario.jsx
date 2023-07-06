import React, { useState } from "react";

const Formulario = ({ onFormSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("");
  const [edad, setEdad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ nombre, email, foto, edad });
    setNombre("");
    setEmail("");
    setFoto("");
    setEdad("");
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            URL foto:
            <input
              type="text"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Edad:
            <input
              type="number"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
