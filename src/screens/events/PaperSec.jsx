import { Paper } from "@material-ui/core";
import React from "react";
import "./Events.css";
import pic from "./futureEventsSample.jpg";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
  paperStyle: {
    backgroundColor: "#282051",
    color: "#a685e2",
    borderRadius: "10px",
    width: "76%",
    "&:hover": {
      transform: "scale(1.01)",
      cursor: "pointer",
      zIndex: "5",
      backgroundColor: "#282051",
    },
  },
  Button: {
    display: "block",
    margin: "0.3rem auto",
  },
  Typography: {
    fontSize: "0.005rem",
  },
});
function PaperPer(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.paperStyle} elevation={15} variant='outline'>
      <img src={props.picture} alt='event' className='img-future'></img>
      <Typography variant='h6' align='center'>
        {props.title}
      </Typography>
      <Button variant='outlined' color='secondary' className={classes.Button}>
        Read
      </Button>
    </Paper>
  );
}
export default PaperPer;
