import React, { useState, useEffect } from "react";
import { Grid, makeStyles, TextField, Button } from "@material-ui/core";
import firebase from "../../../firebase";
import * as Yup from "yup";
import { Formik, ErrorMessage, Field, getIn, useFormik, Form } from "formik";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import background from "../../../assets/csgo.jpg";
import styles from "./csgo.module.css";

const db = firebase.firestore();

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
    "& .MuiInputBase-root": {
      color: "white",
    },
    display: "flex",
    flexDirection: "column",
  },
  error: {
    margin: "-5px 10px 0px",
    fontSize: "0.8rem",
    color: "red",
  },
  longAnswer: {
    width: "50ch",
    display: "block",
  },
  formDiv: {
    color: "white",
    borderRadius: "10px",
    width: "80%",
    padding: "20px",
    backgroundSize: "100% 100%",
    backgroundPosition: "top",
    backgroundImage: `linear-gradient(to right,#00000073, #231d06e8), url(${background})`,
    "& .MuiFilledInput-underline:after ": {
      borderBottom: "2px solid #0e0b1f",
    },
    "& .MuiInputLabel-formControl": {
      color: "#8bea9c",
    },
    "& .MuiInputBase-root": {
      color: "#8bc0da",
    },
    "& .MuiFormControl-root": {
      marginRight: "30px",
    },
    "@media (max-width:955px)": {
      width: "100%",
      textAlign: "center",
    },
  },
  label: {
    fontSize: "1.2rem",
    fontWeight: "500",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CsgoForm = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const phoneRegex = RegExp(/^\+(?:[0-9] ?){6,14}[0-9]$/);

  const validationSchema = Yup.object().shape({
    teamName: Yup.string().required("*Required"),
    captName: Yup.string().required("*Required"),
    captPhoneNo: Yup.string()
      .matches(phoneRegex, "Invalid phone")
      .required("*Phone is required"),
    captRollNo: Yup.string().required("*Required"),
    player2: Yup.string().required("*Required"),
    player2RollNum: Yup.string().required("*Required"),
    player3: Yup.string().required("*Required"),
    player3RollNum: Yup.string().required("*Required"),
    player4: Yup.string().required("*Required"),
    player4RollNum: Yup.string().required("*Required"),
    player5: Yup.string().required("*Required"),
    player5RollNum: Yup.string().required("*Required"),
  });

  const formik = useFormik({
    initialValues: {
      teamName: "",
      captName: "",
      captRollNo: "",
      captPhoneNo: "",
      player2: "",
      player2RollNum: "",
      player3: "",
      player3RollNum: "",
      player4: "",
      player4RollNum: "",
      player5: "",
      player5RollNum: "",
    },

    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      db.collection("csgoFW")
        .add(values)
        .then(() => {
          console.log("registered successfully");

          resetForm();
          setOpen(true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <Grid
      container
      style={{ paddingTop: "4.5rem", minHeight: "100vh" }}
      justify="center"
    >
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Registered Successfully!
        </Alert>
      </Snackbar>
      <Grid item container className={classes.formDiv} justify="flex-end">
        <Grid
          item
          sm={12}
          style={{ height: "10%", textAlign: "center", width: "100%" }}
        >
          <h1>CSGO 5v5 SCRIM</h1>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          className={styles.rollDiv}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Button
              style={{
                color: "white",
                background: "tomato",
                fontSize: "1.3rem",
                fontWeight: "700",
              }}
              onClick={formik.handleSubmit}
            >
              Let's Roll
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5} style={{ height: "90%", padding: "10px" }}>
          <TextField
            label="Team Name"
            color="secondary"
            helperText={formik.errors.teamName}
            onChange={formik.handleChange}
            value={formik.values.teamName}
            error={
              formik.touched.teamName && formik.errors.teamName ? true : false
            }
            onBlur={formik.handleBlur}
            name="teamName"
            id="teamName"
          />
          <TextField
            label="Phone No."
            color="secondary"
            helperText={formik.errors.captPhoneNo}
            onChange={formik.handleChange}
            value={formik.values.captPhoneNo}
            error={
              formik.touched.captPhoneNo && formik.errors.captPhoneNo
                ? true
                : false
            }
            onBlur={formik.handleBlur}
            name="captPhoneNo"
            id="captPhoneNo"
          />
          <p className={classes.label}>Player 1(Captain)</p>

          <TextField
            label="Name"
            color="secondary"
            helperText={formik.errors.captName}
            onChange={formik.handleChange}
            value={formik.values.captName}
            error={
              formik.touched.captName && formik.errors.captName ? true : false
            }
            onBlur={formik.handleBlur}
            name="captName"
            id="captName"
          />
          <TextField
            label="Roll No."
            color="secondary"
            helperText={formik.errors.captRollNo}
            onChange={formik.handleChange}
            value={formik.values.captRollNo}
            error={
              formik.touched.captRollNo && formik.errors.captRollNo
                ? true
                : false
            }
            onBlur={formik.handleBlur}
            name="captRollNo"
            id="captRollNo"
          />

          <p className={classes.label}>Player 2</p>
          <TextField
            label="Name "
            color="secondary"
            helperText={formik.errors.player2}
            onChange={formik.handleChange}
            value={formik.values.player2}
            error={
              formik.touched.player2 && formik.errors.player2 ? true : false
            }
            onBlur={formik.handleBlur}
            name="player2"
            id="player2"
          />
          <TextField
            label="Roll No."
            color="secondary"
            helperText={formik.errors.player2RollNum}
            onChange={formik.handleChange}
            value={formik.values.player2RollNum}
            error={
              formik.touched.player2RollNum && formik.errors.player2RollNum
                ? true
                : false
            }
            onBlur={formik.handleBlur}
            name="player2RollNum"
            id="player2RollNum"
          />
          <p className={classes.label}>Player 3</p>
          <TextField
            label="Name"
            color="secondary"
            helperText={formik.errors.player3}
            onChange={formik.handleChange}
            value={formik.values.player3}
            error={
              formik.touched.player3 && formik.errors.player3 ? true : false
            }
            onBlur={formik.handleBlur}
            name="player3"
            id="player3"
          />
          <TextField
            label="Roll No."
            color="secondary"
            helperText={formik.errors.player3RollNum}
            onChange={formik.handleChange}
            value={formik.values.player3RollNum}
            error={
              formik.touched.player3RollNum && formik.errors.player3RollNum
                ? true
                : false
            }
            onBlur={formik.handleBlur}
            name="player3RollNum"
            id="player3RollNum"
          />
          <p className={classes.label}>Player 4</p>
          <TextField
            label="Name"
            color="secondary"
            helperText={formik.errors.player4}
            onChange={formik.handleChange}
            value={formik.values.player4}
            error={
              formik.touched.player4 && formik.errors.player4 ? true : false
            }
            onBlur={formik.handleBlur}
            name="player4"
            id="player4"
          />
          <TextField
            label="Roll No."
            color="secondary"
            helperText={formik.errors.player4RollNum}
            onChange={formik.handleChange}
            value={formik.values.player4RollNum}
            error={
              formik.touched.player4RollNum && formik.errors.player4RollNum
                ? true
                : false
            }
            onBlur={formik.handleBlur}
            name="player4RollNum"
            id="player4RollNum"
          />
          <p className={classes.label}>Player 5</p>
          <TextField
            label="Name"
            color="secondary"
            helperText={formik.errors.player5}
            onChange={formik.handleChange}
            value={formik.values.player5}
            error={
              formik.touched.player5 && formik.errors.player5 ? true : false
            }
            onBlur={formik.handleBlur}
            name="player5"
            id="player5"
          />
          <TextField
            label="Roll No."
            color="secondary"
            helperText={formik.errors.player5RollNum}
            onChange={formik.handleChange}
            value={formik.values.player5RollNum}
            error={
              formik.touched.player5RollNum && formik.errors.player5RollNum
                ? true
                : false
            }
            onBlur={formik.handleBlur}
            name="player5RollNum"
            id="player5RollNum"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CsgoForm;
