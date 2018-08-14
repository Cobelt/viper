// import { makeExecutableSchema } from 'graphql-tools';
import Axios from 'axios';

import { getMongoUrlFromEnv } from '../../config/mongo_url';

const MONGO_API_URL = getMongoUrlFromEnv('development');

// // import UserType from '../type/type-user.graphql';
// // import UserQuery from '../query/query-user.graphql';
//
// const typeDefs = `
//     type User {
//         id: ID!
//
//         username: String!
//
//         hash: String!
//         salt: String!
//
//         #    firstname: String
//         #    lastname: String
//         #
//         #    email: String
//         #    birthdate: DateTime
//     }
//
//     type Query {
//         users: [User]
//         user: User
//     }
//
//     schema {
//       query: Query
//     }
// `;
//
// // to Dispatch
// const resolvers = {
//     Query: {
//         users() {
//             return users;
//         },
//         user(_, { userId }) {
//             const user = find(users, { id: userId });
//             if (!user) throw new Error(`Couldn't find user with id ${userId}`);
//             return user;
//         },
//     },
// };
// const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers,
// });
//
const loadSchema = async () => {
    try {
        const res = await Axios.get(`${MONGO_API_URL}/schemas`);
        console.log(res.data);
    } catch (err) {
        throw new Error(`An error occured while fetching data from API MONGODB (${MONGO_API_URL})`);
    }
}

const schema = loadSchema();
export default schema
