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
import CsgoForm1v1 from "./screens/form/csgoForm/CsgoForm1v1.js";
import CodmForm1v1 from "./screens/form/codmform/CodmForm1v1.js";
import AmibotCodm from "./screens/form/codmform/aimbotCodm.js";
import AimBotValorant from "./screens/form/valorantForm/aimbotValorant.js";

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
          {/* <Route path="/events/csgo5" component={CsgoForm} />
          <Route path="/events/csgo1" component={CsgoForm1v1} /> */}
          {/* <Route path="/events/codm" component={CodmForm1v1} /> */}
          {/* <Route path="/events/aimbot/valorant" component={AimBotValorant} />
          <Route path="/events/aimbot/codm" component={AmibotCodm} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
