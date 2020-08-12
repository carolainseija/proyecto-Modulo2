import React from "react";

import "../Form/Form.css";
import { ButtonRegister } from "../Form/Buttons/ButtonRegister";

import { Paper, Input, Grid, Box, Avatar } from "@material-ui/core";
import { ButtonLogin } from "./Buttons/ButtonLogin";
import { Texts } from "./Typographys/Texts";

export const Form = (props) => {
  return (
    <div className="centrar">
      <Box border={1} className="boxx" display="flex" justifyContent="center">
        <Grid item xs={8} className="grid">
          <div className="ingresar ">
            <Avatar alt="selena " src="./Components/images/images.png" />
            <Texts text="Ingresar" />
          </div>

          <div>
            <Paper className="paper ">
              <form className="rootTwo" noValidate autoComplete="on">
                <Input
                  className="root"
                  placeholder="Correo Electronico"
                  type="email"
                />
                <Input
                  className="root"
                  placeholder="Contraseña"
                  type="password"
                />
                <div className="centrar">
                  <ButtonLogin
                    textButtonLogin="COMENZAR A CREAR PLALIST"
                    class="centrar"
                  />

                  <Texts
                    text="¿HAS OLVIDADO LA CONTRASEÑA?"
                    class="text-olvidado centrar margin"
                  />
                </div>
              </form>
            </Paper>
          </div>
          <div className="centrar margin">
            <Texts
              text="¿NO TIENES CUENTA?"
              class="text-cuenta centrar margin"
            />

            <ButtonRegister
              descriptionButton="Registrate"
              className="btn-register centar margin "
            />
          </div>
        </Grid>
      </Box>
    </div>
  );
};
