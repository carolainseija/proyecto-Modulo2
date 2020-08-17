import React from "react";

import { ButtonRegister } from "../Buttons/ButtonRegister";
import "../Form/Form.css";


import { Paper, Input, Grid, Box, Avatar } from "@material-ui/core";
import { FormValidation } from "../Form/FormValidation";
import { Texts } from "../Typographys/Texts";

import LockIcon from '@material-ui/icons/Lock';
import { lime } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';


export const Form = (props) => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: 'FFFFFF',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      white: {
        color: "white",
      },
    },
  });

  return (
    <div className="centrar">
      <Box border={0} className="boxx" display="flex" justifyContent="center">
        <Grid item xs={10} className="grid">
          <div className="ingresar ">
          <Paper className="paper ">
            <div className="containerIcon">
           
            </div>

            
            <Texts text="Ingresar" />
          

          
            <form className="rootTwo" noValidate autoComplete="on">
              <div className="centrar">
                <FormValidation />

                <Texts
                  text="¿HAS OLVIDADO LA CONTRASEÑA?"
                  class="text-olvidado centrar margin"
                />

   
   <div className="contenedorBtnQuestion">
              <Texts
                  text="¿NO TIENES CUENTA?"
                  class="text-cuenta centrar margin"
                />
              </div>
<div className="contenedorBtnQuestion">
<ButtonRegister
                  descriptionButton="Registrate"
                  className="btn-register centar margin "
                />
</div>
   
              
              </div>
            </form>
          </Paper>
          </div>
        </Grid>
      </Box>
    </div>
  );
};
