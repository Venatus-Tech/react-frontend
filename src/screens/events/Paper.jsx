import { Paper } from "@material-ui/core";
import { React, useState } from "react";
import "./Events.css";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Modal from "./Modal";
import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles({
  paperStyle: {
    backgroundColor: "transparent",
    color: "#a685e2",
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
    margin: "0 auto",

    display: "block",
    fontSize: "0.7rem",
  },
});
function PaperPer(props) {
  const classes = useStyles();

  const history = useHistory();

  const [isOpen, setOpen] = useState(false);
  function onClicked() {
    setOpen(true);
    console.log("clicked");
  }
  return (
    <div>
      <div>
        <Paper className={classes.paperStyle} elevation={15} variant="outline">
          <img src={props.picture} alt="event" className="img-future"></img>
          <Typography variant="h6" align="center">
            {props.title}
          </Typography>
          <Link to={props.link}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.Button}
              // onClick={() => history.push("/events/csgo")}
            >
              Register
            </Button>
          </Link>
        </Paper>
      </div>
      {isOpen ? (
        <Modal
          close={() => {
            setOpen(false);
          }}
          title={props.title}
          imgUrl={props.picture}
          info={props.information}
        />
      ) : null}
    </div>
  );
}
export default PaperPer;
