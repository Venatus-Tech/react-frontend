import { Paper } from "@material-ui/core";
import { React, useState } from "react";
import "./communities.css";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Modal from "./Modal";
const useStyles = makeStyles({
  paperStyle: {
    backgroundColor: "transparent",
    color: "#a685e2",
    display: "relative",
    borderRadius: "10px",
    width: "76%",
    margin: "auto",
    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
      zIndex: "5",
      backgroundColor: "#282051",
    },
  },
  Button: {
    bottom: "0",

    display: "absolute",
    fontSize: "0.7rem",
  },
});
function PaperPer(props) {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  function onClicked() {
    setOpen(true);
    console.log("clicked");
  }
  return (
    <div>
      <div onClick={onClicked}>
        <Paper className={classes.paperStyle} elevation={15} variant='outline'>
          <img src={props.picture} alt='event' className='img-future'></img>
        </Paper>
      </div>
      {isOpen ? (
        <Modal
          close={() => {
            setOpen(false);
          }}
          imgUrl={props.picture}
          title={props.title}
          discordLink={props.discord}
          whatsappLink={props.whatsapp}
        />
      ) : null}
    </div>
  );
}
export default PaperPer;
