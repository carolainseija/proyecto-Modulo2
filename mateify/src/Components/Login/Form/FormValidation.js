import React, { useState } from "react";
import "../Form/FormValidation.css";
import { Button, IconButton, Input } from "@material-ui/core";

export const FormValidation = (props) => {
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
      <div className="containerInput">
      <Input
        className="root"
        placeholder="Correo Electronico"
        type="email"
        onChange={mostrarTextoIngresado}
        value={valorDelInput}
      />
      </div>
     <div className="containerInput">
     <Input
        className="root"
        placeholder="contraseña"
        type="password"
        onChange={mostrarTextoIngresadoemail}
        value={valorDelInputemail}
      />
     </div>
     
      <div class="btn-login" onClick={mostrarAlert}>
        <IconButton iconClassName="btn-login center muidocs-icon-custom-github" />{" "}
        COMIENZAR A CREAR PLAYLISTS
      </div>
    </div>
  );
};
