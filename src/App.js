import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="note">
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
