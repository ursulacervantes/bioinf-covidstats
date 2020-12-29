import gql from 'graphql-tag'
import getComorbidity from './api/bars/comorbidity/index.js'

const typeDefs = gql`

  # Bars
  ${getComorbidity.types}

  type Query {
    ${getComorbidity.query}
  }

  # type Mutation {}

  schema {
    query: Query
    # mutation: Mutation
  }
`

export default {
    typeDefs,
    resolvers: {
        // Type Resolvers

        // Query Resolvers
        Query: {
            getComorbidity: getComorbidity.resolver,
        },

        // Mutation Resolvers
        // Mutation: {
        // },
    },
}
