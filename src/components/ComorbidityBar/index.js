import React from 'react'
import { gql, useQuery } from '@apollo/react-hooks'

import ErrorBar from 'components/ErrorBar'

const GET_MORBIDITY = gql`
    query(
    $dateFrom: String
    $dateTo: String
    $sex: String
    ) {
    results: getComorbidity(
        dateFrom: $dateFrom
        dateTo: $dateTo
        sex: $sex
    ) {
        name
        value
        error
    }
    }
`

const ComorbidityBar = () => {
    const { data } = useQuery(GET_MORBIDITY, {
        variables: {
            dateFrom: "",
            dateTo: "",
            sex: "",
        },
  })

    return (
        <div>
            <h2>Comorbilidad</h2>
            
            <ErrorBar data={data.results} />

        </div>
    )
}

export default ComorbidityBar
