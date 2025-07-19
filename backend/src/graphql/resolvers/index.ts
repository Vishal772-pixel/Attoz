import { userResolvers } from "./user";
import { videoResolvers } from "./video";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...videoResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...videoResolvers.Mutation
  }
};
