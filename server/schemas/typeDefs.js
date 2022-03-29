// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    allCharities: [Charity]
    users: [User]
    user(username: String!): User
  }

  type Charity {
    name: String
    mission: String
    charityNavigatorURL: String
    websiteURL: String
  }

  type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(
      _id: String
      username: String
      email: String
      password: String
    ): Auth
    deleteUser: User
  }
`;

module.exports = typeDefs;
