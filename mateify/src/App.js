import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [valorDelInputemail, setValorDelInputemail] = useState("");

  const mostrarAlert = (evento) => {
    if (valorDelInput === "hola" && valorDelInputemail === "chau") {
      alert(valorDelInput + valorDelInputemail + "CORRECTO");
    } else {
      alert("usuario y/o contraseña incorrecta");
    }
  };

  const mostrarTextoIngresado = (evento) => {
    setValorDelInput(evento.target.value);
  };
  const mostrarTextoIngresadoemail = (evento) => {
    setValorDelInputemail(evento.target.value);
  };

  return (
    <div>
      (
      <div>
        <button onClick={mostrarAlert}>Mostrar alert</button>
        <input
          type="email"
          onChange={mostrarTextoIngresado}
          value={valorDelInput}
        />
        <input
          type="password"
          onChange={mostrarTextoIngresadoemail}
          value={valorDelInputemail}
        />
      </div>
      )
    </div>
  );
};

export default App;
