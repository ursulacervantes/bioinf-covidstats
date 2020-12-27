import express from 'express'
import cors from 'cors'
import apollo from 'apollo-server-express'
const { ApolloServer } = apollo
import schema from './schema.js'

const port = process.env.PORT || 4000
const server = new ApolloServer(schema)
const app = express();

server.applyMiddleware({ app })

app.use(cors())
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}${server.graphqlPath}`)
})