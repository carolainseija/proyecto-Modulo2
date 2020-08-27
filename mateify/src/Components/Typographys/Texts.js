import React from "react";
import { Typography } from "@material-ui/core";
import "../Typographys/Texts.css";

export const Texts = (props) => {
  return (
    <div>
      <Typography
        className={props.class}
        variant={props.variant}
        color="initial"
      >
        {props.text}
      </Typography>
    </div>
  );
};
