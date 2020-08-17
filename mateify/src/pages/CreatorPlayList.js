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

           <TableSimple />
        </div>
      
    )
}