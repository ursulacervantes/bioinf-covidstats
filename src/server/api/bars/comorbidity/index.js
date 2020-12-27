import gql from 'graphql-tag'
import resolver from './resolver.js'

const definition = gql`

  type Comorbidity {
    name: String
    value: Float
    error: [Float]
  }

`

const query = `getComorbidity(
  dateFrom: String
  dateTo: String
  sex: String
): [Comorbidity]`

export default {
    query,
    resolver,
    types: definition,
}
