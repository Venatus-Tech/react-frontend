var firebaseConfig = {
  apiKey: "AIzaSyC1CyacZtOsZEPXho5aNn7MrXFvC_wCr_k",
  authDomain: "venatus-app-data.firebaseapp.com",
  databaseURL: "https://venatus-app-data.firebaseio.com",
  projectId: "venatus-app-data",
  storageBucket: "venatus-app-data.appspot.com",
  messagingSenderId: "548772458633",
  appId: "1:548772458633:web:3d5e6a369c712547fed658",
  measurementId: "G-V9WNFC8L4J",
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();
const db = firestore.collection("gcl_codm_web");

const submitForm = async (e) => {
  e.preventDefault();
  console.log("Codm");

  var capname = getInputVal("capname");
  var teamname = getInputVal("teamname");
  var phone = getInputVal("phone");
  var email = getInputVal("email");
  var player1 = getInputVal("player1");
  var player2 = getInputVal("player2");
  var player3 = getInputVal("player3");
  var player4 = getInputVal("player4");
  var player5 = getInputVal("player5");
  var payment = getInputVal("payment");

  const imageurl = await uploadImage();
  await db
    .doc()
    .set({
      capname,
      teamname,
      phone,
      email,
      player1,
      player2,
      player3,
      player4,
      player5,
      imageurl,
    })
    .then(() => {
      console.log("Data Saved");
      alert("Registration Successful");
    })
    .catch((err) => {
      console.log(err);
      alert("Something went Wrong. Try Again");
    });
};
document.getElementById("codmform").addEventListener("submit", submitForm);

const getInputVal = (id) => {
  return document.getElementById(id).value;
};

const uploadImage = async () => {
  const ref = firebase.storage().ref();
  const file = document.getElementById("payment").files[0];
  const name = file.name;
  const metaData = {
    contentType: file.type,
  };
  let imageurl;
  const task = ref.child(`gcl_codm.web/${name}`).put(file, metaData);
  await task
    .then((snapshot) => {
      return snapshot.ref.getDownloadURL();
    })
    .then((url) => {
      console.log(url);
      imageurl = url;
    })
    .catch((err) => console.log(err));
  return imageurl;
};
