import React from "react";
import { NavBar } from "../Components/NavBar/NavBar";
import { Form } from "../Components/Form/Form";
import { Grid } from "@material-ui/core";

export const Login = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} lx={12} className="grid">
          {/* Componente NavBar*/}
          <NavBar nameLogo="Mateify" />
        </Grid>
        <Grid item xs={12} md={12} lg={12} lx={12} className="grid">
          {/* Componete Form*/}
          <Form />
        </Grid>
      </Grid>
    </div>
  );
};
