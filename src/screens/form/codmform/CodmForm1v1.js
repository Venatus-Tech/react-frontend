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
import background from "../../../assets/codm-bg.jpg";
import styles from "./codm.module.css";

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
      marginTop: "40px",
      display: "block",
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

const CodmForm1v1 = () => {
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
    name: Yup.string().required("*Required"),
    gamingName: Yup.string().required("*Required"),
    phone: Yup.string()
      .matches(phoneRegex, "Invalid phone")
      .required("*Phone is required"),
    level: Yup.string().required("*Required"),
    maxRank: Yup.string().required("*Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      gamingName: "",
      level: "",
      maxRank: "",
      phone: "",
    },

    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      db.collection("codmFW")
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
          <h1>CODM Gaming Day</h1>
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
            label="Name"
            color="secondary"
            helperText={formik.errors.name}
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name ? true : false}
            onBlur={formik.handleBlur}
            name="name"
            id="name"
          />

          <TextField
            label="Gaming Name"
            color="secondary"
            helperText={formik.errors.gamingName}
            onChange={formik.handleChange}
            value={formik.values.gamingName}
            error={
              formik.touched.gamingName && formik.errors.gamingName
                ? true
                : false
            }
            onBlur={formik.handleBlur}
            name="gamingName"
            id="gamingName"
          />
          <TextField
            label="Level"
            color="secondary"
            helperText={formik.errors.level}
            onChange={formik.handleChange}
            value={formik.values.level}
            error={formik.touched.level && formik.errors.level ? true : false}
            onBlur={formik.handleBlur}
            name="level"
            id="level"
          />
          <TextField
            label="Maximum Rank Achieved"
            color="secondary"
            helperText={formik.errors.maxRank}
            onChange={formik.handleChange}
            value={formik.values.maxRank}
            error={
              formik.touched.maxRank && formik.errors.maxRank ? true : false
            }
            onBlur={formik.handleBlur}
            name="maxRank"
            id="maxRank"
          />
          <TextField
            label="Phone No.(with country code)"
            color="secondary"
            helperText={formik.errors.phone}
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.touched.phone && formik.errors.phone ? true : false}
            onBlur={formik.handleBlur}
            name="phone"
            id="phone"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CodmForm1v1;
