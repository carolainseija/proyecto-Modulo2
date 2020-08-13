import React from "react";

import "../Form/Form.css";
import { ButtonRegister } from "../Form/Buttons/ButtonRegister";


import { Paper, Input, Grid, Box, Avatar } from "@material-ui/core";
import { FormValidation } from "../Form/FormValidation";
import { Texts } from "./Typographys/Texts";

import LockIcon from '@material-ui/icons/Lock';


export const Form = (props) => {
  return (
    <div className="centrar">
      <Box border={0} className="boxx" display="flex" justifyContent="center">
        <Grid item xs={10} className="grid">
          <div className="ingresar ">
          <Paper className="paper ">
            <div className="containerIcon">
            <LockIcon color="secundary" />
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
