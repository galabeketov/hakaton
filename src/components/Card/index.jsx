import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";

function Card({ left, right, element, ...props }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6} sm={12}>
        {left}
      </Grid>
      <Grid item xs={12} lg={6} sm={12}>
        {right}
      </Grid>
    </Grid>
  );
}

export default Card;
