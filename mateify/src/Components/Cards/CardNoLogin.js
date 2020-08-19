import React from "react";
import { Typography, Box, Card, Toolbar, Paper } from "@material-ui/core";
import { IconBig } from "../Icon/IconBig";

import "../Cards/CardNoLogin.css";
export const CardNoLogin = (props) => {
  return (
    <Card className="paper">
      <div>
  <div >
    
<IconBig 
class="classIconBig"
/>
</div>   
      </div>
      <div className="text-Card">
        <Typography className="Logo-security" variant="h4" color="initial">
          {props.titleCard}
        </Typography>
        <Typography variant="p1" color="initial">
          {props.parraphCard}
        </Typography>
      </div>
    </Card>
  );
};
