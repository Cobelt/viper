import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

import {
    typeDef as User,
    resolvers as userResolvers,
} from './schemas/user';


const schema = () => {
    const Query = `
        type Query {
            _empty: String
        }
    `;
    const Mutation = `
        type Mutation {
            _empty: String
        }
    `;
    const resolvers = {};

    return makeExecutableSchema({
        typeDefs: [Query, Mutation, User],
        resolvers: merge(resolvers, userResolvers),
    });
};
export default schema;
