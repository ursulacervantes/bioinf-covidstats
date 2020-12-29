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
    const { data, loading, error } = useQuery(GET_MORBIDITY, {
        variables: {
            dateFrom: "",
            dateTo: "",
            sex: "",
        },
    })

    if(error) {
        return "Error"
    }

    if (loading) {
        return "Cargando"
    }

    return (
        <ErrorBar data={data.results} indexBy={"name"} maxValue={35} />
    )
}

export default ComorbidityBar
