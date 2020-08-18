import React, { useState } from "react";
import "../Form/FormValidation.css";
import { Button, IconButton, Input } from "@material-ui/core";
//importo el json para filtrar
import DateUserJson from '../Funcionalidad/DateUserJson.json';
import { BrowserRouter as Router,useHistory} from "react-router-dom";
import {PlaylistNoLogin} from '../../Components/PagesCondicional/PlaylistNoLogin';


//const principal que abarca todo con funcion flecha
export const FormValidation = (props) => {

  const history = useHistory();
  
  //states iniciados "vacios" para que no haya nada en los inputs
  const [valorDelInput, setValorDelInput] = useState("");
  const [valorDelInputcontraseña, setValorDelInputcontraseña] = useState("");

 //onChange evento de los inputs
const mostrarTextoIngresado = (evento) => {
  setValorDelInput(evento.target.value);
};
const mostrarTextoIngresadocontraseña = (evento) => {
  setValorDelInputcontraseña(evento.target.value);
};


  const chequeaUsuarios = (element) => {
    //element.email y passw del json. mostrartexto es el valor  "state actual"
      if (element.email === valorDelInput && element.password === valorDelInputcontraseña) {
          return true;
      } else {
          return false;
      }
  }; 
  
  //OnClick evento
  const validaUsuario = () => {
    const FilterUser = DateUserJson.filter(chequeaUsuarios);
    console.log(FilterUser);
    if (FilterUser.length > 0){
      history.push(`/CreatePlayList/`)
    }else {
      history.push(`/PlaylistNoLogin/`)
    }
  }


  

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
        onChange={mostrarTextoIngresadocontraseña}
        value={valorDelInputcontraseña}
      />
     </div>
     
      <div class="btn-login" onClick={validaUsuario}>
        <IconButton iconClassName="btn-login center muidocs-icon-custom-github" />{" "}
        COMIENZAR A CREAR PLAYLISTS
      </div>
    </div>
  );
};


