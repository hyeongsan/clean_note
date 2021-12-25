import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="note">
        {/* <Navbar /> */}
        <Switch>
          {routes.map((route) => {
            return (
              <Route key={route.path} path={route.path} exact>
                <route.component />
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
