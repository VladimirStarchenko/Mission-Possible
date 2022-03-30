import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

import { useMutation, useQuery } from "@apollo/client";

import Auth from "../utils/auth";
import { getCharities } from "../utils/API";
import { GET_CHARITIES } from "../utils/queries";

const SearchCharities = () => {
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");
  const { data, loading } = useQuery(GET_CHARITIES);

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(event.target);
  };

  return (
    <>
      <form>
        <input type="text" />

        <button onClick={handleFormSubmit}>Search</button>
      </form>
    </>
  );
};

export default SearchCharities;
