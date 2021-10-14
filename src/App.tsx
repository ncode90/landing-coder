import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Exp from "./Component/Exp/Exp";
import Regresiva from "./Component/Regresiva/Regresiva";


function App() {
  return (
    <section className="App">
      <Router>
        {/*
        <Link to="/">Home</Link>
        <Link to="/Exp">Exponenetes</Link>
        <Link to="/Regresiva">Countdown</Link>
         */}
        <Route exact path="/" component={Home} />
        <Route exact path="/Exp" component={Exp} />
        <Route exact path="/Regresiva" component={Regresiva} />
      </Router>
    </section>
  );
}

export default App;
