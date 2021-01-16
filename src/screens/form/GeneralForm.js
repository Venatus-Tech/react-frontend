import React, { useState, useEffect } from "react";
import { Grid, makeStyles, TextField, Button } from "@material-ui/core";
import firebase from "../../firebase";
import * as Yup from "yup";
import { Formik, ErrorMessage, Field, getIn, useFormik } from "formik";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
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
  formDiv: {
    color: "white",
    borderRadius: "10px",
    width: "80%",
    padding: "20px",
    flexDirection: "column",
    background: "#92c7d461",
    "& .MuiFilledInput-underline:after ": {
      borderBottom: "2px solid #0e0b1f",
    },
    "& .MuiInputLabel-formControl": {
      color: "#0e0b1f",
    },
    "& .MuiInputBase-root": {
      color: "white",
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const General = () => {
  const classes = useStyles();

  const history = useHistory();

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [activeTab, setActiveTab] = useState("");

  const handleActive = (tab) => {
    setActiveTab(tab);
  };

  const [interest, setInterest] = useState({
    isJuego: false,
    isAlfresco: false,
    isTech: false,
    isPR: false,
    isProd: false,
  });

  const handleChange = (event) => {
    setInterest({ ...interest, [event.target.name]: event.target.checked });
    setActiveTab("");
  };

  const [techFields, setTechFields] = useState({
    app: false,
    web: false,
    ml: false,
    design: false,
    devops: false,
  });

  const handleTechChange = (event) => {
    setTechFields({ ...techFields, [event.target.name]: event.target.checked });
  };

  // /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  const phoneRegex = RegExp(/^\+(?:[0-9] ?){6,14}[0-9]$/);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("*Required"),
    name: Yup.string().required("*Required"),
    phone: Yup.string()
      .matches(phoneRegex, "Invalid phone")
      .required("*Phone is required"),
    rollnum: Yup.string().required("*Required"),
    branch: Yup.string().required("*Required"),
    campus: Yup.string().required("*Required"),
    expInManagement: Yup.string().required("*Required"),
    expectationFromSoc: Yup.string().required("*Required"),
    whyVenatusHowContribute: Yup.string().required("*Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      rollnum: "",
      branch: "",
      campus: "",
      expInManagement: "",
      expectationFromSoc: "",
      whyVenatusHowContribute: "",
      whyJuego: "",
      gamerTag: "",
      platform: "",
      designGame: "",
      whyTech: "",
      expectations: "",
      github: "",
      techStack: "",
      problemSolved: "",
      experienceProd: "",
      prevWork: "",
      experiencePR: "",
      strategies: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const general = {
        email: values.email,
        name: values.name,
        phone: values.phone,
        rollnum: values.rollnum,
        branch: values.branch,
        campus: values.campus,
        expInManagement: values.expInManagement,
        expectationFromSoc: values.expectationFromSoc,
        whyVenatusHowContribute: values.whyVenatusHowContribute,
      };
      const juego = {
        whyJuego: values.whyJuego,
        gamerTag: values.gamerTag,
        platform: values.platform,
      };
      const alfresco = {
        designGame: values.designGame,
      };
      const tech = {
        whyTech: values.whyTech,
        expectations: values.expectations,
        github: values.github,
        techStack: values.techStack,
        problemSolved: values.problemSolved,
        interests: techFields,
      };
      const production = {
        experience: values.experienceProd,
        prevWork: values.prevWork,
      };
      const pr = {
        experience: values.experiencePR,
        strategies: values.strategies,
      };

      await db
        .collection("users")
        .add(general)
        .then(async (docRef) => {
          if (interest.isJuego) {
            await db
              .collection("users")
              .doc(docRef.id)
              .collection("juego")
              .add(juego);
          }
          if (interest.isAlfresco) {
            await db
              .collection("users")
              .doc(docRef.id)
              .collection("alfresco")
              .add(alfresco);
          }
          if (interest.isTech) {
            await db
              .collection("users")
              .doc(docRef.id)
              .collection("tech")
              .add(tech);
          }
          if (interest.isProd) {
            await db
              .collection("users")
              .doc(docRef.id)
              .collection("production")
              .add(production);
          }
          if (interest.isPR) {
            await db
              .collection("users")
              .doc(docRef.id)
              .collection("pr")
              .add(pr);
          }
          console.log("Registration successfull");
          resetForm();
          setActiveTab("");
          setOpen(true);
          setTimeout(() => {
            history.push("/");
          }, 3000);
        })
        .catch((err) => {
          console.error(err);
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
      <Grid item container className={classes.formDiv}>
        <h1 style={{ textAlign: "center", color: "#ee9595" }}>
          Recruitment Form 2021
        </h1>
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
              <p style={{ color: "#ee9595", fontWeight: "500" }}>
                Select Department :-
              </p>
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
              <p style={{ color: "#ee9595", fontWeight: "500" }}>
                State if you have any prior experience in Event Management.
              </p>
              <TextField
                id="quesend1"
                label="Answer"
                placeholder="Your answer here"
                name="expInManagement"
                variant="filled"
                rows={4}
                multiline
                className="smallMultiline"
                // style={{ width: "40ch" }}
                onChange={formik.handleChange}
                value={formik.values.expInManagement}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.expInManagement &&
                  formik.errors.expInManagement
                    ? true
                    : false
                }
                helperText={formik.errors.expInManagement}
              />
              <p style={{ color: "#ee9595", fontWeight: "500" }}>
                What are your expectations from this society?
              </p>
              <TextField
                id="quesend2"
                label="Answer"
                placeholder="Your answer here"
                name="expectationFromSoc"
                variant="filled"
                rows={4}
                multiline
                className="smallMultiline"
                // style={{ width: "40ch" }}
                onChange={formik.handleChange}
                value={formik.values.expectationFromSoc}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.expectationFromSoc &&
                  formik.errors.expectationFromSoc
                    ? true
                    : false
                }
                helperText={formik.errors.expectationFromSoc}
              />
              <p style={{ color: "#ee9595", fontWeight: "500" }}>
                Why do you want to be a part of this society and how can you
                contribute towards it?
              </p>
              <TextField
                id="quesend3"
                label="Answer"
                placeholder="Your answer here"
                name="whyVenatusHowContribute"
                variant="filled"
                rows={4}
                multiline
                className="smallMultiline"
                // style={{ width: "40ch" }}
                onChange={formik.handleChange}
                value={formik.values.whyVenatusHowContribute}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.whyVenatusHowContribute &&
                  formik.errors.whyVenatusHowContribute
                    ? true
                    : false
                }
                helperText={formik.errors.whyVenatusHowContribute}
              />
            </form>
          </Grid>
          <Grid item sm={8} container>
            <Grid item xs={12} sm={1} className="buttonsDiv">
              <Button
                disabled={!interest.isJuego}
                name="juegoOn"
                onClick={() => {
                  handleActive("juego");
                }}
                className={
                  activeTab === "juego" ? "activeButton" : "interestButton"
                }
                // style={{
                //   color: "#b92941",
                //   background: "#0f0c1f",
                //   margin: "10px 0px",
                //   fontWeight: "800",
                // }}
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
                className={
                  activeTab === "alfresco" ? "activeButton" : "interestButton"
                }
                // style={{
                //   color: "#b92941",
                //   background: "#0f0c1f",
                //   margin: "10px 0px",
                //   fontWeight: "800",
                // }}
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
                className={
                  activeTab === "tech" ? "activeButton" : "interestButton"
                }
                // style={{
                //   color: "#b92941",
                //   background: "#0f0c1f",
                //   margin: "10px 0px",
                //   fontWeight: "800",
                // }}
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
                className={
                  activeTab === "prod" ? "activeButton" : "interestButton"
                }
                // style={{
                //   color: "#b92941",
                //   background: "#0f0c1f",
                //   margin: "10px 0px",
                //   fontWeight: "800",
                // }}
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
                className={
                  activeTab === "pr" ? "activeButton" : "interestButton"
                }
                // style={{
                //   color: activeTab === "pr"? "#0f0c1f":"#b92941",
                //   background: "#0f0c1f",
                //   margin: "10px 0px",
                //   fontWeight: "800",
                // }}
              >
                <span
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  PR Dept
                </span>{" "}
              </Button>
            </Grid>
            <Grid item sm={11} style={{ padding: "0px 20px", width: "100%" }}>
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
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    helperText={
                      interest.isJuego && formik.values.whyJuego === ""
                        ? "*Required"
                        : null
                    }
                    onChange={formik.handleChange}
                    value={formik.values.whyJuego}
                    error={
                      interest.isJuego && formik.values.whyJuego === ""
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
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    onChange={formik.handleChange}
                    value={formik.values.gamerTag}
                    error={
                      interest.isJuego && formik.values.gamerTag === ""
                        ? true
                        : false
                    }
                    helperText={
                      interest.isJuego && formik.values.gamerTag === ""
                        ? "*Required"
                        : null
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
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    onChange={formik.handleChange}
                    value={formik.values.platform}
                    onBlur={formik.handleBlur}
                    error={
                      interest.isJuego && formik.values.platform === ""
                        ? true
                        : false
                    }
                    helperText={
                      interest.isJuego && formik.values.platform === ""
                        ? "*Required"
                        : null
                    }
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
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    onChange={formik.handleChange}
                    value={formik.values.designGame}
                    onBlur={formik.handleBlur}
                    error={
                      interest.isAlfresco && formik.values.designGame === ""
                        ? true
                        : false
                    }
                    helperText={
                      interest.isAlfresco && formik.values.designGame === ""
                        ? "*Required"
                        : null
                    }
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
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    onChange={formik.handleChange}
                    value={formik.values.whyTech}
                    onBlur={formik.handleBlur}
                    error={
                      interest.isTech && formik.values.whyTech === ""
                        ? true
                        : false
                    }
                    helperText={
                      interest.isTech && formik.values.whyTech === ""
                        ? "*Required"
                        : null
                    }
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
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    onChange={formik.handleChange}
                    value={formik.values.expectations}
                    onBlur={formik.handleBlur}
                    error={
                      interest.isTech && formik.values.expectations === ""
                        ? true
                        : false
                    }
                    helperText={
                      interest.isTech && formik.values.expectations === ""
                        ? "*Required"
                        : null
                    }
                  />

                  <p>Github Link</p>
                  <TextField
                    id="ques7"
                    label="Answer"
                    placeholder="Your answer here"
                    name="github"
                    variant="filled"
                    multiline
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    onChange={formik.handleChange}
                    value={formik.values.github}
                    onBlur={formik.handleBlur}
                    // error={
                    //   interest.isTech && formik.values.github === ""
                    //     ? true
                    //     : false
                    // }
                    // helperText={
                    //   interest.isTech && formik.values.github === ""
                    //     ? "*Required"
                    //     : null
                    // }
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
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    onChange={formik.handleChange}
                    value={formik.values.techStack}
                    onBlur={formik.handleBlur}
                    error={
                      interest.isTech && formik.values.techStack === ""
                        ? true
                        : false
                    }
                    helperText={
                      interest.isTech && formik.values.techStack === ""
                        ? "*Required"
                        : null
                    }
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
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    onChange={formik.handleChange}
                    value={formik.values.problemSolved}
                    onBlur={formik.handleBlur}
                    error={
                      interest.isTech && formik.values.problemSolved === ""
                        ? true
                        : false
                    }
                    helperText={
                      interest.isTech && formik.values.problemSolved === ""
                        ? "*Required"
                        : null
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={techFields.app}
                        onChange={handleTechChange}
                        name="app"
                      />
                    }
                    label="App Dev."
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={techFields.web}
                        onChange={handleTechChange}
                        name="web"
                      />
                    }
                    label="Web Dev."
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={techFields.ml}
                        onChange={handleTechChange}
                        name="ml"
                      />
                    }
                    label="Machine Learning"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={techFields.design}
                        onChange={handleTechChange}
                        name="design"
                      />
                    }
                    label="Designing"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={techFields.devops}
                        onChange={handleTechChange}
                        name="devops"
                      />
                    }
                    label="Devops"
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
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    onChange={formik.handleChange}
                    value={formik.values.experienceProd}
                    onBlur={formik.handleBlur}
                    // error={
                    //   interest.isProd && formik.values.experienceProd === ""
                    //     ? true
                    //     : false
                    // }
                    // helperText={
                    //   interest.isProd && formik.values.experienceProd === ""
                    //     ? "*Required"
                    //     : null
                    // }
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
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    onChange={formik.handleChange}
                    value={formik.values.prevWork}
                    onBlur={formik.handleBlur}
                  />
                </div>
              ) : activeTab === "pr" ? (
                <div>
                  <p>
                    Mention any prior experience in public relations. (If any)
                  </p>
                  <TextField
                    id="ques12"
                    label="Answer"
                    placeholder="Your answer here"
                    name="experiencePR"
                    variant="filled"
                    rows={4}
                    multiline
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    onChange={formik.handleChange}
                    value={formik.values.experiencePR}
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
                    className="largeMultiline"
                    // style={{ width: "80ch" }}
                    onChange={formik.handleChange}
                    value={formik.values.strategies}
                    onBlur={formik.handleBlur}
                    error={
                      interest.isPR && formik.values.strategies === ""
                        ? true
                        : false
                    }
                    helperText={
                      interest.isPR && formik.values.strategies === ""
                        ? "*Required"
                        : null
                    }
                  />
                </div>
              ) : (
                <h3>Click on the department tab you selected.</h3>
              )}
            </Grid>
          </Grid>
        </Grid>

        <Button
          style={{
            width: "200px",
            height: "50px",
            color: "#0e0b1f",
            background: "#b92941",
            fontWeight: "600",
            fontSize: "20px",
            margin: "20px auto",
          }}
          onClick={formik.handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default General;
