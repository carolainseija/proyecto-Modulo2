import React from "react";
import { Typography, Box, Card, Toolbar, Paper, Grid } from "@material-ui/core";
import { NavBar } from "../NavBar/NavBar";
import { TheLogo } from "../../Images/TheLogo";
import "../../Components/PagesCondicional/PlaylistNoLogin.css";
import { CardNoLogin } from "../Cards/CardNoLogin";

export const PlaylistNoLogin = () => {
  return (
    <div className="root-PlaylistNoLogin">
      <Grid container>
        <Grid item xs={12} md={12} lg={12} lx={12}>
          <NavBar nameLogo="Mateify" />
        </Grid>
        <Grid item xs={12} md={12} lg={12} lx={12}>
          <div className="CardNoLogin">
            <CardNoLogin 
            titleCard="Mmm... algo no salió bien"
            parraphCard="Debes estar autenticado para acceder a esta página"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
