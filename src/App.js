import Navbar from "./components/navbar/Navbar.jsx";

import Home from "./screens/home/Home.jsx";
import About from "./screens/aboutUs/AboutUs.jsx";
import Members from "./screens/members/Members.jsx";
import Events from "./screens/events/Events.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/members' component={Members} />
          <Route path='/events' component={Events} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
