import React from "react";
import { Typography, Box, Card, Toolbar } from "@material-ui/core";

export const PlaylistNoLogin = () => {
  return (
    <div>
      <Card>
        <Box>
          <Typography className="Logo-security" variant="h4" color="initial">
            Mmm... algo no salió bien
          </Typography>
        </Box>
      </Card>
    </div>
  );
};
