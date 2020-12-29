import { ApolloServer } from "apollo-server-lambda"
import schema from './schema.js'

const server = new ApolloServer(schema)

export const handler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true
    }
})