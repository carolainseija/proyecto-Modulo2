import React, { useState } from "react";
import { NavBar } from "../Components/NavBar/NavBar";

import { SearchAndIcon } from "../Components/Search/SearcAndIcon";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


  /*representa el Json */

const cancion = [
  {
    uuid: "1",
    name: "Clara",
    album: "NumeroCuatro",
    duration: "3:15",
    artist: {
      name: "NTVG"
    }
  },
  {
    uuid: "2",
    name: "El viejo",
    album: "NumeroCuatro",
    duration: "3:20",
    artist: {
      name: "La vela"
    }
  },
  {
    uuid: "3",
    name: "Hoy estoy raro",
    album: "NumeroCuatro",
    duration: "3:00",
    artist: {
      name: "El cuarteto"
    }
  }
];

export const CreatorPlayList = (props) => {
  const classes = useStyles();
  /*states */
  const [inputValue, setInputValue] = useState("");
  const [listaFiltrada, setListaFiltrada] = useState([]);
  const [count, setCount] = useState(0);
  

      
  /*onChange */
  const handleInputChange = (e) => {
    console.log("Se ejecuta handleInputChange y actualiza el inputValue");
    setInputValue(e.target.value);
  };

  const filtrarCanciones = (cancion) => {
    console.log("Se ejecuta filtrarCanciones");
    console.log("Valor del input: ");
    console.log(inputValue);
    console.log("Canción: ");
    console.log(cancion);

    // Aca filtro las canciones que coinciden con la busqueda
    if (cancion.name.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  };

  /*evento al presionar Tecla enter */
  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Se ejecuta el handleInputKeyPress");

      // primero me quedo con los resultyados filtrados
      const resultados = cancion.filter(filtrarCanciones);
      console.log("Tenemos el array con los resultados filtrados:");
      console.log(resultados);

      // despues actualizo el estado con esos resultados pora poder mostrarlos en el render
      setListaFiltrada(resultados);
      console.log("Se actualiza el estado de las canciones a mostrar");
      console.log(resultados);
    }
  };

  /*ebento OnClick en el boton para agregar a la Playlist */
  const handleAgregarClick = (e, cancion) => {
    console.log("Se ejecuta el handleAgregarClick");
    console.log("Me llega la cancion");
   
  };


  return (
    <div>
      <NavBar nameLogo="Mateify" />

      <SearchAndIcon />
      <input
      onChange={handleInputChange}
      placeholder="Busca la canción que te gustaría escuchar"
      onKeyPress={handleInputKeyPress}
      value={inputValue}
    />
    <div>
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
       
        <TableHead>
          Resultados
        </TableHead>

        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Artista</TableCell>
            <TableCell align="center">Album</TableCell>
            <TableCell align="center">Duracion</TableCell>
          <TableCell align="center" >Agregar</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {
          // recorro la lista filtrada que tengo en el estado
          listaFiltrada.map((resultados) =>(
            <TableRow  key={resultados.uuid}>
            {/*Esta es la tabla que debe aparecer si se encuentra un archivo */}
             <TableCell align="center">{resultados.name}</TableCell>
             <TableCell align="center">{resultados.artist.name}</TableCell>
             <TableCell align="center">{resultados.album}</TableCell>
             <TableCell align="center">{resultados.duration}</TableCell>
             <TableCell align="center"> <button onClick={(e) => handleAgregarClick(e, cancion)}>
                <AddCircleRoundedIcon/>
              </button></TableCell>
             </TableRow>
               ))
        }
       
        </TableBody>
        
      </Table>
    </TableContainer>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div>
      <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
       
       <TableHead>
        Tu Playlist
       </TableHead>
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Artista</TableCell>
            <TableCell align="center">Album</TableCell>
            <TableCell align="center">Duracion</TableCell>
          <TableCell align="center" >Votar</TableCell>
          </TableRow>
        </TableHead>

          <TableBody>
            
          <TableRow>
            {/*Esta es la tabla que debe aparecer si se encuentra un archivo */}
            <TableCell align="center"></TableCell>
             <TableCell align="center"></TableCell>
             <TableCell align="center"></TableCell>
             <TableCell align="center">{count}</TableCell>
             <TableCell align="center"><ThumbDownAltIcon onClick={() => setCount(count - 1)}/> <ThumbUpAltIcon onClick={() => setCount(count + 1)}/>  </TableCell>
             </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
  );
};
