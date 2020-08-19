import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import { fade, makeStyles } from "@material-ui/core/styles";


//styles
const  useStyles = makeStyles((theme) => ({
    iconBig: {
      color: fade(theme.palette.common.white,1),
      fontSize: 100
    },
   }));
  
export const IconBig = (props) => {
     //class
     const classes = useStyles();
    return(
        <div className={props.class}>
        <LockIcon
        className={classes.iconBig}
        color="white"  />  
      </div>
    )
}