import React, { useState, useEffect } from "react";
import { Grid, makeStyles, TextField, Button } from "@material-ui/core";
import firebase from "../../firebase";
import * as Yup from "yup";
import { Formik, ErrorMessage, Field, getIn, useFormik } from "formik";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./Form.css";

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
}));

const General = () => {
  const classes = useStyles();

  const CustomInputComponent = (props) => {
    console.log(props);
    const name = props.name.split(".")[1];
    return (
      <TextField
        label={name[0].toUpperCase() + name.slice(1)}
        color="primary"
        {...props}
      />
    );
  };

  const [globalState, setGlobalState] = useState({
    general: {
      email: "",
      name: "",
      phone: "",
      rollnum: "",
      branch: "",
      campus: "",
    },
    juego: {
      whyJuego: "",
      gamerTag: "",
      platform: "",
    },
    alfresco: {
      designGame: "",
    },
    tech: {
      whyTech: "",
      expectations: "",
      github: "",
      techStack: "",
      problemSolved: "",
      interests: {
        app: false,
        web: false,
        devops: false,
        ml: false,
        design: false,
      },
    },
    production: {
      experience: "",
      prevWork: "",
    },
    pr: {
      experience: "",
      strategies: "",
    },
  });

  const [interest, setInterest] = useState({
    isJuego: false,
    isAlfresco: false,
    isTech: false,
    isPR: false,
    isProd: false,
  });

  const handleChange = (event) => {
    setInterest({ ...interest, [event.target.name]: event.target.checked });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("*Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      rollnum: "",
      branch: "",
      campus: "",
      whyJuego: "",
      gamerTag: "",
      platform: "",
      designGame: "",
      whyTech: "",
      expectations: "",
      github: "",
      techStack: "",
      problemSolved: "",
      app: false,
      web: false,
      devops: false,
      ml: false,
      design: false,
      experienceProd: "",
      prevWork: "",
      experiencePR: "",
      strategies: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      console.log(interest);
    },
  });

  return (
    <Grid
      container
      style={{ paddingTop: "4.5rem", minHeight: "100vh" }}
      justify="center"
    >
      <Grid
        item
        container
        style={{
          color: "white",
          width: "70%",
          flexDirection: "column",
        }}
      >
        <h1>This is a form</h1>
        <Grid container>
          <Grid item sm={4}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                label="Email"
                color="secondary"
                helperText={formik.errors.email}
                onChange={formik.handleChange}
                value={formik.values.email}
                error={
                  formik.touched.email && formik.errors.email ? true : false
                }
                onBlur={formik.handleBlur}
                name="email"
                id="email"
              />
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
                helperText={formik.errors.phone}
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={
                  formik.touched.phone && formik.errors.phone ? true : false
                }
                onBlur={formik.handleBlur}
                name="phone"
                id="phone"
                label="Phone No."
                color="secondary"
              />

              <TextField
                helperText={formik.errors.rollnum}
                onChange={formik.handleChange}
                value={formik.values.rollnum}
                error={
                  formik.touched.rollnum && formik.errors.rollnum ? true : false
                }
                onBlur={formik.handleBlur}
                name="rollnum"
                id="rollnum"
                label="Roll No."
                color="secondary"
              />

              <TextField
                helperText={formik.errors.branch}
                onChange={formik.handleChange}
                value={formik.values.branch}
                error={
                  formik.touched.branch && formik.errors.branch ? true : false
                }
                onBlur={formik.handleBlur}
                name="branch"
                id="branch"
                label="Branch"
                color="secondary"
              />

              <TextField
                helperText={formik.errors.campus}
                onChange={formik.handleChange}
                value={formik.values.campus}
                error={
                  formik.touched.campus && formik.errors.campus ? true : false
                }
                onBlur={formik.handleBlur}
                name="campus"
                id="campus"
                label="Campus"
                color="secondary"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interest.isJuego}
                    onChange={handleChange}
                    name="isJuego"
                  />
                }
                label="Juego"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interest.isAlfresco}
                    onChange={handleChange}
                    name="isAlfresco"
                  />
                }
                label="Alfresco"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interest.isTech}
                    onChange={handleChange}
                    name="isTech"
                  />
                }
                label="Technical"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interest.isProd}
                    onChange={handleChange}
                    name="isProd"
                  />
                }
                label="Production"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interest.isPR}
                    onChange={handleChange}
                    name="isPR"
                  />
                }
                label="Public Relations"
              />
            </form>
          </Grid>
          <Grid item sm={8} container>
            <Grid item sm={1}>
              <Button
                style={{
                  color: "yellow",
                  background: "black",
                  margin: "10px 0px",
                }}
              >
                <span
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  Juego
                </span>{" "}
              </Button>
              <Button
                style={{
                  color: "yellow",
                  background: "black",
                  margin: "10px 0px",
                }}
              >
                <span
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  Alfresco
                </span>{" "}
              </Button>
              <Button
                style={{
                  color: "yellow",
                  background: "black",
                  margin: "10px 0px",
                }}
              >
                <span
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  Tech
                </span>{" "}
              </Button>
              <Button
                style={{
                  color: "yellow",
                  background: "black",
                  margin: "10px 0px",
                }}
              >
                <span
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  Prod.
                </span>{" "}
              </Button>
              <Button
                style={{
                  color: "yellow",
                  background: "black",
                  margin: "10px 0px",
                }}
              >
                <span
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  PR
                </span>{" "}
              </Button>
            </Grid>
            <Grid item sm={11} style={{ padding: "0px 20px" }}>
              <h1>Hello world</h1>
            </Grid>
          </Grid>
        </Grid>

        <button
          style={{ width: "30%", height: "30px" }}
          onClick={formik.handleSubmit}
        >
          Submit
        </button>
      </Grid>
    </Grid>
  );
};

export default General;
