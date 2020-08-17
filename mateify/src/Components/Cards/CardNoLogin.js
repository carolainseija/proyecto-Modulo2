import React from "react";
import { Typography, Box, Card, Toolbar, Paper } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import "../Cards/CardNoLogin.css";
export const CardNoLogin = () => {
  return (
    <Card className="paper">
      <div className="classIcon">
        <LockIcon color="primary" style={{ fontSize: 100 }} />
      </div>
      <div className="text-Card">
        <Typography className="Logo-security" variant="h4" color="initial">
          Mmm... algo no salió bien
        </Typography>
        <Typography variant="p1" color="initial">
          Debes estar autenticado para acceder a esta página
        </Typography>
      </div>
    </Card>
  );
};
