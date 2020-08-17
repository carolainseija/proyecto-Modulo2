import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import "../NavBar/NavBar.css";

export const NavBar = (props) => {
  return (
    <div className={props.class}>
      <AppBar className="rootNavBar" position="sticky">
        <Toolbar className="logo AppBar__toolbar">
          <Typography variant="h4">{props.nameLogo}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
