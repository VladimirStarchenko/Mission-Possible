import React from "react";

function Nav(setCurrentPage) {
  return ( 
      <>
      <div className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a href="#Home" className="navbar-brand">
         Mission:Possible
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto">
            <a onClick={()=> setCurrentPage("Home")} href="#Home" className="nav-item nav-link active">
              Home
            </a>
            <a onClick={()=> setCurrentPage("About")} href="#About" className="nav-item nav-link">
              About
            </a>
            <a onClick={()=> setCurrentPage("Causes")} href="#Causes" className="nav-item nav-link">
              Causes
            </a>
            <a onClick={()=> setCurrentPage("Contact")} href="#Contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
      </div>
      </>
  )
}

export default Nav;