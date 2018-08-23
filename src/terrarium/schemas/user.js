import Axios from 'axios';
import { getMongoUrlFromEnv } from '../../../config/mongo_url';
const MONGO_API_URL = getMongoUrlFromEnv('development');

export const typeDef = `
    extend type Query {
        users: [User]
        user(_id: String!): User
    }
    
    extend type Mutation {
        createUser(username: String!, password: String!): User
    }
  
    type User {
        _id: String!
    
        username: String!
    
        hash: String
        salt: String
    
        firstname: String
        lastname: String
    
        phone: String
        safetyCode: Int
        
        email: String
        
        birthdate: String
        
        lastLogin: String
        attempts: Int
        ip: String
        
        isAdmin: Boolean
        
        creationDate: String
    }
`;

export const resolvers = {
    Query: {
        users: () => Axios.get(`http://${MONGO_API_URL}/user/list`).then(res => res.data),
        user: (_, { _id }) => Axios.get(`http://${MONGO_API_URL}/user/${_id}`).then(res => res.data),
    },

    Mutation: {
        createUser: (_, data) => Axios.post(`http://${MONGO_API_URL}/user`, data).then(res => res.data),
    }
};