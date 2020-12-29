import gql from 'graphql-tag'
import resolver from './resolver.js'

const definition = gql`

  type Symptom {
    name: String
    value: Float
    label: String
    id: String
  }

`

const query = `getSymptoms(
  dateFrom: String
  dateTo: String
  sex: String
  bloodType: String
  HRFactor: String
): [Symptom]`

export default {
    query,
    resolver,
    types: definition,
}
