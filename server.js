import express from 'express';
import graphqlHTTP from 'express-graphql';
import session from 'express-session';
import moment from 'moment';
import cors from 'cors';

import env from 'dotenv';
env.config();

import pkg from './package.json';
import schema from './src/terrarium';

const server = () => {
    console.log('Creating API...');
    const timeStart = moment();

    const app = express();

    const sessionSecretKey = process.env.SESSION_SECRET_KEY || 'co123be456lt789di!$erk?';
    const sessionMaxAge = parseInt(process.env.SESSION_MAX_AGE) || 172800000; // 60000 = 1 minute, 172800000 = 2j

    const sessionConfig = {
        secret: sessionSecretKey,
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: sessionMaxAge
        },
    };
    app.use(session(sessionConfig));

    app.use(cors());

    app.use('/graphql', graphqlHTTP({
        schema: schema(),
        graphiql: true,
    }));

    const HOST = process.env.HOST || 'viper';
    const PORT = process.env.PORT || 4000;

    const timeEnd = moment();
    console.log('Done in', timeEnd - timeStart, 'ms !');
    app.listen(4000, () => console.log(`Express GraphQL Server Now Running On ${HOST}:${PORT}/graphql`));
};

server();