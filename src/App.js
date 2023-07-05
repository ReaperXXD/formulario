import React, { useState } from "react";
import Head from "./components/Head";
import Formulario from "./components/Formulario";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
    setEmail(data.email);
  };

  return (
    <div className="container">
      <div className="white-square">
        <Head email={email} />
        <Formulario onFormSubmit={handleFormSubmit} />
        {userData && <Card data={userData} />}
      </div>
    </div>
  );
};

export default App;
