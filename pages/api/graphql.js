import { ApolloServer, makeExecutableSchema } from 'apollo-server-micro';
import typeDefs from '../../graphql/typeDefs';
import resolvers from '../../graphql/resolvers';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: '/api/graphql' });
