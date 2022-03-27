// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
// import SignUpForm from "./SignupForm";
// import SettingsForm from "./settings.js";
// import LoginForm from "./LoginForm";

// import Auth from "../utils/auth";

// import { useQuery, useMutation } from "@apollo/react-hooks";
// import { GET_ME } from "../utils/queries";

// const AppNavbar = () => {
// // set modal display state
// const { loading, data: userData, refetch } = useQuery(GET_ME);
// const [showModal, setShowModal] = useState(false);
// const [showSettingsModal, setShowSettingsModal] = useState(false);

// function openModal() {
//   refetch();
//   if (!loading) {
//     setShowSettingsModal(true);
//   }
// }

//   return (
//     <>
// <Navbar bg="light" variant="light" expand="lg">
//   <Container fluid>
//     <Navbar.Brand as={Link} to="/">
//       Mission Possible
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="navbar" />
//     <Navbar.Collapse id="navbar">
//       <Nav className="ml-auto">
//         <Nav.Link as={Link} to="/">
//           Search For Charity
//         </Nav.Link>
//         {/* if user is logged in show Saved Charities and logout */}
//         {Auth.loggedIn() ? (
//           <>
//             <Nav.Link as={Link} to="/saved">
//               Saved Charities
//             </Nav.Link>
//             <Nav.Link onClick={() => openModal()}>Settings</Nav.Link>
//             <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
//           </>
//         ) : (
//           <Nav.Link onClick={() => setShowModal(true)}>
//             Login/Sign Up
//           </Nav.Link>
//         )}
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
// {/* set modal data up */}
// <Modal
//   size="lg"
//   show={showModal}
//   onHide={() => setShowModal(false)}
//   aria-labelledby="signup-modal"
// >
//   {/* tab container to do either signup or login component */}
//   <Tab.Container defaultActiveKey="login">
//     <Modal.Header closeButton>
//       <Modal.Title id="signup-modal">
//         <Nav variant="pills">
//           <Nav.Item>
//             <Nav.Link eventKey="login">Login</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="signup">Sign Up</Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <Tab.Content>
//         <Tab.Pane eventKey="login">
//           <LoginForm handleModalClose={() => setShowModal(false)} />
//         </Tab.Pane>
//         <Tab.Pane eventKey="signup">
//           <SignUpForm handleModalClose={() => setShowModal(false)} />
//         </Tab.Pane>
//       </Tab.Content>
//     </Modal.Body>
//   </Tab.Container>
// </Modal>

// {/* set settings modal data up */}
// <Modal
//   size="lg"
//   show={showSettingsModal}
//   onHide={() => setShowSettingsModal(false)}
//   aria-labelledby="settings-modal"
// >
//   {/* tab container to do either settings component */}
//   <Tab.Container defaultActiveKey="settings">
//     <Modal.Header closeButton>
//       <Modal.Title id="settings-modal">
//         <Nav variant="pills">
//           <Nav.Item>
//             <Nav.Link eventKey="settings">
//               Update Account Information
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <Tab.Content>
//         <Tab.Pane eventKey="settings">
//           <SettingsForm
//             userData={userData}
//             handleModalClose={() => setShowSettingsModal(false)}
//           />
//         </Tab.Pane>
//       </Tab.Content>
//     </Modal.Body>
//   </Tab.Container>
// </Modal>
//     </>
//   );
// };

// export default AppNavbar;

//^ Above is the the previous nav that also has the settings tab in it

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Auth from "../utils/auth";
//adding this for settings
import SettingsForm from "./settings.js";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME } from "../utils/queries";



const AppNavbar = ({ setCurrentPage }) => {
  //set modal display state
  const { loading, data: userData, refetch } = useQuery(GET_ME);
  const [showModal, setShowModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

 function openModal() {
   refetch();
   if (!loading) {
     setShowSettingsModal(true);
   }
 }


  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          {/* <Navbar.Brand as={Link} to='/'>
              Mission Possible
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">
                Search For Charity
              </Nav.Link>
              {/* if user is logged in show Saved Charities and logout */}
              {Auth.loggedIn() ? (
                <>
                  {/* <Nav.Link as={Link} to="/saved">
                    Saved Charities
                  </Nav.Link> */}
                  <Nav.Link onClick={() => openModal()}>Settings</Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  Login/Sign Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
      set settings modal data up
<Modal
   size="lg"
   show={showSettingsModal}
   onHide={() => setShowSettingsModal(false)}
   aria-labelledby="settings-modal"
 >
   {/* tab container to do either settings component */}
   <Tab.Container defaultActiveKey="settings">
     <Modal.Header closeButton>
       <Modal.Title id="settings-modal">
         <Nav variant="pills">
           <Nav.Item>
             <Nav.Link eventKey="settings">
               Update Account Information
             </Nav.Link>
           </Nav.Item>
         </Nav>
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <Tab.Content>
         <Tab.Pane eventKey="settings">
           <SettingsForm
             userData={userData}
             handleModalClose={() => setShowSettingsModal(false)}
           />
         </Tab.Pane>
       </Tab.Content>
     </Modal.Body>
   </Tab.Container>
 </Modal>
     

      {/* <!-- Nav Bar Start --> */}
      <div className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a href="index.html" className="navbar-brand">
            Mission: Possible
          </a>
          <button
            type="button"
            className="navbar-toggler"
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
              <a
                onClick={() => setCurrentPage("Home")}
                href="#Home"
                className="nav-item nav-link active"
              >
                Home
              </a>
              <a
                onClick={() => setCurrentPage("About")}
                href="#About"
                className="nav-item nav-link"
              >
                About
              </a>
              <a
                onClick={() => setCurrentPage("Causes")}
                href="#Causes"
                className="nav-item nav-link"
              >
                Causes
              </a>
              <a
                onClick={() => setCurrentPage("Contact")}
                href="#Contact"
                className="nav-item nav-link"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Nav Bar End --> */}
    </>
  );
};

export default AppNavbar;
