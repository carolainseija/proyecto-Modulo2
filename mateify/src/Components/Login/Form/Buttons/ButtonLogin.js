import React from "react";
import "../Buttons/ButtonLogin.css";
import { Button } from "@material-ui/core";

export const ButtonLogin = (props) => {
  return (
    <div>
      <Button variant="contained" className="btn-login">
        {props.textButtonLogin}
      </Button>
    </div>
  );
};
