import React from "react";
import { Link, makeStyles } from "@material-ui/core";

export const LinkTexts = (props) => {
  const classes = makeStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <div>
      <Link className={classes.classLinkTxt} href="#" onClick={preventDefault}>
        {props.textLink}
      </Link>
    </div>
  );
};
