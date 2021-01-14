import React, { useState, useEffect } from "react";
import { Grid, makeStyles, TextField } from "@material-ui/core";
import firebase from "../../firebase";
import * as Yup from "yup";
import { useFormik } from "formik";

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
}));

const JuegoFom = () => {
  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    ques1: Yup.string().required("*Required"),
  });

  const formik = useFormik({
    initialValues: {
      ques1: "",
      ques2: "",
      ques3: "",
    },
    onSubmit: (values) => {
      console.log(values);
      //   db.collection("users")
      //     .add(values)
      //     .then((docRef) => {
      //       console.log("added doc hehe", docRef);
      //     });
    },
    validationSchema,
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
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="Briefly state why you picked Juego?"
            color="secondary"
            helperText={formik.errors.ques1}
            onChange={formik.handleChange}
            value={formik.values.ques1}
            error={formik.touched.ques1 && formik.errors.ques1 ? true : false}
            onBlur={formik.handleBlur}
            name="ques1"
            id="ques1"
          />
          <TextField
            label="Mention Your Gamer Tag along with Web Link"
            color="secondary"
            helperText={formik.errors.ques2}
            onChange={formik.handleChange}
            value={formik.values.ques2}
            error={formik.touched.ques2 && formik.errors.ques2 ? true : false}
            onBlur={formik.handleBlur}
            name="ques2"
            id="ques2"
          />

          <TextField
            helperText={formik.errors.ques3}
            onChange={formik.handleChange}
            value={formik.values.ques3}
            error={formik.touched.ques3 && formik.errors.ques3 ? true : false}
            onBlur={formik.handleBlur}
            name="ques3"
            id="ques3"
            label="Which platform in gaming do you prefer/ have prior experience in?"
            color="secondary"
          />
        </form>
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

export default JuegoFom;
