import React from "react";
import Banner from "../../assets/ven-ban.png";
import LinkPanel from "../../components/LinkPanel/LinkPanel";
import {
  Grid,
  Paper,
  IconButton,
  InputBase,
  makeStyles,
  Button,
} from "@material-ui/core";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import "./Home.css";
import IconCard from "../../components/IconCard/IconCard";

const useStyles = makeStyles((theme) => ({
  input: {
    background: "#33295F",
    width: "35%",
    borderRadius: "24px",
    padding: "0 10px",
    margin: "auto",
    "&.MuiInputBase-root": {
      color: "white",
    },
  },
  button: {
    backgroundColor: "#b92941",
    borderRadius: "12px",
    paddingLeft: "5%",
    paddingRight: "5%",
    fontSize: "0.9rem",
    fontWeight: "700",
    color: "aliceblue",
    marginBottom: "0.7rem",
    marginTop: "0.7rem",
    cursor: "pointer",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <img src={Banner} alt="Banner" className="banner" />

      <LinkPanel />

      {/* Icon divs start */}
      <Grid
        container
        style={{ width: "70%", margin: "9rem 0 4rem", fontSize: "1.2rem" }}
      >
        <IconCard
          icon={icon1}
          text="lorem ipsum dolor sit amet, sols loeal random words to fill up
              space"
        />
        <IconCard
          icon={icon2}
          text="lorem ipsum dolor sit amet, sols loeal random words to fill up
              space"
        />
        <IconCard
          icon={icon3}
          text="lorem ipsum dolor sit amet, sols loeal random words to fill up
              space"
        />
      </Grid>

      {/* Icon divs end here */}

      {/* Subscription email div starts here */}
      <Grid container style={{ width: "70%" }}>
        <Grid
          item
          sm={12}
          container
          justify="center"
          style={{ color: "white", textAlign: "center", marginBottom: "4rem" }}
        >
          <Grid item style={{ width: "30%" }}>
            <h1>Subscribe to our weekly newsletter</h1>
          </Grid>
          <Grid item sm={12}>
            <Paper component="form" className={classes.input}>
              <InputBase
                // className={classes.input}
                placeholder="Email "
                inputProps={{ "aria-label": "email" }}
                // value={searchTerm}
                // onChange={handleSearch}

                style={{ width: "65%", color: "white" }}
              />
              <Button className={classes.button}>Sign up</Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      {/* Subscription email div ends here */}
    </div>
  );
}
export default Home;
