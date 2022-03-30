import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME } from "../utils/queries";
// import { REMOVE_BOOK } from '../utils/mutations';

// import Auth from '../utils/auth';
// import { removeBookId } from '../utils/localStorage';
import StripePayment from "../components/StripePayment";
const SavedCharities = () => {
  const { loading, data } = useQuery(GET_ME);

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing Saved Charities!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>You have no saved Charities!</h2>

        <StripePayment />
      </Container>
    </>
  );
};

export default SavedCharities;
