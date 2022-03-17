import { GraphQLHandler } from "graphql-mocks";
import { ResolverMapMiddleware } from "graphql-mocks/types";
import graphqlSchema from './schema';
import resolverMap from './resolvers';


const delayMiddleware: ResolverMapMiddleware = async (resolverMap) => {
  // This adds delay to the first request, simulating an awful network connection
  return new Promise(resolve => {
    setTimeout(() => resolve(resolverMap), 5000);
  });
}

const server = new GraphQLHandler({
  resolverMap,
  dependencies: {
    graphqlSchema,
  },
  middlewares: [delayMiddleware]
});

export default server;
