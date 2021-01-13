import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { loader } from 'graphql.macro';

import ErrorBar from 'components/ErrorBar'

const currentUserQuery = loader('./query.graphql');

const ComorbidityBar = ({dates, sex}) => {

    const [dateFrom, dateTo] = dates

    const { data, loading, error } = useQuery(currentUserQuery, {
        variables: {
            dateFrom,
            dateTo,
            sex,
        },
    })

    if(error) {
        return "Error"
    }

    if (loading) {
        return "Cargando"
    }

    return (
        <ErrorBar data={data.results.data} indexBy={"name"} maxValue={data.results.maxValue} />
    )
}

ComorbidityBar.propTypes = {
    dates: PropTypes.arrayOf(PropTypes.object).isRequired,
    sex: PropTypes.string.isRequired,
};

export default ComorbidityBar
