import env from 'dotenv';
env.config();

const MONGODB_API_HOST = process.env.MONGODB_API_HOST || terrarium;
const MONGODB_API_PORT = process.env.MONGODB_API_PORT || 2999;
const mongoUrls = {
    'development': `${MONGODB_API_HOST}:${MONGODB_API_PORT}`,
};

export const getMongoUrlFromEnv = (env) => mongoUrls[env] || 'unknown';
