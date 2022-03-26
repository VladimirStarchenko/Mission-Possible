// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

input BookInput {
  bookId: ID!
  authors: [String]
  description: String!
  title: String!
  image: String
  link: String
}

type User {
  _id: ID
  username: String
  email: String
}

type Query {
  me: User
  users: [User]
  user(username: String!): User
}


type Book {
  bookId: ID!
  authors: [String]
  description: String!
  title: String!
  image: String
  link: String
}

type Auth {
  token: ID!
  user: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  updateUser(_id: String, username: String, email: String, password: String): Auth
  saveBook(bookData: BookInput!): User
  removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;