import React from 'react'
import { gql, useQuery } from '@apollo/react-hooks'
import { loader } from 'graphql.macro';
import ErrorBar from 'components/ErrorBar'

const currentUserQuery = loader('./query.graphql');

const ComorbidityBar = () => {
    const { data, loading, error } = useQuery(currentUserQuery, {
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
