import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./screens/home/Home.jsx";
import About from "./screens/aboutUs/AboutUs.jsx";
import Members from "./screens/members/Members.jsx";
import Events from "./screens/events/Events.jsx";
import Form from "./screens/form/Form.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Communities from "./screens/communities/Communities.jsx";
import CsgoForm from "./screens/form/csgoForm/CsgoForm.js";

function App() {
  return (
    <Router>
      <div className="mega-div">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/members" component={Members} />
          <Route exact path="/events" component={Events} />
          <Route path="/communities" component={Communities} />
          <Route path="/regform" component={Form} />
          <Route path="/events/csgo" component={CsgoForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
