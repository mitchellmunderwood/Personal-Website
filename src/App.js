import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Work from "./pages/Work/index";
import Me from "./pages/Me/index";
import Contact from "./pages/Contact/index";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import Video from "./components/Video/index";
import appData from "./data/projects";

function App() {


  // useEffect to load store with data from file upon app opening

  return (
    <div className="App">
      <main>
        <Router>
          <Switch>
            <Route
              exact
              path={["/Portfolio-1.2-React/", "/work"]}
              component={Work}
            />
            <Route exact path="/Portfolio-1.2-React/me" component={Me} />
            <Route exact path="/Portfolio-1.2-React/contact" component={Contact} />
          </Switch>
          <NavBar />
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
