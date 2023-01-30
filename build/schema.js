"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  type University {
    name: String!
    state_province: String!
    web_pages: [String!]!
  }

  type Query {
    universities(name: String, state_province: String): [University]!
  }
`;
