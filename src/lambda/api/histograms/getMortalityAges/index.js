import gql from 'graphql-tag'
import resolver from './resolver.js'

const definition = gql`

  type Error {
    mujeres: [Float]
    varones: [Float]
  }
 
  type MortalityData {
    ages: String
    varones: Float
    mujeres: Float
    error: Error
  }

   type MortalityBySex {
    data: [MortalityData]
    maxValue: Int
  }
`

const query = `getMortalityBySex(
  dateFrom: String
  dateTo: String
): MortalityBySex`

export default {
    query,
    resolver,
    types: definition,
}
