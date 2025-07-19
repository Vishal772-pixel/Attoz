import { userTypeDefs } from "./user";
import { videoTypeDefs } from "./video";
import { gql } from "apollo-server-express";
export const typeDefs = gql`
  ${userTypeDefs}
  ${videoTypeDefs}
`;
