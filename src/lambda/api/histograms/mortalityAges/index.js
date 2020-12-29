import gql from 'graphql-tag'
import resolver from './resolver.js'

const definition = gql`
  type MortalityBySex {
    ages: String
    varones: Float
    mujeres: Float
    error: [Float]
  }
`

const query = `getMortalityBySex(
  dateFrom: String
  dateTo: String
): [MortalityBySex]`

export default {
    query,
    resolver,
    types: definition,
}
