import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SavedCharities from "./pages/SavedCharities";
import StripePayment from "./components/StripePayment";

import AppNavbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Causes from "./pages/Causes";

import Navbar from "./components/Navbar";
import TempHome from "./pages/TempHome";
import DeleteUserForm from "./components/deleteUserForm.js";

// <DeleteUserForm />
//         <Navbar />
//         <TempHome />

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  function renderPage() {
    if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Causes") {
      return <Causes />;
    } else {
      return <Home />;
    }
  }
  return (
    <>
      <Router>
        <>
          <>
            <AppNavbar setCurrentPage={setCurrentPage} />
            {renderPage()}
          </>
          <Switch>
            {/* <Route exact path='/' component={ SearchBooks } /> */}
            {
              //<Route exact path="/saved" component={SavedCharities} />
              // {/* <Route render={ () => <h1 className='display-2'>Wrong page!</h1> } /> */}
            }
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
