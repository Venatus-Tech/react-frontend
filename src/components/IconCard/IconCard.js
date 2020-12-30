import React from "react";
import { Grid } from "@material-ui/core";
import "./IconCard.css";

const IconCard = ({ icon, text }) => {
  return (
    <Grid item container sm={4} className="icon-card">
      <Grid item style={{ height: "60px" }}>
        <img src={icon} alt="football" width="50px" />
      </Grid>
      <Grid item>
        <p>{text}</p>
      </Grid>
    </Grid>
  );
};

export default IconCard;
