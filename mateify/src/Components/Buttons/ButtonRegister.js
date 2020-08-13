import React from "react";
import {Button} from '@material-ui/core';

export const ButtonRegister = (props) => {
  return (
    <div>
      <Button className={props.class} variant="outlined" color="primary">
        {props.descriptionButton}
      </Button>
    </div>
  );
}
