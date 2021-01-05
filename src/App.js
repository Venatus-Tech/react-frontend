import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./screens/Home/Home.jsx";
import About from "./screens/aboutUs/AboutUs.jsx";
import Members from "./screens/members/Members.jsx";
import Events from "./screens/events/Events.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Communities from "./screens/communities/Communities.jsx";

function App() {
  return (
    <Router>
      <div className="mega-div">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/members" component={Members} />
          <Route path="/events" component={Events} />
          <Route path="/communities" component={Communities} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
