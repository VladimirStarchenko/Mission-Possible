import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Causes from "./pages/Contact";
import Contact from "./pages/Contact";
import React, { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  function renderPage() {
    if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Causes") {
      return <Causes />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else {
      return <Home />;
    }
  }

  return (
    <>
      <NavBar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;