import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { GET_ME } from '../../utils/queries';

const Settings = () => {

  // Retrieve current user data
  const { data } = useQuery(GET_ME);

  // set initial form state to the current logged in user's data
  const [userFormData, setUserFormData] = useState({ username: data.me.username, email: data.me.email, password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);


  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...userFormData }
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {/* This is needed for the validation functionality above */ }
      <Form noValidate validated={ validated } onSubmit={ handleFormSubmit }>
        {/* show alert if server response is bad */ }
        <Alert dismissible onClose={ () => setShowAlert(false) } show={ showAlert } variant='danger'>
          Something went wrong with your update!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            autoComplete='username'
            onChange={ handleInputChange }
            value={ userFormData.username }
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            autoComplete='email'
            onChange={ handleInputChange }
            value={ userFormData.email }
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='oldPassword'>Old Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            autoComplete='new-password'
            onChange={ handleInputChange }
            value={ userFormData.password }
            required
          />
          <Form.Control.Feedback type='invalid'>Old password is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='newPassword'>New Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            autoComplete='new-password'
            onChange={ handleInputChange }
            value={ userFormData.password }
            required
          />
          <Form.Control.Feedback type='invalid'>New password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={ !(userFormData.username && userFormData.email && userFormData.password) }
          type='submit'
          variant='success'>
          Update
        </Button>
      </Form>
      {error && <div>Update successful</div> }
    </>
  );
};

export default Settings;
