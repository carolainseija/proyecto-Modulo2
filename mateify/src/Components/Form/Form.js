import React from "react";

import { ButtonRegister } from "../Buttons/ButtonRegister";
import "../Form/Form.css";

import { Paper, Grid, Box } from "@material-ui/core";
import { FormValidation } from "../Form/FormValidation";
import { Texts } from "../Typographys/Texts";

import { createMuiTheme } from "@material-ui/core/styles";
import { TheLogo } from "../../Images/TheLogo";
import { LinkTexts } from "../Links/LinksTexts";

export const Form = (props) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "FFFFFF",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
      white: {
        color: "white",
      },
    },
  });

  return (
    <Grid container className="grid-root centrar">
      <Box
        border={0}
        className="boxx centrar"
        display="flex"
        justifyContent="center"
      >
        <Paper className="paperLogin centrar">
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            lx={12}
            className="grid-two centrar"
          >
            <TheLogo />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            lx={12}
            className="grid-three centrar"
          >
            <Texts text="Ingresar" />
          </Grid>

          <form className="rootTwo" noValidate autoComplete="on">
            <FormValidation />

            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              lx={12}
              className="grid-three centrar"
            >
              <div className="contenedorBtnQuestion">
                <div className="cMain-ontainer-links">
                  <div className="container-links">
                    <LinkTexts
                      className="mar"
                      classLinkTxt="text-olvidado centrar margin"
                      textLink="¿HAS OLVIDADO LA CONTRASEÑA?"
                    />
                  </div>
                  <div className="container-links">
                    <LinkTexts
                      classLinkTxt="text-cuenta centrar margin"
                      textLink="¿NO TIENES CUENTA?"
                    />
                  </div>
                </div>

                <div className="contenedorBtn">
                  <ButtonRegister descriptionButton="Registrate" />
                </div>
              </div>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Grid>
  );
};
