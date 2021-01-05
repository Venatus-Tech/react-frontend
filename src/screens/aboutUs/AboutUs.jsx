import React from "react";
import { Grid } from "@material-ui/core";
import "./AboutUs.css";

function AboutUs() {
  return (
    <Grid container style={{ paddingTop: "4.5rem", minHeight: "100vh" }}>
      <Grid item container justify="center" alignItems="center">
        <Grid item container className="back-div">
          <Grid item sm={12} style={{ width: "100%" }}>
            <h1 style={{ textShadow: "-3px -2px 0px black", color: "wheat" }}>
              About Us
            </h1>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            style={{ height: "80%", padding: "0 40px", fontFamily: "cursive" }}
          >
            <p>
              Venatus is known to provide high-end gear for event management and
              create major events attracting crowd from outside Delhi as well.
              Our gamers have been very notable in the gaming competitions held
              throughout Delhi, retaining their lead in every major tournament.
              Tournaments and Events: We keep two annual events every year on
              our college campus, namely: AIMBOT for Esports and SEEK: for
              Outdoors.
              <br />
              <br />
              <br />
              As a nonprofit organization, we have managed to raise over 5.6lakh
              rupees in a period of 3 years and 90% was reinvested to provide
              quality service and gaming platform. Collaborations: We have
              previously collaborated with the Education Tree, Dew Arena,
              Paradise Gamers, Burger King, Battle Groups Cafe, Nexus Gaming
              Cafe, Nodwin Gaming, Immortal Gaming Cafe, among many others. The
              outdoor section has received sponsorship from big names like
              Zomato, Croma, Akash Institue, among others who provide prizes and
              logistics to carry out these events.
            </p>
          </Grid>
          <Grid item xs={12} md={5} className="forwardDiv"></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default AboutUs;
