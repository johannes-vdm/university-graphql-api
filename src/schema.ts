import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type University {
    name: String!
    state_province: String!
    web_pages: [String!]!
  }

  type Query {
    universities(name: String, state_province: String): [University]!
  }
`;
