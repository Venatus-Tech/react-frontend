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
const db = firestore.collection("gcl_donation_web");

const submitForm = async (e) => {
  e.preventDefault();

  var name = getInputVal("name");
  var phone = getInputVal("phone");
  var email = getInputVal("email");
  const imageurl = await uploadImage();

  await db
    .doc()
    .set({
      name,
      phone,
      email,
      imageurl,
    })
    .then(() => {
      console.log("Data Saved");
      alert("Donation successful! Thanks for your support.");
    })
    .catch((err) => {
      console.log(err);
      alert("Something went Wrong. Try Again");
    });
};
document.getElementById("donationform").addEventListener("submit", submitForm);

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

  const task = ref.child(`gcl_donation_web/${name}`).put(file, metaData);
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
