import React from "react";

function Nav() {
  return ( 
      <>
      <div class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <a href="#Home" class="navbar-brand">
         Mission:Possible
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div class="navbar-nav ml-auto">
            <a href="#Home" class="nav-item nav-link active">
              Home
            </a>
            <a href="#About" class="nav-item nav-link">
              About
            </a>
            <a href="#Causes" class="nav-item nav-link">
              Causes
            </a>
            <a href="#Contact" class="nav-item nav-link">
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