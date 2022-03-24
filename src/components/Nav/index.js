import React from "react";

function Nav() {
    return(
        <div class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <a href="index.html" class="navbar-brand">Helpz</a>
                    <span class="navbar-toggler-icon"></span>
                </div>

                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                        <a href="index.html" className="nav-item nav-link">Home</a>
                        <a href="about.html" className="nav-item nav-link active">About</a>
                        <a href="causes.html" className="nav-item nav-link">Causes</a>
                        <a href="event.html" className="nav-item nav-link">Donate</a>
                        <a href="blog.html" className="nav-item nav-link">Contact</a>
                    </div>
                    </div>
</div>

        

    )
}

export default Nav;