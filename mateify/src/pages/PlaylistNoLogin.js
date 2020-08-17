import React from "react";
import { Typography, Box, Card, Toolbar,Paper } from "@material-ui/core";
import {NavBar} from '../Components/NavBar/NavBar';
import {TheLogo} from '../Images/TheLogo';
import '.././pages/PlaylistNoLogin.css';
import { CardNoLogin } from "../Components/Cards/CardNoLogin";

export const PlaylistNoLogin = () => {
  return (
    <div>
     <NavBar nameLogo="Mateify" />
   <div className="Card">
   <CardNoLogin />  
   </div>
     
         
       
    </div>
  );
};
