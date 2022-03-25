import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARITIES } from "../utils/queries.js";

function Home() {
  const { data, loading } = useQuery(GET_CHARITIES);

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  const { allCharities } = data;

  return (
    <>
      {allCharities.map((charity) => {
        return (
          <ul key={Math.random()}>
            <li>
              <strong>{charity.name}</strong>
            </li>
            <li>{charity.mission}</li>
            <li>{charity.charityNavigatorURL}</li>
            <li>{charity.websiteURL}</li>
          </ul>
        );
      })}
    </>
  );
}

export default Home;
