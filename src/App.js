import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    // <Router basename={process.env.PUBLIC_URL}>
    //   <div className="note">
    //     <Switch>
    //       {routes.map((route) => {
    //         return (
    //           <Route
    //             exact
    //             key={route.path}
    //             path={route.path}
    //             component={route.component}
    //           />
    //         );
    //       })}
    //     </Switch>
    //   </div>
    // </Router>
    <div className="note">
      <Home />
    </div>
  );
}

export default App;
