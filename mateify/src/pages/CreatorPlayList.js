import React, { useState } from "react";
import { NavBar } from "../Components/NavBar/NavBar";
import { Grid } from "@material-ui/core";
import { SearchAndIcon } from "../Components/Search/SearcAndIcon";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import cancion from "../Components/Funcionalidad/DateSongJson.json";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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

      // primero me quedo con los resultados filtrados
      const resultados = cancion.filter(filtrarCanciones);
      console.log("Tenemos el array con los resultados filtrados:");
      console.log(resultados);

      // despues actualizo el estado con esos resultados pora poder mostrarlos en el render
      setListaFiltrada(resultados);
      console.log("Se actualiza el estado de las canciones a mostrar");
      console.log(resultados);
    }
  };

  /*evento OnClick en el boton para agregar a la Playlist */
  const handleAgregarClick = (e, cancion) => {
    console.log("Se ejecuta el handleAgregarClick");
    console.log("Me llega la cancion");
    const cualClick = e.target;
    console.log(cualClick);
  };

  //Evento onClick para dislike y likes
  const countDislike = () => {
    setCount(count - 1);
  };
  const countLike = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <NavBar nameLogo="Mateify" />

      <Grid item xs={12} md={12} lg={12} lx={12} className="grid centrar">
        <SearchAndIcon
          onChange={handleInputChange}
          placeholder="Buscar"
          onKeyPress={handleInputKeyPress}
          value={inputValue}
        />
      </Grid>

      <div>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>Resultados</TableHead>

            <TableHead>
              <TableRow>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Artista</TableCell>
                <TableCell align="center">Album</TableCell>
                <TableCell align="center">Duracion</TableCell>
                <TableCell align="center">Agregar</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {
                // recorro la lista filtrada que tengo en el estado
                listaFiltrada.map((resultados) => (
                  <TableRow key={resultados.uuid}>
                    {/*Esta es la tabla que debe aparecer si se encuentra un archivo */}
                    <TableCell align="center">{resultados.name}</TableCell>
                    <TableCell align="center">
                      {resultados.artist.name}
                    </TableCell>
                    <TableCell align="center">{resultados.album}</TableCell>
                    <TableCell align="center">{resultados.duration}</TableCell>
                    <TableCell align="center">
                      {" "}
                      <button onClick={(e) => handleAgregarClick(e, cancion)}>
                        <Fab size="small" color="secondary">
                          <AddIcon />
                        </Fab>
                      </button>
                    </TableCell>
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
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>Tu Playlist</TableHead>
            <TableHead>
              <TableRow>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Artista</TableCell>
                <TableCell align="center">Album</TableCell>
                <TableCell align="center">Duracion</TableCell>
                <TableCell align="center">Votar</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                {/*Esta es la tabla que debe aparecer si se encuentra un archivo */}
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">{count}</TableCell>
                <TableCell align="center">
                  <ThumbDownAltIcon onClick={countDislike} />{" "}
                  <ThumbUpAltIcon onClick={countLike} />{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
