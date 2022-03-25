import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SavedCharities from "./pages/SavedCharities";
import StripePayment from "./components/StripePayment";

import Navbar from "./components/Navbar";
import TempHome from "./pages/TempHome";

function App() {
  return (
    <>
      <Router>
        <>
          <Navbar />
          <TempHome />
          <Switch>
            {/* <Route exact path='/' component={ SearchBooks } /> */}
            {
              <Route exact path="/saved" component={SavedCharities} />
              // {/* <Route render={ () => <h1 className='display-2'>Wrong page!</h1> } /> */}
            }
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
