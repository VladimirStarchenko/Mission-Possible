import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
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
