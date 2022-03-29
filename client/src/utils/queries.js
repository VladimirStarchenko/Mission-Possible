import gql from "graphql-tag";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const GET_CHARITIES = gql`
  query charities {
    allCharities {
      name
      mission
      charityNavigatorURL
      websiteURL
    }
  }
`;
