import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Work from "./pages/Work/index";
import Me from "./pages/Me/index";
import Contact from "./pages/Contact/index";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/work"]} component={Work} />
          <Route exact path="/me" component={Me} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
