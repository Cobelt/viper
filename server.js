import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import session from 'express-session';
import { makeExecutableSchema } from 'graphql-tools';

import pkg from './package.json';
import schema from './src/terrarium';


const server = () => {
    const app = express();

    const sessionConfig = {
        secret: 'cobeltdierkarytteckinoa',
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000
        },
    };
    app.use(session(sessionConfig));

    app.use(cors());

    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }));

    app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
};

//     const typeDefs = [`
//     type Query {
//         user(_id: String): User
//         users: [User]
//     }
//
//     type User {
//         _id: String!
//         username: String!
//         hash: String!
//         salt: String!
//         firstname: String
//         lastname: String
//         lang: String
//     }
//
//     schema {
//         query: Query
//     }
// `];

// const schema = typeDefs;

// Root resolver
// const root = {
//     name: () => pkg.name,
//     version: () => pkg.version,
// };
