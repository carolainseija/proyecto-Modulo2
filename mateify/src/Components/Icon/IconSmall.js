import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import { fade, makeStyles } from "@material-ui/core/styles";


//styles
const  useStyles = makeStyles((theme) => ({
    iconOne: {
      color: fade(theme.palette.common.white,1),
      fontSize: 100
    },
    iconTwo: {
      color: fade(theme.palette.common.white,1),
      fontSize: 70
    },
   }));
  
export const IconSmall = (props) => {
     //class
     const classes = useStyles();
    return(
        <div className={props.class}>
        <LockIcon
        className={classes.iconOne}
        color="white"  />  
      </div>
    )
}