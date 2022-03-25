import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SavedCharities from "./pages/SavedCharities";
import Navbar from "./components/Navbar";
import StripePayment from "./components/StripePayment";

import { useQuery } from "@apollo/client";
import { GET_CHARITIES } from "./utils/queries.js";

function App() {
  /**------------------------------
   *! DELETE THESE 3 PIECES OF CODE
   *------------------------------**/
  const { data, loading } = useQuery(GET_CHARITIES);

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  const { allCharities } = data;

  return (
    <>
      <Router>
        <>
          <Navbar />
          <Switch>
            {/* <Route exact path='/' component={ SearchBooks } /> */}
            {
              <Route exact path="/saved" component={SavedCharities} />
              // {/* <Route render={ () => <h1 className='display-2'>Wrong page!</h1> } /> */}
            }
          </Switch>
        </>
      </Router>

      {/* *! DELETE THIS PIECE OF CODE */}
      {allCharities.map((charity) => {
        return (
          <ul key={Math.random()}>
            <li>
              <strong>{charity.name}</strong>
            </li>
            <li>{charity.mission}</li>
            <li>{charity.charityNavigatorURL}</li>
            <li>{charity.websiteURL}</li>
          </ul>
        );
      })}
    </>
  );
}

export default App;
