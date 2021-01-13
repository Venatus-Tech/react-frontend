import React, { useState, useEffect } from "react";
import { Grid, makeStyles, TextField } from "@material-ui/core";
import firebase from "../../firebase";
import * as Yup from "yup";
import { useFormik } from "formik";
import GeneralFrom from "./GeneralForm";

//Final form connected to firestore
const Form = () => {
  return <GeneralFrom />;
};

export default Form;
