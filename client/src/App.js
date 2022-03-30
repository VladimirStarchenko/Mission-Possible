import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SavedCharities from "./pages/SavedCharities";
import StripePayment from "./components/StripePayment";

import AppNavbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <>
        <AppNavbar></AppNavbar>
        <Home></Home>
      </>
    </Router>
  );
}

export default App;
