import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <Router>
    <Navbar></Navbar>{" "}
    <div className="main">
      <Switch>
        <Route exact path="/" name="App" component={App}></Route>
      </Switch>
    </div>{" "}
    <Footer></Footer>
  </Router>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();