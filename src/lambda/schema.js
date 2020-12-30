import gql from 'graphql-tag'
import getComorbidity from './api/bars/getComorbidity/index.js'
import getSymptoms from './api/pies/getSymptoms/index.js'
import getMortalityBySex from './api/histograms/getMortalityAges/index.js'

const typeDefs = gql`

  # Bars
  ${getComorbidity.types}
  ${getSymptoms.types}
  ${getMortalityBySex.types}

  type Query {
    ${getComorbidity.query}
    ${getSymptoms.query}
    ${getMortalityBySex.query}
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
          getSymptoms: getSymptoms.resolver,
          getMortalityBySex: getMortalityBySex.resolver,
        },

        // Mutation Resolvers
        // Mutation: {
        // },
    },
}
