import domain from './domain';

const mongoUrls = {
    'development': `http://terrarium:3020`,
    'production': `${domain.ip}:3020`,
};

export const getMongoUrlFromEnv = (env) => mongoUrls[env];
