import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";

function Card({ left, right, element, ...props }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {left}
      </Grid>
      <Grid item xs={6}>
        {right}
      </Grid>
    </Grid>
  );
}

export default Card;
