import gql from 'graphql-tag'
import resolver from './resolver.js'

const definition = gql`

  type ComorbidityData {
    name: String
    value: Float
    error: [Float]
  }

  type Comorbidity {
    data: [ComorbidityData]
    maxValue: Int
  }

`

const query = `getComorbidity(
  dateFrom: String
  dateTo: String
  sex: String
): Comorbidity`

export default {
    query,
    resolver,
    types: definition,
}
