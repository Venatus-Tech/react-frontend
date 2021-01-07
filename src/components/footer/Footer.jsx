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
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.venatus.nsut_app"
              )
            }
            style={{ width: "250px", height: "100px", cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={6} md={4} className="contact">
          <p>Contact Us</p>
          <p className="small-link">Phone No :- +91-8697831037</p>
          <a
            href="mailto:venatus.nsit@gmail.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p className="small-link">Email :- venatus.nsit@gmail.com</p>
          </a>
        </Grid>

        <Grid item xs={6} md={4} className="servers">
          <p>Our Community</p>
          <p
            className="small-link"
            onClick={() =>
              window.open("https://chat.whatsapp.com/F3siRedoeBG0hbLFnAF3rA")
            }
          >
            CSGO
          </p>
          <p
            className="small-link"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.venatus.nsut_app"
              )
            }
          >
            Minecraft
          </p>
          <p
            className="small-link"
            onClick={() =>
              window.open("https://chat.whatsapp.com/KkskzZtodCbB4Oivt8fRRH")
            }
          >
            Valorant
          </p>
          <p
            className="small-link"
            onClick={() =>
              window.open("https://chat.whatsapp.com/FEuKoLFlJ361Bqwd2nnhfP")
            }
          >
            CODM
          </p>
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
