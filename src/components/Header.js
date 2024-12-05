import { Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import "../App.css";
import { Badge } from "@mui/material";

const Header = () => {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      className="Header-container"
      sx={{ width: "100%" }}
    >
      <Grid item className="header-objects" lg={12}>
        <Typography>Home</Typography>
      </Grid>

      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon sx={{ color: "white" }} />
      </Badge>
    </Grid>
  );
};

export default Header;
