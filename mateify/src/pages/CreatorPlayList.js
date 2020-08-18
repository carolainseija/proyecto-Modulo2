import React from 'react';
import {NavBar} from '../Components/NavBar/NavBar';


import {SearchAndIcon} from '../Components/Search/SearcAndIcon';
import {TableSimple} from '../Components/Table/TableSimple';


export const CreatorPlayList = (props) => {
    return (
        <div>
             <NavBar
       nameLogo="Mateify" />

           <SearchAndIcon />
{/* <TableSimple
         TitleHeadTable=""
           descriptionOne=""
           descriptionTwo=""
           descriptionThreee=""
           descriptionFour=""
           descriptionFive=""
           descriptionSix=""
/>*/}
           <TableSimple
           TitleHeadTable="Resultados"
           descriptionOne="Nombre"
           descriptionTwo="Artista"
           descriptionThree="Album"
           descriptionFour="Duracion"
           descriptionFive="Agregar"
           descriptionBodyTable="No hay resultados: utiliza la barra de búsqueda para encontrar canciones"
            />
            {/*los br son temporales hast que le de estructura*/}
            
            <br></br>
            <br></br>
            <br>
            </br>
            <TableSimple
            TitleHeadTable="Tu Playlist"
            descriptionOne="Nombre"
           descriptionTwo="Artista"
           descriptionThree="Duracion"
           descriptionFour="Cant.Votos"
           descriptionSix="Votar"
            />
        </div>
      
    )
}