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
import Hidden from "@material-ui/core/Hidden";
import cancion from "../Components/Funcionalidad/DateSongJson.json";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  btniconagregar: {
    borderRadius: 50,
    fontSize: 10,
  },
  divTableTwo: {
    marginTop: 100,
  },
});

export const CreatorPlayList = (props) => {
  const classes = useStyles();
  /*states */
  const [inputValue, setInputValue] = useState("");
  const [listaFiltrada, setListaFiltrada] = useState([]);
  const [tuPlaylist, settuPlaylist] = useState([]);
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
  const handleAgregarClick = (newSong) => {
    //copio la cancion que le doy click con los ...
    settuPlaylist([...tuPlaylist, newSong]);
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
      <Grid container>
        <Grid item xs={12} md={12} lg={12} lx={12} className="grid centrar">
          <NavBar nameLogo="Mateify" />
        </Grid>
        <Grid item xs={12} md={12} lg={12} lx={12} className="grid centrar">
          <SearchAndIcon
            onChange={handleInputChange}
            placeholder="Buscar"
            onKeyPress={handleInputKeyPress}
            value={inputValue}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12} lx={12} className="grid centrar">
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
                    <Hidden mdDown>
                      <TableCell align="center">Album</TableCell>
                    </Hidden>
                    <Hidden mdDown>
                      <TableCell align="center">Duracion</TableCell>
                    </Hidden>
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
                        <Hidden smDown>
                          <TableCell align="center">
                            {resultados.album}
                          </TableCell>
                        </Hidden>
                        <Hidden mdDown>
                          <TableCell align="center">
                            {resultados.duration}
                          </TableCell>
                        </Hidden>
                        <TableCell align="center">
                          {" "}
                          <AddCircleRoundedIcon
                            onClick={(e) => handleAgregarClick(resultados)}
                            color="secondary"
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className={classes.divTableTwo}>
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
                    <Hidden mdDown>
                      <TableCell align="center">Album</TableCell>
                    </Hidden>
                    <Hidden mdDown>
                      <TableCell align="center">Cant.Votos</TableCell>
                    </Hidden>
                    <TableCell align="center">Votar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tuPlaylist.map((resultados) => (
                    <TableRow key={resultados.uuid}>
                      {/*Esta es la tabla que debe aparecer si se encuentra un archivo */}
                      <TableCell align="center">{resultados.name}</TableCell>
                      <TableCell align="center">
                        {resultados.artist.name}
                      </TableCell>
                      <Hidden mdDown>
                        <TableCell align="center">{resultados.album}</TableCell>
                      </Hidden>
                      <Hidden mdDown>
                        <TableCell align="center">{count}</TableCell>
                      </Hidden>
                      <TableCell align="center">
                        <ThumbDownAltIcon onClick={countDislike} />{" "}
                        <ThumbUpAltIcon onClick={countLike} />{" "}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
