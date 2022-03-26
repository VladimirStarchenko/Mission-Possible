import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { useMutation } from "@apollo/react-hooks";
import { UPDATE_USER } from "../utils/mutations.js";

import Auth from "../utils/auth";

const SettingsForm = (props) => {
  const { userData } = props;
  console.log("My Info", userData);
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: userData.me.username,
    email: userData.me.email,
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [updateUser, { error }] = useMutation(UPDATE_USER);

  console.log(userFormData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute updateUser mutation and pass in variable data from form
      const { data } = await updateUser({
        variables: { ...userFormData, _id: userData.me._id },
      });
      Auth.login(data.updateUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your update!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="username"
            autoComplete="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            name="email"
            autoComplete="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            name="password"
            autoComplete="new-password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          // disabled={ !(userFormData.username && userFormData.email && userFormData.password) }
          type="submit"
          variant="success"
        >
          Save
        </Button>
      </Form>
      {error && <div>Update failed</div>}
    </>
  );
};

export default SettingsForm;
