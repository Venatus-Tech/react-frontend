import React from "react";
import { Grid } from "@material-ui/core";
import google from "../../assets/google-play-badge.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Grid container style={{ padding: "15px" }}>
        <Grid item xs={12} md={4} className="google">
          <img
            src={google}
            alt="google-play"
            style={{ width: "250px", height: "100px" }}
          />
        </Grid>
        <Grid item xs={6} md={4} className="contact">
          <p>Contact Us</p>
          <p className="small-link">Phone No :- +91-8697831037</p>
          <p className="small-link">Email :- venatus.nsit@gmail.com</p>
        </Grid>

        <Grid item xs={6} md={4} className="servers">
          <p>Our Servers</p>
          <p className="small-link">CSGO</p>
          <p className="small-link">Minecraft</p>
          <p className="small-link">Valorant</p>
          <p className="small-link">CODM</p>
        </Grid>
        <hr />
        <Grid item xs={12} className="copyright">
          <p>&copy; 2020 VENATUS All rights Reserved</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
