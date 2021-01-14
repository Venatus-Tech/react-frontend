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
  longAnswer: {
    width: "50ch",
    display: "block",
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

  const [buttonAction, setButtonAction] = useState({
    juegoOn: false,
    alfrescoOn: false,
    techOn: false,
    prodOn: false,
    prOn: false,
  });

  const handleButtonCLick = (e) => {
    setButtonAction({
      ...buttonAction,
      [e.target.name]: true,
    });
  };
  const [activeTab, setActiveTab] = useState("");

  const handleActive = (tab) => {
    setActiveTab(tab);
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
                disabled={!interest.isJuego}
                name="juegoOn"
                onClick={() => {
                  handleActive("juego");
                }}
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
                disabled={!interest.isAlfresco}
                name="alfrescoOn"
                onClick={() => {
                  handleActive("alfresco");
                }}
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
                disabled={!interest.isTech}
                name="techOn"
                onClick={() => {
                  handleActive("tech");
                }}
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
                disabled={!interest.isProd}
                name="prodOn"
                onClick={() => {
                  handleActive("prod");
                }}
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
                  Production
                </span>{" "}
              </Button>
              <Button
                disabled={!interest.isPR}
                name="prOn"
                onClick={() => {
                  handleActive("pr");
                }}
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
              {activeTab === "juego" ? (
                <div>
                  <p>Briefly state why you picked juego?</p>
                  <TextField
                    id="ques1"
                    label="Answer"
                    placeholder="Your answer here"
                    name="whyJuego"
                    variant="filled"
                    rows={4}
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.whyJuego}
                    onChange={formik.handleChange}
                    value={formik.values.whyJuego}
                    error={
                      formik.touched.whyJuego && formik.errors.whyJuego
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />
                  <p>Mention Your Gamer Tag along with Web Link</p>
                  <TextField
                    id="ques2"
                    label="Answer"
                    placeholder="Your answer here"
                    name="gamerTag"
                    variant="filled"
                    rows={2}
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.gamerTag}
                    onChange={formik.handleChange}
                    value={formik.values.gamerTag}
                    error={
                      formik.touched.gamerTag && formik.errors.gamerTag
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />
                  <p>
                    Which platform in gaming do you prefer/ have prior
                    experience in?
                  </p>
                  <TextField
                    id="ques3"
                    label="Answer"
                    placeholder="Your answer here"
                    name="platform"
                    variant="filled"
                    rows={2}
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.platform}
                    onChange={formik.handleChange}
                    value={formik.values.platform}
                    error={
                      formik.touched.platform && formik.errors.platform
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />
                </div>
              ) : activeTab === "alfresco" ? (
                <div>
                  <p>
                    Prepare the Design and Execution of an outdoor game where
                    you convert a classic board game or a pen-paper game like
                    (Tic TAC Toe or Chess etc.) into a life-size version. You
                    have to keep in mind, how you will maintain the crowd, will
                    it be a team challenge or a solo play, what all props you
                    will need etc.
                  </p>
                  <TextField
                    id="ques4"
                    label="Answer"
                    placeholder="Your answer here"
                    name="designGame"
                    variant="filled"
                    rows={8}
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.designGame}
                    onChange={formik.handleChange}
                    value={formik.values.designGame}
                    error={
                      formik.touched.designGame && formik.errors.designGame
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />
                </div>
              ) : activeTab === "tech" ? (
                <div>
                  <p>Why do you want to join tech department?</p>
                  <TextField
                    id="ques5"
                    label="Answer"
                    placeholder="Your answer here"
                    name="whyTech"
                    variant="filled"
                    rows={4}
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.whyTech}
                    onChange={formik.handleChange}
                    value={formik.values.whyTech}
                    error={
                      formik.touched.whyTech && formik.errors.whyTech
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />

                  <p>What do you expect from tech department?</p>
                  <TextField
                    id="ques6"
                    label="Answer"
                    placeholder="Your answer here"
                    name="expectations"
                    variant="filled"
                    rows={4}
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.expectations}
                    onChange={formik.handleChange}
                    value={formik.values.expectations}
                    error={
                      formik.touched.expectations && formik.errors.expectations
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />

                  <p>Github Link</p>
                  <TextField
                    id="ques7"
                    label="Answer"
                    placeholder="Your answer here"
                    name="github"
                    variant="filled"
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.github}
                    onChange={formik.handleChange}
                    value={formik.values.github}
                    error={
                      formik.touched.github && formik.errors.github
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />

                  <p>What is your curent tech stack?</p>
                  <TextField
                    id="ques8"
                    label="Answer"
                    placeholder="Your answer here"
                    name="techStack"
                    variant="filled"
                    rows={2}
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.techStack}
                    onChange={formik.handleChange}
                    value={formik.values.techStack}
                    error={
                      formik.touched.techStack && formik.errors.techStack
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />
                  <p>
                    Explain an interesting problem you solved using programming.
                  </p>
                  <TextField
                    id="ques9"
                    label="Answer"
                    placeholder="Your answer here"
                    name="problemSolved"
                    variant="filled"
                    rows={5}
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.problemSolved}
                    onChange={formik.handleChange}
                    value={formik.values.problemSolved}
                    error={
                      formik.touched.problemSolved &&
                      formik.errors.problemSolved
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />
                </div>
              ) : activeTab === "prod" ? (
                <div>
                  <p>
                    Mention any prior experience in group discussion or content
                    writing.
                  </p>
                  <TextField
                    id="ques10"
                    label="Answer"
                    placeholder="Your answer here"
                    name="experienceProd"
                    variant="filled"
                    rows={4}
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.experienceProd}
                    onChange={formik.handleChange}
                    value={formik.values.experienceProd}
                    error={
                      formik.touched.experienceProd &&
                      formik.errors.experienceProd
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />
                  <p>Add links to your existing works here.(If any)</p>
                  <TextField
                    id="ques11"
                    label="Answer"
                    placeholder="Your answer here"
                    name="prevWork"
                    variant="filled"
                    rows={4}
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.prevWork}
                    onChange={formik.handleChange}
                    value={formik.values.prevWork}
                    error={
                      formik.touched.prevWork && formik.errors.prevWork
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />
                </div>
              ) : activeTab === "pr" ? (
                <div>
                  <p>Mention any prior experience in public relations.</p>
                  <TextField
                    id="ques12"
                    label="Answer"
                    placeholder="Your answer here"
                    name="experiencePR"
                    variant="filled"
                    rows={4}
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.experiencePR}
                    onChange={formik.handleChange}
                    value={formik.values.experiencePR}
                    error={
                      formik.touched.experiencePR && formik.errors.experiencePR
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />
                  <p>
                    What publicising strategies you\'ll follow for a college
                    level event?
                  </p>
                  <TextField
                    id="ques13"
                    label="Answer"
                    placeholder="Your answer here"
                    name="strategies"
                    variant="filled"
                    rows={4}
                    multiline
                    style={{ width: "90ch" }}
                    helperText={formik.errors.strategies}
                    onChange={formik.handleChange}
                    value={formik.values.strategies}
                    error={
                      formik.touched.strategies && formik.errors.strategies
                        ? true
                        : false
                    }
                    onBlur={formik.handleBlur}
                  />
                </div>
              ) : null}
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
