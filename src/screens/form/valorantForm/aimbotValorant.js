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
import background from "../../../assets/valo-bg.jpg";
import Modal from "./Modal";
import styles from "./valorant.module.css";

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

  const [paymentImage, setPaymentImage] = useState(null);
  const [message, setMessage] = useState("");
  const [mesTypes, setMesType] = useState("");

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
    captIGN: Yup.string().required("*Required"),
    player2: Yup.string().required("*Required"),
    player2IGN: Yup.string().required("*Required"),
    player3: Yup.string(),
    player3IGN: Yup.string(),
    player4: Yup.string(),
    player4IGN: Yup.string(),
    player5: Yup.string(),
    player5IGN: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      teamName: "",
      captName: "",
      captPhoneNo: "",
      captIGN: "",
      player2: "",
      player2IGN: "",
      player3: "",
      player3IGN: "",
      player4: "",
      player4IGN: "",
      player5: "",
      player5IGN: "",
    },

    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (paymentImage === null) {
        setMessage("Please upload payment confirmation image");
        setOpen(true);
        setMesType("error");
        return;
      }

      var storageRef = firebase.storage().ref();

      var imageRef = storageRef.child(`valo_moksha21/${paymentImage.name}`);
      await imageRef.put(paymentImage);
      const imageURL = await imageRef.getDownloadURL();
      console.log(values);
      await db
        .collection("valoMoksha21")
        .add({
          values,
          paymentImage: imageURL,
        })
        .then(() => {
          console.log("registered successfully");

          resetForm();
          setPaymentImage(null);
          setMesType("success");
          setMessage("Registered Successfully");
          setOpen(true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const [isOpen, setOpenModal] = useState(false);
  function modalClicked() {
    setOpenModal(true);
    console.log("clicked");
  }

  const imageUpload = (e) => {
    const file = e.target.files[0];
    setPaymentImage(file);
  };

  return (
    <Grid
      container
      style={{ paddingTop: "4.5rem", minHeight: "100vh" }}
      justify="center"
    >
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={mesTypes}>
          {message}
        </Alert>
      </Snackbar>
      <Grid item container className={classes.formDiv} justify="flex-end">
        <Grid item sm={12} style={{ textAlign: "center", width: "100%" }}>
          <h1>Valorant Moksha'21 Registration Form</h1>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          className={styles.rollDiv}
          container
          justify="center"
          alignItems="center"
          style={{ display: "block", textAlign: "center" }}
        >
          <Grid item>
            <Button
              style={{
                color: "white",
                background: "tomato",
                fontSize: "1.3rem",
                fontWeight: "700",
              }}
              onClick={modalClicked}
            >
              Check Rules
            </Button>
          </Grid>
          <Grid item className={styles.payment}>
            <h4>Payment Methods:</h4>
            <p style={{ fontSize: "1rem" }}>
              Paytm: +917424961361 (Mudit Mahajan)
            </p>
            <p style={{ fontSize: "1rem" }}>UPI: muditmhjn99@okicici</p>
            <h4>Upload Payment Screenshot</h4>
            <input
              type="file"
              name="paymentImage"
              id="paymentImage"
              onChange={imageUpload}
            />
          </Grid>
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
        <Grid item xs={12} sm={5} style={{ padding: "10px" }}>
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
            label="In Game Name"
            color="secondary"
            helperText={formik.errors.captIGN}
            onChange={formik.handleChange}
            value={formik.values.captIGN}
            error={
              formik.touched.captIGN && formik.errors.captIGN ? true : false
            }
            onBlur={formik.handleBlur}
            name="captIGN"
            id="captIGN"
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
            label="In Game Name"
            color="secondary"
            helperText={formik.errors.player2IGN}
            onChange={formik.handleChange}
            value={formik.values.player2IGN}
            error={
              formik.touched.player2IGN && formik.errors.player2IGN
                ? true
                : false
            }
            onBlur={formik.handleBlur}
            name="player2IGN"
            id="player2IGN"
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
            label="In Game Name"
            color="secondary"
            helperText={formik.errors.player3IGN}
            onChange={formik.handleChange}
            value={formik.values.player3IGN}
            error={
              formik.touched.player3IGN && formik.errors.player3IGN
                ? true
                : false
            }
            onBlur={formik.handleBlur}
            name="player3IGN"
            id="player3IGN"
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
            label="In Game Name"
            color="secondary"
            helperText={formik.errors.player4IGN}
            onChange={formik.handleChange}
            value={formik.values.player4IGN}
            error={
              formik.touched.player4IGN && formik.errors.player4IGN
                ? true
                : false
            }
            onBlur={formik.handleBlur}
            name="player4IGN"
            id="player4IGN"
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
            label="In Game Name"
            color="secondary"
            helperText={formik.errors.player5IGN}
            onChange={formik.handleChange}
            value={formik.values.player5IGN}
            error={
              formik.touched.player5IGN && formik.errors.player5IGN
                ? true
                : false
            }
            onBlur={formik.handleBlur}
            name="player5IGN"
            id="player5IGN"
          />
        </Grid>
      </Grid>
      {isOpen ? (
        <Modal
          close={() => {
            setOpenModal(false);
          }}
          game={"valorant"}
        />
      ) : null}
    </Grid>
  );
};

export default CsgoForm;
