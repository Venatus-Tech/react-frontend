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

const General = () => {
  const classes = useStyles();

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
    },
    onSubmit: (values) => {
      console.log(values);
      db.collection("users")
        .add(values)
        .then((docRef) => {
          console.log("added doc hehe", docRef);
        });
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
            label="Email"
            color="secondary"
            helperText={formik.errors.email}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email ? true : false}
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
            error={formik.touched.phone && formik.errors.phone ? true : false}
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
            error={formik.touched.branch && formik.errors.branch ? true : false}
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
            error={formik.touched.campus && formik.errors.campus ? true : false}
            onBlur={formik.handleBlur}
            name="campus"
            id="campus"
            label="Campus"
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

export default General;
