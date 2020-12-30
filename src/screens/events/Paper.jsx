import { Paper } from "@material-ui/core";
import React from "react";
import "./Events.css";
import pic from "./futureEventsSample.jpg";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  paperStyle: {
    backgroundColor: "transparent",
    color: "#a685e2",
    borderRadius: "10px",
    width: "80%",
    "&:hover": {
      transform: "scale(1.2)",
      cursor: "pointer",
      zIndex: "5",
      backgroundColor: "#282051",
    },
  },
});
function PaperPer(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.paperStyle} elevation={15} variant='outline'>
      <img src={props.picture} alt='event' className='img-future'></img>
      <Typography variant='h5' component='h2' align='center'>
        ben
      </Typography>
    </Paper>
  );
}
export default PaperPer;
